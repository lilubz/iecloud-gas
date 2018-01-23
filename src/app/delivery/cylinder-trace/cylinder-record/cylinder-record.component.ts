import { DispatcherService } from './../../../archive/employee/dispatcher/dispatcher.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { SelectItem, TableBody } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';
import { zh_CN } from '../../../core/date-localization';
import { CommonRequestService } from '../../../core/common-request.service';
import { CylinderTraceService } from '../cylinder-trace.service';

@Component({
  selector: 'gas-cylinder-record',
  templateUrl: './cylinder-record.component.html',
  styleUrls: ['./cylinder-record.component.css'],
  providers: [DispatcherService]
})
export class CylinderRecordComponent implements OnInit {
  zh = zh_CN;
  cylinderStatus: SelectItem[] = [
    { label: '储配站', value: 1 },
    { label: '瓶库', value: 2 },
    { label: '送气工', value: 3 },
  ];
  dispatcherSearchFields: SelectItem[] = [
    { label: '送气工编号', value: 1 },
    { label: '送气工名称', value: 2 },
  ];
  selectedCylinderStatus = this.cylinderStatus[0].value;
  selectedDispatcherSearchField = this.dispatcherSearchFields[0].value;

  dispatcherSuggestions = [];

  distributionStationSearchTypes: SelectItem[] = [
    { label: '全部', value: '' },
    { label: '重瓶出库', value: '重出' },
    { label: '空瓶入库', value: '空入' },
  ];
  cylinderStorageSearchTypes: SelectItem[] = [
    { label: '全部', value: '' },
    { label: '重瓶入库', value: '重入' },
    { label: '重瓶出库', value: '重出' },
    { label: '空瓶入库', value: '空入' },
    { label: '空瓶出库', value: '空出' },
  ];
  dispatcherSearchTypes: SelectItem[] = [
    { label: '全部', value: '' },
    { label: '提取重瓶', value: '重入' },
    { label: '配送重瓶', value: '重出' },
    { label: '空瓶回收', value: '空入' },
    { label: '空瓶发出', value: '空出' },
  ];
  selectedDistributionStationType = this.distributionStationSearchTypes[0].value; // 选中的储配站的查询类型
  selectedCylinderStorageType = this.cylinderStorageSearchTypes[0].value; // 选中的瓶库的查询类型
  selectedDispatcherType = this.dispatcherSearchTypes[0].value; // 选中的配送工的查询类型

  distributionStationList: SelectItem[] = [];
  cylinderStorageList: SelectItem[] = [];
  // dispatcherList: SelectItem[] = [];
  selectedDistributionStation = ''; // 选中的储配站
  selectedCylinderStorage = ''; // 选中的瓶库
  selectedDispatcher; // 选中的配送工

  cylinderList: Array<{
    createTime: string,
    gcStatusTypeName: string,
    beforeLiabilityTypeName: string,
    beforeLiabilityName: string,
    beforeLiabilityContact: string,
    beforeLiabilityAddress: string,
    afterLiabilityTypeName: string,
    afterLiabilityName: string,
    afterLiabilityContact: string,
    afterLiabilityAddress: string
  }> = [];

  pageSize = 10;
  pageNumber = 1;
  total = 0;
  first = 0;
  firstFlag = true;
  today = new Date();
  beginTime: Date = new Date((new Date().getTime() - 7 * 24 * 60 * 60 * 1000));
  endTime: Date = new Date();

  constructor(
    private commonRequestService: CommonRequestService,
    private cylinderTraceService: CylinderTraceService,
    private messageService: MessageService,
    private dispatcherService: DispatcherService
  ) {

  }

  ngOnInit() {

    this.commonRequestService.listCorpSupplyStation().then(data => {
      if (data.status === 0) {
        if (data.data.length > 0) {
          this.cylinderStorageList = data.data.map(
            item => ({ label: item.supplyStationName, value: item.supplyStationNumber })
          );
          this.selectedCylinderStorage = this.cylinderStorageList[0].value;
        }
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取瓶库失败', detail: data.msg });
      }
    });

    this.commonRequestService.listCorpInflatableStation().then(data => {
      if (data.status === 0) {
        if (data.data.length > 0) {
          this.distributionStationList = data.data.map(
            item => ({ label: item.inflatableName, value: item.inflatableStationNumber })
          );
          this.selectedDistributionStation = this.distributionStationList[0].value;
        }
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取储配站失败', detail: data.msg });
      }
    });
  }

  onPageChange(event) {
    this.pageNumber = event.first / event.rows + 1;
    this.pageSize = event.rows;

    this.listGcSendOrReceive();
  }

  searchDispatcher(query) {
    this.dispatcherService.getDispatcherInfo({
      enterpriseId: '',
      name: this.selectedDispatcherSearchField === 2 ? query : '',
      jobNumber: this.selectedDispatcherSearchField === 1 ? query : '',
      phone: '',
      idNumber: '',
      pageSize: 999999,
      pageNumber: 1
    }).then(data => {
      if (data.status === 0) {
        this.dispatcherSuggestions = data.data.list;
      } else {
        this.dispatcherSuggestions = [];
        this.messageService.add({ severity: 'warn', summary: '获取配送工信息失败', detail: data.msg });
      }
    });
  }

  selectDispatcherSearchField(event) {
    this.selectedDispatcher = null;
  }

  blurSelectDispatcher() {
    if (!this.selectedDispatcher || !this.selectedDispatcher.dispatcherNumber) {
      this.selectedDispatcher = null;
    }
  }

  search() {
    if (this.pageNumber === 1) {
      this.listGcSendOrReceive();
    }
    this.total = 0;
    this.first = 0;
    this.pageNumber = 1;
  }

  listGcSendOrReceive() {
    if (this.firstFlag) {
      this.firstFlag = false;
      this.cylinderList = [];
      return;
    }

    let liabilitySubjectId;
    let searchType;

    switch (this.selectedCylinderStatus) {
      case 1:
        if (!this.selectedDistributionStation) {
          this.messageService.add({ severity: 'warn', summary: '请选择储配站！', detail: '' });
          return;
        }
        liabilitySubjectId = this.selectedDistributionStation;
        searchType = this.selectedDistributionStationType;
        break;
      case 2:
        if (!this.selectedCylinderStorage) {
          this.messageService.add({ severity: 'warn', summary: '请选择瓶库！', detail: '' });
          return;
        }
        liabilitySubjectId = this.selectedCylinderStorage;
        searchType = this.selectedCylinderStorageType;
        break;
      case 3:
        if (!this.selectedDispatcher) {
          this.messageService.add({ severity: 'warn', summary: '请输入配送人员信息！', detail: '' });
          return;
        }
        liabilitySubjectId = this.selectedDispatcher.dispatcherNumber;
        searchType = this.selectedDispatcherType;
        break;

      default:
        break;
    }

    if (this.beginTime > this.endTime) {
      this.messageService.add({ severity: 'warn', summary: '开始时间不可大于结束时间', detail: '' });
      return;
    }

    this.cylinderTraceService.listGcSendOrReceive({
      liabilitySubjectType: this.selectedCylinderStatus,
      liabilitySubjectId,
      searchType,
      beginTime: this.beginTime,
      endTime: this.endTime,
      pageNumber: this.pageNumber,
      pageSize: this.pageSize,
    }).then(data => {
      if (data.status === 0) {
        if (data.data.list.length > 0) {
          this.cylinderList = data.data.list;
          this.total = data.data.total;
        } else {
          this.cylinderList = [];
          this.total = 0;
        }
      } else {
        this.cylinderList = [];
        this.messageService.add({ severity: 'warn', summary: '获取信息失败！', detail: data.msg });
      }
    });
  }
}

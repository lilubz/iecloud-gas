import { DispatcherService } from './../../../archive/employee/dispatcher.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { SelectItem, TableBody } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';
import { zh_CN } from '../../../common/date-localization';
import { CommonRequestService } from '../../../core/common-request.service';
import { CylinderTraceService } from '../cylinder-trace.service';
import { UserStateService } from './../../../core/userState.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Util } from '../../../core/util';

@Component({
  selector: 'gas-cylinder-record',
  templateUrl: './cylinder-record.component.html',
  styleUrls: ['./cylinder-record.component.css'],
  providers: [DispatcherService]
})
export class CylinderRecordComponent implements OnInit {
  loading: Boolean = false;
  Math = Math;
  zh = zh_CN;
  cylinderStatus: SelectItem[];
  dispatcherSearchFields: SelectItem[] = [
    { label: '送气工编号', value: 1 },
    { label: '送气工名称', value: 2 },
  ];
  userSearchFields: SelectItem[] = [
    {
      label: '用户姓名', value: {
        name: 'name',
        field: 'userName',
        minLength: 2, // 2
        placeholder: '请输入用户姓名'
      }
    },
    {
      label: '身份证号', value: {
        name: 'idNumber',
        field: 'certificateId',
        minLength: 8, // 8
        placeholder: '请输入身份证号'
      }
    },
    {
      label: '手机号码', value: {
        name: 'phone',
        field: 'phone',
        minLength: 5, // 5
        placeholder: '请输入手机号码'
      }
    },
  ];
  selectedCylinderStatus;
  selectedDispatcherSearchField = this.dispatcherSearchFields[0].value;
  selectedUserSearchField = this.userSearchFields[0].value;

  dispatcherSuggestions = [];
  userSuggestions = [];

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
  selectedCylinderStorageType = this.cylinderStorageSearchTypes[0].value; // 选中的供应站的查询类型
  selectedDispatcherType = this.dispatcherSearchTypes[0].value; // 选中的配送工的查询类型

  distributionStationList: SelectItem[] = [];
  cylinderStorageList: SelectItem[] = [];
  // dispatcherList: SelectItem[] = [];
  selectedDistributionStation = ''; // 选中的储配站
  selectedCylinderStorage = ''; // 选中的供应站
  selectedDispatcher; // 选中的配送工
  selectedUser; // 选中的用户

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

  pageSize = 40;
  pageNumber = 1;
  total = 0;
  first = 0;
  firstFlag = true;
  today = new Date();
  beginTime: Date = new Date((new Date().getTime() - 7 * 24 * 60 * 60 * 1000));
  endTime: Date = new Date();

  constructor(
    private routerInfo: ActivatedRoute,
    private router: Router,
    private commonRequestService: CommonRequestService,
    private cylinderTraceService: CylinderTraceService,
    private messageService: MessageService,
    private dispatcherService: DispatcherService,
    private userStateService: UserStateService,
    private util: Util
  ) {

  }

  ngOnInit() {
    // this.cylinderStatus = [
    //   { label: '储配站', value: 1 },
    //   { label: '供应站', value: 2 },
    //   { label: '送气工', value: 3 },
    // ];

    this.routerInfo.paramMap.subscribe((params) => {
      this.init();
      this.selectedCylinderStatus = parseInt(params.get('type'), 10);
      if (this.selectedCylinderStatus === 4) {
        this.beginTime = new Date((new Date().getTime() - 180 * 24 * 60 * 60 * 1000));
      }
    });

    this.routerInfo.queryParams.subscribe((queryParams) => {
      // 跳转查询
      if (JSON.stringify(queryParams) !== '{}') { // 查询参数不为空
        this.selectedCylinderStatus = parseInt(queryParams.liabilitySubjectType, 10);
        this.loading = true;
        this.beginTime = queryParams.beginTime ? new Date(parseInt(queryParams.beginTime, 10)) : new Date(0);
        this.endTime = queryParams.endTime ? new Date(parseInt(queryParams.endTime, 10)) : this.endTime;
        switch (this.selectedCylinderStatus) {
          case 1:
            this.selectedDistributionStation = queryParams.liabilityNumber;
            this.selectedDistributionStationType = queryParams.type ? queryParams.type : this.selectedDistributionStationType;
            this.search();
            break;
          case 2:
            this.selectedCylinderStorage = queryParams.liabilityNumber;
            this.selectedCylinderStorageType = queryParams.type ? queryParams.type : this.selectedCylinderStorageType;
            this.search();
            break;
          case 3:
            this.selectedDispatcherType = queryParams.type ? queryParams.type : this.selectedDispatcherType;
            this.selectedDispatcherSearchField = this.dispatcherSearchFields[1].value; // 搜索类型下拉框为送气工姓名
            this.selectedDispatcher = {
              name: queryParams.liabilityName,
              dispatcherNumber: queryParams.liabilityNumber,
            };
            this.search();
            break;
          case 4:
            this.selectedUserSearchField = this.userSearchFields[0].value; // 搜索类型下拉框为用户姓名
            this.selectedUser = {
              userName: queryParams.liabilityName,
              userNumber: queryParams.liabilityNumber,
            };
            this.search();
        }
      }
    });

    this.commonRequestService.listCorpSupplyStation().then(data => {
      if (data.status === 0) {
        if (data.data.length > 0) {
          this.cylinderStorageList = data.data.map(
            item => ({ label: item.supplyStationName, value: item.supplyStationNumber })
          );
          this.selectedCylinderStorage = this.selectedCylinderStorage ? this.selectedCylinderStorage : this.cylinderStorageList[0].value;
        }
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取供应站失败', detail: data.msg });
      }
    });

    this.commonRequestService.listCorpInflatableStation().then(data => {
      if (data.status === 0) {
        if (data.data.length > 0) {
          this.distributionStationList = data.data.map(
            item => ({ label: item.inflatableName, value: item.inflatableStationNumber })
          );
          this.selectedDistributionStation = this.selectedDistributionStation ? this.selectedDistributionStation : this.distributionStationList[0].value;
        }
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取储配站失败', detail: data.msg });
      }
    });
  }

  init() {
    this.cylinderList = [];
    this.total = 0;
    // this.beginTime = new Date((new Date().getTime() - 7 * 24 * 60 * 60 * 1000));
    // this.endTime = new Date();
  }

  link(rowData, status) {
    const typeId = rowData[status + 'LiabilityTypeId'];
    const queryParams = {
      liabilityNumber: '',
    };
    this.init();
    switch (typeId) {
      case 1:
        queryParams.liabilityNumber = rowData[status + 'LiabilityNumber'];
        this.router.navigate(['/archive/gasHolderStation/list'], { relativeTo: this.routerInfo, queryParams });
        break;
      case 2:
        queryParams.liabilityNumber = rowData[status + 'LiabilityNumber'];
        this.router.navigate(['/archive/supplyStation/list'], { relativeTo: this.routerInfo, queryParams });
        break;
      case 3:
        queryParams.liabilityNumber = rowData[status + 'LiabilityNumber'];
        this.router.navigate(['/archive/employee/list'], { relativeTo: this.routerInfo, queryParams });
        break;
      case 4:
        queryParams.liabilityNumber = rowData[status + 'LiabilityNumber'];
        this.router.navigate(['/archive/customer/list'], { relativeTo: this.routerInfo, queryParams });
        break;
      default:
        break;
    }
  }

  onPageChange(event) {
    this.pageNumber = event.first / event.rows + 1;
    this.pageSize = event.rows;

    this.listGcSendOrReceive();
  }

  searchDispatcher(query, autoSearch = false) {
    this.dispatcherService.getDispatcherInfo({
      enterpriseNumber: '',
      supplyStationNumber: '',
      name: this.selectedDispatcherSearchField === 2 ? query : '',
      jobNumber: this.selectedDispatcherSearchField === 1 ? query : '',
      phone: '',
      idNumber: '',
      dispatcherNumber: '',
      pageSize: 99,
      pageNumber: 1
    }).then(data => {
      if (data.status === 0) {
        this.dispatcherSuggestions = data.data.list;
        if (autoSearch && this.dispatcherSuggestions.length === 1) {
          this.selectedDispatcher = data.data.list[0];
          this.search();
        }
      } else {
        this.dispatcherSuggestions = [];
        // this.messageService.add({ severity: 'warn', summary: '获取配送工信息失败', detail: data.msg });
      }
    });
  }
  searchUser(query) {
    this.cylinderTraceService.getUserInfoImprecise({
      searchType: this.selectedUserSearchField.name,
      searchString: query
    }).then(data => {
      if (data.status === 0) {
        this.userSuggestions = data.data;
      } else {
        this.userSuggestions = [];
        // this.messageService.add({ severity: 'warn', summary: '获取配送工信息失败', detail: data.msg });
      }
    });
  }

  selectDispatcherSearchField(event) {
    this.selectedDispatcher = null;
  }
  selectUserSearchField(event) {
    this.selectedUser = null;
  }

  blurSelectDispatcher() {
    if (!this.selectedDispatcher || !this.selectedDispatcher.dispatcherNumber) {
      this.selectedDispatcher = null;
    }
  }
  blurSelectUser() {
    if (typeof this.selectedUser === 'string') {
      if (this.userSuggestions.length === 1
        && this.userSuggestions[0][this.selectedUserSearchField.field] === this.selectedUser) {
        this.selectedUser = this.userSuggestions[0];
      } else {
        this.selectedUser = null;
      }
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
          this.messageService.add({ severity: 'warn', summary: '请选择供应站！', detail: '' });
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

      case 4:
        if (!this.selectedUser) {
          this.messageService.add({ severity: 'warn', summary: '请输入用户信息！', detail: '' });
          return;
        }
        liabilitySubjectId = this.selectedUser.userNumber;
        searchType = '';
        break;
      default:
        break;
    }

    if (this.beginTime > this.endTime) {
      this.messageService.add({ severity: 'warn', summary: '开始时间不可大于结束时间', detail: '' });
      return;
    }

    // this.loading = true;
    this.cylinderTraceService.listGcSendOrReceive({
      liabilitySubjectType: this.selectedCylinderStatus,
      liabilitySubjectId,
      searchType,
      beginTime: this.util.formatTime(this.beginTime, 'start'),
      endTime: this.util.formatTime(this.endTime, 'end'),
      pageNumber: this.pageNumber,
      pageSize: this.pageSize,
    }).then(data => {
      this.loading = false;
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

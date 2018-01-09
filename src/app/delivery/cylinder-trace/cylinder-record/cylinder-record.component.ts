import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { SelectItem } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';
import { zh_CN } from '../../../core/date-localization';
import { CommonRequestService } from '../../../core/common-request.service';
import { CylinderTraceService } from '../cylinder-trace.service';

@Component({
  selector: 'gas-cylinder-record',
  templateUrl: './cylinder-record.component.html',
  styleUrls: ['./cylinder-record.component.css']
})
export class CylinderRecordComponent implements OnInit {
  zh = zh_CN;
  cylinderStatus: SelectItem[] = [];
  deliveryStations: SelectItem[] = [];
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
  dispatcher = '';
  selectedDeliveryStation = '';

  pageSize = 10;
  pageNumber = 1;
  total = 0;
  selectedCylinderStatus: string | number = '';
  first = 0;

  today = new Date();
  beginTime: Date = new Date((new Date().getTime() - 24 * 60 * 60 * 1000));
  endTime: Date = new Date();

  constructor(
    private commonRequestService: CommonRequestService,
    private cylinderTraceService: CylinderTraceService,
    private messageService: MessageService
  ) {

  }

  ngOnInit() {
    this.commonRequestService.getLiabilitySubjectType().then(data => {
      if (data.status === 0) {
        this.cylinderStatus = data.data.map(item => ({ label: item.liabilityName, value: item.liabilityTypeId }))
          .filter(item => {
            if (item.label === '送气工' || item.label === '配送站') {
              return true;
            }
          });
        // this.cylinderStatus.unshift({ label: '--请选择--', value: '' });
        this.selectedCylinderStatus = this.cylinderStatus[0].value;
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取气瓶状态列表失败', detail: data.msg });
      }
    });

    this.commonRequestService.listCorpSupplyStation().then(data => {
      if (data.status === 0) {
        if (data.data.length > 0) {
          this.deliveryStations = data.data.map(
            item => ({ label: item.supplyStationName, value: item.supplyStationNumber })
          );
          this.selectedDeliveryStation = this.deliveryStations[0].value;
        }
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取配送站失败', detail: data.msg });
      }
    });
  }

  onPageChange(event) {
    console.log(event);
    this.pageNumber = event.first / event.rows + 1;
    this.pageSize = event.rows;

    if (this.selectedCylinderStatus === 2) {
      this.getCylinderByStation();
    } else if (this.selectedCylinderStatus === 3) {
      this.getCylinderByDispatcher();
    } else {
      this.cylinderList = [];
    }
  }

  searchCylinderList() {
    this.pageNumber = 1;
    this.total = 0;
    this.first = 0;
    this.cylinderList = [];
    if (this.selectedCylinderStatus === 2) {
      this.getCylinderByStation();
    } else if (this.selectedCylinderStatus === 3) {
      this.getCylinderByDispatcher();
    }
  }

  getCylinderByStation() {
    this.cylinderTraceService.listGasReceiveAndDispatch({
      supplyStationNumber: this.selectedDeliveryStation,
      beginTime: moment(this.beginTime).format('YYYY-MM-DD') + ' 00:00:00',
      endTime: moment(this.endTime).format('YYYY-MM-DD') + ' 23:59:59',
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
    }).then(data => {
      if (data.status === 0) {
        this.cylinderList = data.data.list;
        this.total = data.data.total;
      } else {
        this.cylinderList = [];
        this.messageService.add({ severity: 'warn', summary: '获取信息失败！', detail: data.msg });
      }
    });
  }

  getCylinderByDispatcher() {
    if (!this.dispatcher) {
      this.messageService.add({ severity: 'warn', summary: '请输入送气工编号', detail: '' });
      this.cylinderList = [];
      return false;
    }

    this.cylinderTraceService.getCylinderHistoryByDispatcher({
      dispatcherNumber: this.dispatcher,
      beginTime: moment(this.beginTime).format('YYYY-MM-DD') + ' 00:00:00',
      endTime: moment(this.endTime).format('YYYY-MM-DD') + ' 23:59:59',
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
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

  selectStatus(event) {
    console.log(event);
    console.log(this.selectedCylinderStatus);
    if (this.selectedCylinderStatus !== event.value) {
      this.selectedCylinderStatus = event.value;
      this.cylinderList = [];
      this.total = 0;
      this.first = 0;
      this.pageNumber = 1;
    }
  }
}

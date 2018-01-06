import { Format } from './../../core/format.service';
import { zh_CN } from './../../core/date-localization';
import { MessageService } from 'primeng/components/common/messageservice';
import { CylinderTraceService } from './cylinder-trace.service';
import { CommonRequestService } from './../../core/common-request.service';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'gas-cylinder-trace',
  templateUrl: './cylinder-trace.component.html',
  styleUrls: ['./cylinder-trace.component.scss']
})
export class CylinderTraceComponent implements OnInit {
  zh = zh_CN;
  isHistory = false;
  cylinderStatus: SelectItem[] = [];

  cylinderList: Array<{
    gasLabelNumber: string,
    specificationId: string,
    liabilityTypeName: string,
    liabilityName: string,
    liabilityContact: string,
    liabilityAddress: string
  }> = [];
  cylinderHistoryList: Array<{
    createTime: string,
    gcStatusTypeName: string,
    beforeLiabilityTypeName: string,
    beforeLiabilityName: string,
    beforeLiabilityContact: string,
    beforeLiabilityAdderss: string,
    afterLiabilityTypeName: string,
    afterLiabilityName: string,
    afterLiabilityContact: string,
    afterLiabilityAdderss: string
  }> = [];

  pageSize = 10;
  pageNumber = 1;
  total = 0;
  selectedCylinderStatus = '';

  pageSizeHistory = 10;
  pageNumberHistory = 1;
  totalHistory = 0;

  today = new Date();
  beginTime: Date = new Date((new Date().getTime() - 30 * 24 * 60 * 60 * 1000));
  endTime: Date = new Date();
  cylinderNumber = '';
  isHistoryViewInit = true;
  historyFirst = 0;
  first = 0;

  constructor(
    private commonRequestService: CommonRequestService,
    private cylinderTraceService: CylinderTraceService,
    private messageService: MessageService,
    private formate: Format
  ) { }

  ngOnInit() {
    this.commonRequestService.getLiabilitySubjectType().then(data => {
      if (data.status === 0) {
        this.cylinderStatus = data.data.map(item => ({ label: item.liabilityName, value: item.liabilityTypeId }))
          .slice(0, 6);
        this.cylinderStatus.unshift({ label: '--请选择--', value: '' });
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取气瓶状态列表失败', detail: data.msg });
      }
    });
  }

  getCylinderByStatus() {
    if (this.selectedCylinderStatus === '') {
      this.cylinderList = [];
      this.total = 0;
      this.historyFirst = 0;
      return;
    }
    this.cylinderTraceService.getCylinderByStatus({
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
      liabilityTypeId: this.selectedCylinderStatus
    }).then(data => {
      if (data.status === 0) {
        if (data.data.list.length === 0) {
          this.messageService.add({ severity: 'warn', summary: '获取气瓶列表为空', detail: '' });
        }
        this.cylinderList = data.data.list;
        this.total = data.data.total;
      } else {
        this.cylinderList = [];
        this.total = 0;
        this.messageService.add({ severity: 'warn', summary: '获取气瓶列表失败', detail: data.msg });
      }
    }).catch(error => {
      this.cylinderList = [];
      this.total = 0;
      this.messageService.add({ severity: 'warn', summary: '获取气瓶列表失败', detail: error });
    });
  }

  getCylinderHistoryStatus() {
    this.isHistoryViewInit = false;
    if (!this.cylinderNumber) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请输入气瓶条码' });
      this.cylinderHistoryList = [];
      return;
    }

    this.cylinderTraceService.getCylinderHistoryStatus({
      pageSize: this.pageSizeHistory,
      pageNumber: this.pageNumberHistory,
      gasLabelNumber: this.cylinderNumber,
      beginTime: this.beginTime ? this.formate.dateFormat(this.beginTime, 'yyyy-MM-dd') : '',
      endTime: this.endTime ? this.formate.dateFormat(this.endTime, 'yyyy-MM-dd') : ''
    }).then(data => {
      if (data.status === 0) {
        if (data.data.list.length === 0) {
          this.messageService.add({ severity: 'warn', summary: '获取气瓶状态历史为空', detail: '' });
        }
        this.cylinderHistoryList = data.data.list;
        this.totalHistory = data.data.total;
      } else {
        this.cylinderHistoryList = [];
        this.totalHistory = 0;
        this.messageService.add({ severity: 'warn', summary: '获取气瓶状态历史失败', detail: data.msg });
      }
    }).catch(error => {
      this.cylinderHistoryList = [];
      this.totalHistory = 0;
      this.messageService.add({ severity: 'warn', summary: '获取气瓶状态历史失败', detail: error });
    });
  }

  onPageChange(event) {
    this.pageNumber = event.first / event.rows + 1;
    this.pageSize = event.rows;
    this.getCylinderByStatus();
  }

  onHistoryPageChange(event) {
    this.pageNumberHistory = event.first / event.rows + 1;
    this.pageSizeHistory = event.rows;
    if (!this.isHistoryViewInit) {
      this.getCylinderHistoryStatus();
    } else {
      this.cylinderHistoryList = [];
    }
  }

  showHistoryView(cylinderNumber) {
    this.isHistory = true;
    this.cylinderNumber = cylinderNumber;
    this.pageNumberHistory = 1;
    this.getCylinderHistoryStatus();
  }

  searchCylinderHistory() {
    // this.cylinderHistoryList = [];
    this.pageNumberHistory = 1;
    this.totalHistory = 0;
    this.historyFirst = 0;
    this.getCylinderHistoryStatus();
  }

  searchCylinderList() {
    this.pageNumber = 1;
    this.total = 0;
    this.first = 0;
    this.getCylinderByStatus();
  }
}

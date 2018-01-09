import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { MessageService } from 'primeng/components/common/messageservice';
import { CommonRequestService } from '../../../core/common-request.service';
import { CylinderTraceService } from '../cylinder-trace.service';
import { zh_CN } from '../../../core/date-localization';
import { CylinderFillingService } from '../../cylinder-filling/cylinder-filling.service';
import { CylinderFilling } from '../../cylinder-filling/CylinderFillingHistory.model';

@Component({
  selector: 'gas-cylinder-history',
  templateUrl: './cylinder-history.component.html',
  styleUrls: ['./cylinder-history.component.css']
})
export class CylinderHistoryComponent implements OnInit {
  zh = zh_CN;
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
  cylinderFillingHistoryList: Array<CylinderFilling> = [];

  pageSizeHistory = 10;
  pageNumberHistory = 1;
  totalHistory = 0;

  pageSize = 10;
  pageNumber = 1;
  total = 0;
  pageFirst = 0;

  today = new Date();
  beginTime: Date = new Date((new Date().getTime() - 24 * 60 * 60 * 1000));
  endTime: Date = new Date();
  cylinderNumber = '';
  historyFirst = 0;
  firstTime = true;

  constructor(
    private commonRequestService: CommonRequestService,
    private cylinderTraceService: CylinderTraceService,
    private cylinderFillingService: CylinderFillingService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cylinderNumber = this.route.snapshot.params['gasLabelNumber'] || '';
  }

  getCylinderHistoryStatus() {
    // if (this.firstTime) {
    //   this.firstTime = false;
    //   this.cylinderHistoryList = [];
    //   return;
    // }
    if (!this.cylinderNumber) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请输入气瓶条码' });
      this.cylinderHistoryList = [];
      return;
    }

    this.cylinderTraceService.getCylinderHistoryStatus({
      pageSize: this.pageSizeHistory,
      pageNumber: this.pageNumberHistory,
      gasLabelNumber: this.cylinderNumber,
      beginTime: this.beginTime ? moment(this.beginTime).format('YYYY-MM-DD') : '',
      endTime: this.endTime ? moment(this.endTime).format('YYYY-MM-DD') : ''
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

  listFillingInfo() {
    if (!this.cylinderNumber) {
      this.cylinderFillingHistoryList = [];
      return;
    }
    this.cylinderFillingService.listFillingInfo({
      name: '',
      cylinderNumber: this.cylinderNumber,
      stationName: '',
      beginTime: moment(this.beginTime).format('YYYY-MM-DD') + ' 00:00:00',
      endTime: moment(this.endTime).format('YYYY-MM-DD') + ' 23:59:59',
      pageNumber: this.pageNumber,
      pageSize: this.pageSize,
    }).then(data => {
      if (data.status === 0) {
        this.cylinderFillingHistoryList = data.data.list;
        this.total = data.data.total;
      } else {
        this.messageService.add({ severity: 'warn', summary: '查询充装记录失败', detail: data.msg });
        this.pageFirst = 0;
        this.total = 0;
        this.cylinderFillingHistoryList = [];
      }
    });
  }

  onHistoryPageChange(event) {
    this.pageNumberHistory = event.first / event.rows + 1;
    this.pageSizeHistory = event.rows;
    this.getCylinderHistoryStatus();
  }

  onFillingHistoryPageChange(event) {
    this.pageNumber = event.first / event.rows + 1;
    this.pageSize = event.rows;
    this.listFillingInfo();
  }

  searchCylinderHistory() {
    // this.cylinderHistoryList = [];
    this.pageNumberHistory = 1;
    this.totalHistory = 0;
    this.historyFirst = 0;
    this.getCylinderHistoryStatus();

    this.pageNumber = 1;
    this.pageFirst = 0;
    this.listFillingInfo();
  }
}

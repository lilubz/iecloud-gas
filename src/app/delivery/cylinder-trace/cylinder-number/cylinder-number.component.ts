import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { MessageService } from 'primeng/components/common/messageservice';
import { zh_CN } from './../../../core/date-localization';
import { CommonRequestService } from '../../../core/common-request.service';
import { CylinderTraceService } from '../cylinder-trace.service';

@Component({
  selector: 'gas-cylinder-number',
  templateUrl: './cylinder-number.component.html',
  styleUrls: ['./cylinder-number.component.css']
})
export class CylinderNumberComponent implements OnInit {
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

  pageSizeHistory = 10;
  pageNumberHistory = 1;
  totalHistory = 0;

  today = new Date();
  beginTime: Date = new Date((new Date().getTime() - 30 * 24 * 60 * 60 * 1000));
  endTime: Date = new Date();
  cylinderNumber = '';
  historyFirst = 0;
  firstTime = true;

  constructor(
    private commonRequestService: CommonRequestService,
    private cylinderTraceService: CylinderTraceService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cylinderNumber = this.route.snapshot.params['gasLabelNumber'] || '';
  }

  getCylinderHistoryStatus() {
    if (this.firstTime) {
      this.firstTime = false;
      this.cylinderHistoryList = [];
      return;
    }
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

  onHistoryPageChange(event) {
    this.pageNumberHistory = event.first / event.rows + 1;
    this.pageSizeHistory = event.rows;
    this.getCylinderHistoryStatus();
  }

  searchCylinderHistory() {
    // this.cylinderHistoryList = [];
    this.pageNumberHistory = 1;
    this.totalHistory = 0;
    this.historyFirst = 0;
    this.getCylinderHistoryStatus();
  }
}

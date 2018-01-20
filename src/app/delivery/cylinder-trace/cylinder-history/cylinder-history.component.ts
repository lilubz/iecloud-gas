import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { MessageService } from 'primeng/components/common/messageservice';
import { CommonRequestService } from '../../../core/common-request.service';
import { CylinderTraceService } from '../cylinder-trace.service';
import { zh_CN } from '../../../core/date-localization';
import { CylinderFilling } from '../cylinder-filling/CylinderFillingHistory.model';

@Component({
  selector: 'gas-cylinder-history',
  templateUrl: './cylinder-history.component.html',
  styleUrls: ['./cylinder-history.component.css']
})
export class CylinderHistoryComponent implements OnInit {
  zh = zh_CN;
  cylinderHistoryList: Array<{
    createTime?: Date,
    gcStatusTypeName?: string,
    boolIsDispatch?: string,
    beforeLiabilityTypeName?: string,
    beforeLiabilityName?: string,
    beforeLiabilityContact?: string,
    beforeLiabilityAddress?: string,
    afterLiabilityTypeName?: string,
    afterLiabilityName?: string,
    afterLiabilityContact?: string,
    afterLiabilityAddress?: string
  }> = [];
  cylinderFillingHistoryList: Array<CylinderFilling> = [];

  pageSizeHistory = 10;
  pageNumberHistory = 1;
  totalHistory = 0;
  historyFirst = 0;

  today = new Date();
  beginTime: Date = new Date((new Date().getTime() - 30 * 24 * 60 * 60 * 1000));
  endTime: Date = new Date();
  cylinderNumber = '';
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
      beginTime: this.beginTime,
      endTime: this.endTime
    }).then(data => {
      if (data.status === 0) {
        if (data.data.length === 0) {
          this.messageService.add({ severity: 'warn', summary: '获取气瓶状态历史为空', detail: '' });
        }
        this.cylinderHistoryList = data.data;
        this.totalHistory = data.data.length;
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

  searchCylinderHistory() {
    // this.cylinderHistoryList = [];
    this.pageNumberHistory = 1;
    this.totalHistory = 0;
    this.historyFirst = 0;
    this.getCylinderHistoryStatus();
  }
}

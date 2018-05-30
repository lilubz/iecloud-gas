import { Component, OnInit } from '@angular/core';
import { zh_CN } from '../../../common/date-localization';
import * as moment from 'moment';
import { MessageService } from 'primeng/components/common/messageservice';
import { HistoryRecordService } from './history.service';
import { API } from '../../../common/api';
import { Util } from '../../../core/util';

@Component({
  selector: 'gas-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  providers: [HistoryRecordService]
})
export class HistoryComponent implements OnInit {
  zh = zh_CN;
  circulationBeginTime: Date = moment().subtract(30, 'days').toDate();
  circulationEndTime: Date = new Date();
  pageNumber = 1;
  pageSize = 40;
  firstIndex = 0;
  total = 0;
  datas: any = [];

  constructor(
    private messageService: MessageService,
    private historyRecordService: HistoryRecordService,
    private util: Util
  ) {}

  ngOnInit() {}

  searchCylinderStorageCirculations() {
    if (this.circulationBeginTime > this.circulationEndTime) {
      this.messageService.add({ severity: 'warn', summary: '开始时间不可大于结束时间', detail: '' });
      return false;
    } else {
      this.getHistoryRecord({
        startTime: this.util.formatTime(this.circulationBeginTime, 'start'), // 日期格式调整
        endTime: this.util.formatTime(this.circulationEndTime, 'end'),
        pageNumber: this.pageNumber,
        pageSize: this.pageSize
      });
      this.firstIndex = 0;
    }
  }

  getHistoryRecord(params) {
    this.historyRecordService.getHistoryRecord(params)
      .then(data => {
      if (data.status === 0) {
        this.datas = data.data.list;
        this.total = data.data.total;
      } else {
        this.datas = [];
        this.total = 0;
        this.messageService.add({
          severity: 'warn',
          summary: '获取信息失败',
          detail: data.msg
        });
      }
    });
  }

  onPageChange($event) {
    this.datas.list = [];
    this.onPageChange = event => {
      const page = {
        pageSize: event.rows,
        pageNumber: event.first / event.rows + 1
      };
      this.pageNumber = page.pageNumber;
      this.pageSize = page.pageSize;
      this.getHistoryRecord({
        startTime: this.util.formatTime(this.circulationBeginTime, 'start'), // 日期格式调整
        endTime: this.util.formatTime(this.circulationEndTime, 'end'),
        pageNumber: page.pageNumber,
        pageSize: page.pageSize,
      });
    };
  }
}

import { Component, OnInit } from '@angular/core';
import { zh_CN } from '../../../../common/date-localization';
import * as moment from 'moment';
import { MessageService } from 'primeng/components/common/messageservice';
import { HistoryRecordService } from './history.service';
import { API } from '../../../../common/api';

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
  pageSize = 10;
  firstIndex = 0;
  total = 0;
  datas: any = [];

  constructor(
    private messageService: MessageService,
    private historyRecordService: HistoryRecordService,
  ) {}

  ngOnInit() {}

  searchCylinderStorageCirculations() {
    if (this.circulationBeginTime > this.circulationEndTime) {
      this.messageService.add({ severity: 'warn', summary: '开始时间不可大于结束时间', detail: '' });
      return false;
    } else {
      this.getHistoryRecord({
        startTime: moment(this.circulationBeginTime).format('YYYY-MM-DD HH:mm:ss'), // 日期格式调整
        endTime: moment(this.circulationEndTime).format('YYYY-MM-DD HH:mm:ss'),
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
        startTime: moment(this.circulationBeginTime).format('YYYY-MM-DD HH:mm:ss'), // 日期格式调整
        endTime: moment(this.circulationEndTime).format('YYYY-MM-DD HH:mm:ss'),
        pageNumber: page.pageNumber,
        pageSize: page.pageSize,
      });
    };
  }
}

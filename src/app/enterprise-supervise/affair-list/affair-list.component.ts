import { Component, OnInit, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { MessageService } from 'primeng/components/common/messageservice';
import { zh_CN } from './../../common/date-localization';
import { AffairListService } from './affair-list.service';
import * as moment from 'moment';
import { Util } from '../../core/util';

@Component({
  selector: 'gas-affair-list',
  templateUrl: './affair-list.component.html',
  styleUrls: ['./affair-list.component.scss'],
  providers: [AffairListService]
})
export class AffairListComponent implements OnInit {
  zh = zh_CN;
  constructor(
    private messageService: MessageService,
    public _service: AffairListService,
    public util: Util
  ) { }
  dropdown = {
    status: [
      {
        label: '未处理',
        value: true
      },
      {
        label: '已完成',
        value: false
      },
    ]
  };
  dataTable = {
    list: [],
    option: [10, 20, 40, 80],
    total: 0,
    first: 0,
    pageSize: 40,
    pageNumber: 1
  };
  formModel = {
    startTime: moment().subtract(365, 'days')['_d'],
    endTime: moment()['_d'],
    status: true,
  };
  pageParams = {
    startTime: moment().subtract(365, 'days')['_d'],
    endTime: moment()['_d'],
    status: '',
  };

  ngOnInit() {
  }

  onSubmit() {
    this.dataTable.first = 0;
    this.dataTable.pageNumber = 1;
    Object.assign(this.pageParams, this.formModel);
    this.getDataTableList();
  }

  onPageChange($event) {
    this.dataTable.list = [];
    this.onPageChange = event => {
      this.dataTable.pageNumber = event.first / event.rows + 1;
      this.dataTable.pageSize = event.rows;
      this.getDataTableList();
    };
  }

  getDataTableList() {
    this._service.listCorpTransactionInfo({
      startTime: this.util.formatTime(this.pageParams.startTime, 'start'),
      endTime: this.util.formatTime(this.pageParams.endTime, 'end'),
      boolIsHandle: this.pageParams.status,
      pageNumber: this.dataTable.pageNumber,
      pageSize: this.dataTable.pageSize,
    })
      .then(data => {
        if (data.status === 0) {
          this.dataTable.list = data.data.list;
          this.dataTable.total = data.data.total;
          Object.assign(this.formModel, this.pageParams);
        } else {
          this.dataTable.list = [];
          this.dataTable.total = 0;
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }

}

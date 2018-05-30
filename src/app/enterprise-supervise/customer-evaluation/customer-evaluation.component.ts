import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/components/common/messageservice';
import { zh_CN } from './../../common/date-localization';
import * as moment from 'moment';
import { CustomerEvaluationService } from './customer-evaluation.service';
import { Util } from '../../core/util';

@Component({
  selector: 'gas-customer-evaluation',
  templateUrl: './customer-evaluation.component.html',
  styleUrls: ['./customer-evaluation.component.scss'],
  providers: [CustomerEvaluationService]
})
export class CustomerEvaluationComponent implements OnInit {

  zh = zh_CN;
  transactionType: any;
  average = false;
  dropdown = {
    status: [
      {
        label: '强烈推荐--5分',
        value: 5
      },
      {
        label: '很满意--4分',
        value: 4
      },
      {
        label: '还不错--3分',
        value: 3
      },
      {
        label: '一般--2分',
        value: 2
      },
      {
        label: '差评--1分',
        value: 1
      },
    ]
  };
  dataTable = {
    list: [],
    option: [10, 20, 40, 80],
    total: 0,
    first: 0,
    pageSize: 40
  };
  formModel = {
    startTime: moment().subtract(365, 'days')['_d'],
    endTime: moment()['_d'],
    status: 1,
  };
  pageParams = {
    startTime: moment().subtract(365, 'days')['_d'],
    endTime: moment()['_d'],
    status: '',
  };
  constructor(
    public _service: CustomerEvaluationService,
    private messageService: MessageService,
    private util: Util
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    this.getDataTableList({
      startTime: this.util.formatTime(this.formModel.startTime, 'start'),
      endTime: this.util.formatTime(this.formModel.endTime, 'end'),
      rank: this.formModel.status,
      pageNumber: 1,
      pageSize: this.dataTable.pageSize,
    });
    Object.assign(this.pageParams, this.formModel);
    this.dataTable.first = 0;
  }

  onPageChange($event) {
    this.dataTable.list = [];
    this.onPageChange = event => {
      const page = {
        pageSize: event.rows,
        pageNumber: event.first / event.rows + 1
      };
      this.getDataTableList({
        startTime: this.util.formatTime(this.pageParams.startTime, 'start'),
        endTime: this.util.formatTime(this.pageParams.endTime, 'end'),
        rank: this.formModel.status,
        pageNumber: page.pageNumber,
        pageSize: page.pageSize,
      });
    };
  }

  getDataTableList(params?) {
    this._service.listOrderEvaluate(params)
      .then(data => {
        if (data.status === 0) {
          this.dataTable.list = data.data.list;
          this.dataTable.total = data.data.total;
          Object.assign(this.formModel, this.pageParams);
          this.getDataAverage();
        } else {
          this.dataTable.list = [];
          this.dataTable.total = 0;
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
  getDataAverage = () => {
    this._service.avgOrderEvaluate({
      startTime: this.util.formatTime(this.formModel.startTime, 'start'),
      endTime: this.util.formatTime(this.formModel.endTime, 'end'),
    }).then(data => {
      this.transactionType = data.data;
      this.average = true;
    });
  }

}

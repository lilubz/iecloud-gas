import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { MessageService } from 'primeng/components/common/messageservice';
import { zh_CN } from './../../../../common/date-localization';

import * as moment from 'moment';
@Component({
  selector: 'gas-statistic-cylinder-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss']
})
export class FlowComponent implements OnInit {
  zh = zh_CN;
  currentDate: Date = new Date();
  dropdown = {
    type: [
      {
        label: '自定义时间',
        value: null
      },
      {
        label: '最近一天',
        value: {
          count: 1,
          unit: 'day'
        }
      },
      {
        label: '最近一周',
        value: {
          count: 1,
          unit: 'weeks'
        }
      },
      {
        label: '最近一月',
        value: {
          count: 1,
          unit: 'months'
        }
      },
      {
        label: '最近三月',
        value: {
          count: 3,
          unit: 'months'
        }
      },
      {
        label: '最近半年',
        value: {
          count: 6,
          unit: 'months'
        }
      },
      {
        label: '最近一年',
        value: {
          count: 1,
          unit: 'years'
        }
      },
    ]
  };
  dataTable = {
    list: [],
    option: [5, 10, 20, 40],
    total: 0,
    first: 0,
    pageSize: 10
  };
  formModel = {
    type: null,
    startTime: moment().subtract(1, 'months')['_d'],
    endTime: moment()['_d']
  };
  pageParams = {
    type: null,
    startTime: moment().subtract(1, 'months')['_d'],
    endTime: moment()['_d']
  };
  constructor() { }

  ngOnInit() {
  }
  onDropdownChange() {
    if (this.formModel.type) {
      this.formModel.startTime = moment().subtract(this.formModel.type.count, this.formModel.type.unit)['_d'];
    } else {
      this.formModel.startTime = moment().subtract(1, 'months')['_d'];
    }
    this.formModel.endTime = moment()['_d'];
  }
  onSubmit() {
    console.log({
      startTime: moment(this.formModel.startTime).format('YYYY-MM-DD HH:mm:ss'),
      endTime: moment(this.formModel.endTime).format('YYYY-MM-DD HH:mm:ss'),
    });
  }
  onPageChange($event) {
    this.dataTable.list = [];
    this.onPageChange = event => {
      const page = {
        pageSize: event.rows,
        pageNumber: event.first / event.rows + 1
      };
      this.getDataTableList({
        startTime: moment(this.pageParams.startTime).format('YYYY-MM-DD HH:mm:ss'),
        endTime: moment(this.pageParams.endTime).format('YYYY-MM-DD HH:mm:ss'),
      });
    };
  }
  getDataTableList(params?) {
    console.log(params);
    // this._service.listMyTransaction(params)
    //   .then(data => {
    //     if (data.status === 0) {
    //       this.dataTable.list = data.data.list;
    //       this.dataTable.total = data.data.total;
    //       Object.assign(this.formModel, this.pageParams);
    //     } else {
    //       this.dataTable.list = [];
    //       this.dataTable.total = 0;
    //       this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
    //     }
    //   });
  }
}

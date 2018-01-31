import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { MessageService } from 'primeng/components/common/messageservice';
import { zh_CN } from './../../../../common/date-localization';

import * as moment from 'moment';

@Component({
  selector: 'gas-statistic-cylinder-possess',
  templateUrl: './possess.component.html',
  styleUrls: ['./possess.component.scss']
})
export class PossessComponent implements OnInit {

  zh = zh_CN;
  currentDate: Date = new Date();
  dropdown = {
    dutyType: [
      {
        label: '储配站',
        value: 1
      },
      {
        label: '瓶库',
        value: 2
      }, {
        label: '用户',
        value: 3
      }, {
        label: '送气工',
        value: 4
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
    dutyType: 1,
  };
  pageParams = {
    dutyType: 1,
  };
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
  }
  onPageChange($event) {
    this.dataTable.list = [];
    this.onPageChange = event => {
      const page = {
        pageSize: event.rows,
        pageNumber: event.first / event.rows + 1
      };
      this.getDataTableList();
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

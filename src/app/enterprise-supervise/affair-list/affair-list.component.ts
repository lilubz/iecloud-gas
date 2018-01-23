import { Component, OnInit, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { MessageService } from 'primeng/components/common/messageservice';
import { zh_CN, DATE_LOCALIZATION } from './../../core/date-localization';
import { AffairListService } from './affair-list.service';
import * as moment from 'moment';

@Component({
  selector: 'gas-affair-list',
  templateUrl: './affair-list.component.html',
  styleUrls: ['./affair-list.component.scss'],
  providers: [AffairListService]
})
export class AffairListComponent implements OnInit {

  constructor(
    private messageService: MessageService,
    public _service: AffairListService,
    @Inject(DATE_LOCALIZATION) public zh,
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
    option: [5, 10, 20, 40],
    total: 0,
    first: 0,
    pageSize: 10
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
    this.getDataTableList({
      startTime: moment(this.formModel.startTime).format('YYYY-MM-DD HH:mm:ss'),
      endTime: moment(this.formModel.endTime).format('YYYY-MM-DD HH:mm:ss'),
      boolIsHandle: this.formModel.status,
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
        startTime: moment(this.pageParams.startTime).format('YYYY-MM-DD HH:mm:ss'),
        endTime: moment(this.pageParams.endTime).format('YYYY-MM-DD HH:mm:ss'),
        boolIsHandle: this.pageParams.status,
        pageNumber: page.pageNumber,
        pageSize: page.pageSize,
      });
    };
  }

  getDataTableList(params?) {
    this._service.listCorpTransactionInfo(params)
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
      }).catch(error => {
        this.dataTable.list = [];
        this.dataTable.total = 0;
        this.messageService.add({ severity: 'error', summary: '出错了', detail: '错误代码：' + error.status });
        throw error;
      });
  }

}

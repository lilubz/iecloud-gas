import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { zh_CN } from './../../../common/date-localization';
import * as moment from 'moment';
import { CollaborativeService } from '../../../government/gov-affairs/collaborative/collaborative.service';

@Component({
  selector: 'gas-timeout-search',
  templateUrl: './timeout-search.component.html',
  styleUrls: ['./timeout-search.component.scss'],
  providers: [CollaborativeService]
})
export class TimeoutSearchComponent implements OnInit {
  zh = zh_CN;

  formModel = {
    startTime: moment().subtract(365, 'days')['_d'],
    endTime: new Date(),
  };
  pageParams = {
    startTime: moment().subtract(365, 'days')['_d'],
    endTime: new Date(),
  };
  dataTable = {
    list: [],
    first: 0,
    total: 0,
    pageSize: 10,
    pageNumber: 1,
    option: [5, 10, 20, 40]
  };
  constructor(
    private _service: CollaborativeService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  onSearch() {
    this.getDataTableList({
      startTime: moment(this.formModel.startTime).format('YYYY-MM-DD HH:mm:ss'),
      endTime: moment(this.formModel.endTime).format('YYYY-MM-DD HH:mm:ss'),
      pageNumber: 1,
      pageSize: this.dataTable.pageSize,
    });
    Object.assign(this.pageParams, this.formModel);
    this.dataTable.first = 0;
  }
  onPageChange($event) {
    this.dataTable.list = [];
    this.onPageChange = event => {
      this.dataTable.pageSize = event.rows;
      this.dataTable.pageNumber = event.first / event.rows + 1;
      this.getDataTableList({
        startTime: moment(this.pageParams.startTime).format('YYYY-MM-DD HH:mm:ss'),
        endTime: moment(this.pageParams.endTime).format('YYYY-MM-DD HH:mm:ss'),
        pageNumber: this.dataTable.pageNumber,
        pageSize: this.dataTable.pageSize,
      });
    };
  }
  getDataTableList(params?) {
    this._service.listCorpTransactionOverdueHistory(params)
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

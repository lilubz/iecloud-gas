import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { zh_CN } from './../../common/date-localization';
import * as moment from 'moment';
import { CollaborativeService } from '../../gov-affairs/collaborative/collaborative.service';
import { Util } from '../../core/util';

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
    pageSize: 40,
    pageNumber: 1,
    option: [10, 20, 40, 80]
  };
  constructor(
    private _service: CollaborativeService,
    private util: Util,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
  }

  onSearch() {
    this.dataTable.first = 0;
    Object.assign(this.pageParams, this.formModel);
    this.getDataTableList();
  }
  onPageChange($event) {
    this.dataTable.list = [];
    this.onPageChange = event => {
      this.dataTable.pageSize = event.rows;
      this.dataTable.pageNumber = event.first / event.rows + 1;
      this.getDataTableList();
    };
  }
  getDataTableList() {
    this._service.listCorpTransactionOverdueHistory({
      startTime: this.util.formatTime(this.pageParams.startTime, 'start'),
      endTime: this.util.formatTime(this.pageParams.endTime, 'end'),
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

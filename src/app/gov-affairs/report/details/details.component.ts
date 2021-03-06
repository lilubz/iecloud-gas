import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MessageService } from 'primeng/components/common/messageservice';
import * as moment from 'moment';
import { DetailsService } from './details.service';
import { API } from '../../../common/api';
@Component({
  selector: 'gas-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [DetailsService]
})
export class DetailsComponent implements OnInit {
  API = API;
  window = window;
  dataTable = {
    list: [],
    option: [10, 20, 40, 80],
    total: 0,
    first: 0,
    pageSize: 40,
    pageNumber: 1,
  };
  id: string;
  constructor(
    private messageService: MessageService,
    public _service: DetailsService,
    private routerInfo: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.routerInfo.queryParams['value'].id) {
      this.id = this.routerInfo.queryParams['value'].id;
    }
  }
  onPageChange(event) {
    const page = {
      pageSize: event.rows,
      pageNumber: event.first / event.rows + 1,
      corpReportManagementId: this.id
    };
    this.getDataTableList(page);
  }
  getDataTableList(params?) {
    this._service.reportCommitDetail(params)
      .then(data => {
        if (data.status === 0) {
          this.dataTable.list = data.data.list;
          this.dataTable.total = data.data.total;
        } else {
          this.dataTable.list = [];
          this.dataTable.total = 0;
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }

}

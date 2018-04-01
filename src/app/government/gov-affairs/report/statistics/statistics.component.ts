import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/components/common/messageservice';
import { StatisticsService } from './statistics.service';

@Component({
  selector: 'gas-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  providers: [StatisticsService]
})
export class StatisticsComponent implements OnInit {
  dataTable = {
    list: [],
    option: [10, 20, 40, 80],
    total: 0,
    first: 0,
    pageSize: 40
  };
  constructor(
    private messageService: MessageService,
    public _service: StatisticsService,
  ) { }

  ngOnInit() {
  }
  onPageChange(event) {
    const page = {
      pageSize: event.rows,
      pageNumber: event.first / event.rows + 1
    };
    this.getDataTableList(page);
  }
  getDataTableList(params?) {
    this._service.reportStatistics(params)
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

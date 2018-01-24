import { SystemLogService } from './system-log.service';
import { Component, OnInit, Inject } from '@angular/core';

import { zh_CN } from './../../common/date-localization';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'gas-system-log',
  templateUrl: './system-log.component.html',
  styleUrls: ['./system-log.component.css'],
  providers: [SystemLogService]
})

export class SystemLogComponent implements OnInit {
  zh_CN = zh_CN;
  pageSize = 20;
  pageNumber = 1;
  totalRecords = 0;

  queryOptions: SelectItem[] = [
    {
      label: '日期',
      value: '日期'
    },
    {
      label: '操作',
      value: '操作'
    }
  ];
  queryKey = '日期';
  queryOperation = '';
  queryDate = '';

  logs: [{
    time: string,
    operation: string,
    ip: string,
    userName: string
  }] = null;

  constructor(
    private systemLogService: SystemLogService
  ) { }

  ngOnInit() {
    this.logs = [{
      time: '2017-10-10 12:12:12',
      operation: '开通账号',
      ip: '102.122.2.1',
      userName: 'yong'
    },
    {
      time: '2017-10-10 12:12:12',
      operation: '开通账号',
      ip: '102.122.2.1',
      userName: 'yong'
    }];

    // this.getList();
  }

  getList(event?: any) {
    console.log(event);
    if (event) {
      this.pageNumber = event.first / event.rows + 1;
      this.pageSize = event.rows;
    }
    console.log({
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
      date: this.queryDate,
      operation: this.queryOperation,
    });
    this.systemLogService.queryLog({
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
      date: this.queryDate,
      operation: this.queryOperation,
    }).then(data => {
      if (data.status === 0) {
        this.logs = data.data.list;
        this.totalRecords = data.data.totalRecords;
      } else {
        alert('呜呜');
      }
    });
  }
}

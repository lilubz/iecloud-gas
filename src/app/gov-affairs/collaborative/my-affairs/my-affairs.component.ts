import { Component, OnInit, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { MessageService } from 'primeng/components/common/messageservice';
import { zh_CN, DATE_LOCALIZATION } from './../../../core/date-localization';
import * as moment from 'moment';
import { CollaborativeService } from '../collaborative.service';

@Component({
  selector: 'gas-collaborative-my-list',
  templateUrl: './my-affairs.component.html',
  styleUrls: ['./my-affairs.component.scss'],
})
export class MyAffairsComponent implements OnInit {
  dispatcherService: any;
  constructor(
    private messageService: MessageService,
    private _service: CollaborativeService,
    @Inject(DATE_LOCALIZATION) public zh,
  ) { }
  config = {
    affairType: this._service.getConfig().affairType,
  };
  dropdown = {
    default: [
      {
        label: '全部',
        value: ''
      }
    ],
    area: [],
    affairType: this._service.getConfig().affairType,
    source: [
      {
        label: '全部',
        value: ''
      },
      {
        label: '网站',
        value: '1'
      },
      {
        label: '微信',
        value: '2'
      },
    ],
    status: [
      {
        label: '待办',
        value: false
      },
      {
        label: '已完结',
        value: true
      },
    ]
  };
  dataTable = {
      list: [],
    option: [5, 10, 20, 40],
    total: 0,
    first: 0,
  };
  formModel = {
    startTime: moment().subtract(365, 'days')['_d'],
    endTime: moment()['_d'],
    role: '0',
    area: '',
    affairType: '1',
    source: '',
    status: false,
    searchType: 1,
    searchValue: ''
  };
  pageParams = {
    startTime: moment().subtract(365, 'days')['_d'],
    endTime: moment()['_d'],
    role: '0',
    area: '',
    affairType: '1',
    source: '',
    status: true,
    searchType: 1,
    searchValue: '',
    pageSize: this.dataTable.option[1],
    pageNumber: 1
  };

  ngOnInit() {

    this.getDropdownArea();
    // this.onSearch();
  }

  onSearch() {
    this.getDataTableList({
      startTime: moment(this.formModel.startTime).format('YYYY-MM-DD HH:mm:ss'),
      endTime: moment(this.formModel.endTime).format('YYYY-MM-DD HH:mm:ss'),
      role: this.formModel.role,
      transactionRegionId: this.formModel.area,
      transactionType: this.formModel.affairType,
      transactionSource: this.formModel.source,
      boolIsHandle: this.formModel.status,
      searchType: this.formModel.searchType,
      keyword: this.formModel.searchValue,
      pageNumber: 1,
      pageSize: this.pageParams.pageSize,
    });
    Object.assign(this.pageParams, this.formModel);
    this.dataTable.first = 0;
  }

  onPageChange(event) {
    const page = {
      pageSize: event.rows,
      pageNumber: event.first / event.rows + 1
    };
    this.getDataTableList({
      startTime: moment(this.pageParams.startTime).format('YYYY-MM-DD HH:mm:ss'),
      endTime: moment(this.pageParams.endTime).format('YYYY-MM-DD HH:mm:ss'),
      role: this.pageParams.role,
      transactionRegionId: this.pageParams.area,
      transactionType: this.pageParams.affairType,
      transactionSource: this.pageParams.source,
      boolIsHandle: this.pageParams.status,
      searchType: this.pageParams.searchType,
      keyword: this.pageParams.searchValue,
      pageNumber: page.pageNumber,
      pageSize: page.pageSize,
    });
  }

  getDispatcherInfo(params?) {
    this.dispatcherService.getDispatcherInfo(params)
      .then(data => {
        if (data.status === 0) {
          this.dataTable.list = data.data.list;
          this.dataTable.total = data.data.total;
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

  getDropdownArea(params?) {
    this._service.getDropdownForRegionSysUser(params)
      .then(data => {
        if (data.status === 0) {
          this.dropdown.area = this.dropdown.default.concat(data.data.map((item) => ({
            label: item.regionName,
            value: item.regionId
          })));
          console.log(data);
        } else {
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      }).catch(error => {
        this.messageService.add({ severity: 'error', summary: '出错了', detail: '错误代码：' + error.status });
        throw error;
      });
  }

  getDataTableList(params?) {
    this._service.listTransactionInfo(params)
      .then(data => {
        if (data.status === 0) {
          this.dataTable.list = data.data.list;
          this.dataTable.list.forEach((item, i) => {
            this.dataTable.list[i].transactionType = this.dataTable.list[i].transactionType.split(',');
          });
          this.dataTable.total = data.data.total;
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

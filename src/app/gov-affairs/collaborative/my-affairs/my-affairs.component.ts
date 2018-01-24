import { Component, OnInit, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { MessageService } from 'primeng/components/common/messageservice';
import { zh_CN } from './../../../common/date-localization';
import * as moment from 'moment';
import { CollaborativeService } from '../collaborative.service';

@Component({
  selector: 'gas-collaborative-my-list',
  templateUrl: './my-affairs.component.html',
  styleUrls: ['./my-affairs.component.scss'],
})
export class MyAffairsComponent implements OnInit {
  zh = zh_CN;
  dispatcherService: any;
  constructor(
    private messageService: MessageService,
    public _service: CollaborativeService,
  ) { }
  dropdown = {
    default: [
      {
        label: '全部',
        value: ''
      }
    ],
    region: [],
    affairsType: [],
    origin: [],
    status: [
      {
        label: '未完成',
        value: 1
      },
      {
        label: '已完成',
        value: 0
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
    region: '',
    role: '3',
    affairType: '',
    origin: '',
    status: 1,
    place: '',
  };
  pageParams = {
    startTime: moment().subtract(365, 'days')['_d'],
    endTime: moment()['_d'],
    region: '',
    role: '3',
    affairType: '',
    origin: '',
    status: 1,
    place: '',
  };

  ngOnInit() {
    this.getDropdownRegion();
    this.getDropdownOrigin();
    this.getDropdownAffairsType();
  }

  onSearch() {
    this.getDataTableList({
      startTime: moment(this.formModel.startTime).format('YYYY-MM-DD HH:mm:ss'),
      endTime: moment(this.formModel.endTime).format('YYYY-MM-DD HH:mm:ss'),
      transactionRegionId: this.formModel.region,
      role: this.formModel.role,
      transactionType: this.formModel.affairType,
      transactionSource: this.formModel.origin,
      boolIsHandle: this.formModel.status,
      addressKeyWord: this.formModel.place,
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
        transactionRegionId: this.pageParams.region,
        role: this.pageParams.role,
        transactionType: this.pageParams.affairType,
        transactionSource: this.pageParams.origin,
        boolIsHandle: this.pageParams.status,
        addressKeyWord: this.pageParams.place,
        pageNumber: page.pageNumber,
        pageSize: page.pageSize,
      });
    };
  }
  transformDropdownAffairsType(data) {
    if (data) {
      const temp = {
        label: data.t.transactionTypeName,
        value: data.t.transactionTypeId
      };
      this.dropdown.affairsType.push(temp);
      if (data.children) {
        for (const item of data.children) {
          this.transformDropdownAffairsType(item);
        }
      }
    }
  }

  getDropdownRegion(params?) {
    this._service.getDropdownForRegionSysUser(params)
      .then(data => {
        if (data.status === 0) {
          this.dropdown.region = this.dropdown.default.concat(data.data.map((item) => ({
            label: item.regionName,
            value: item.regionId
          })));
        } else {
          this.dropdown.region = this.dropdown.default.concat([]);
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      }).catch(error => {
        this.dropdown.region = this.dropdown.default.concat([]);
        this.messageService.add({ severity: 'error', summary: '出错了', detail: '错误代码：' + error.status });
        throw error;
      });
  }
  getDropdownOrigin() {
    this._service.listTransactionSourceInfo({})
      .then(data => {
        if (data.status === 0) {
          this.dropdown.origin = this.dropdown.default.concat(data.data.map((item) => ({
            label: item.transactionSourceName,
            value: item.transactionSource
          })));
        } else {
          this.dropdown.origin = this.dropdown.default.concat([]);
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      }).catch(error => {
        this.dropdown.origin = this.dropdown.default.concat([]);
        this.messageService.add({ severity: 'error', summary: '出错了', detail: '错误代码：' + error.status });
        throw error;
      });
  }
  getDropdownAffairsType() {
    this._service.listTransactionTypeInfo({})
      .then(data => {
        if (data.status === 0) {
          this.transformDropdownAffairsType(data.data);
          this.dropdown.affairsType = this.dropdown.default.concat(this.dropdown.affairsType);
        } else {
          this.dropdown.affairsType = this.dropdown.default.concat([]);
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      }).catch(error => {
        this.dropdown.affairsType = this.dropdown.default.concat([]);
        this.messageService.add({ severity: 'error', summary: '出错了', detail: '错误代码：' + error.status });
        throw error;
      });
  }
  getDataTableList(params?) {
    this._service.listMyTransaction(params)
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

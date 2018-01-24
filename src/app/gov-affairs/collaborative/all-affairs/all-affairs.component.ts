import { Component, OnInit, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { MessageService } from 'primeng/components/common/messageservice';
import { zh_CN } from './../../../common/date-localization';
import * as moment from 'moment';
import { CollaborativeService } from '../collaborative.service';

@Component({
  selector: 'gas-collaborative-all-list',
  templateUrl: './all-affairs.component.html',
  styleUrls: ['./all-affairs.component.scss'],
})
export class AllAffairsComponent implements OnInit {
zh = zh_CN;

  dropdown = {
    default: [
      {
        label: '全部',
        value: ''
      }
    ],
    area: [],
    department: [],
    affairsType: [],
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
    department: '',
    affairType: '',
  };
  pageParams = {
    startTime: moment().subtract(365, 'days')['_d'],
    endTime: moment()['_d'],
    department: '',
    affairType: '',
  };

  constructor(
    private messageService: MessageService,
    private _service: CollaborativeService,
  ) { }

  ngOnInit() {
    this.getDropdownDepartment();
    this.getDropdownAffairsType();
  }

  onSearch() {
    this.getDataTableList({
      startTime: moment(this.formModel.startTime).format('YYYY-MM-DD HH:mm:ss'),
      endTime: moment(this.formModel.endTime).format('YYYY-MM-DD HH:mm:ss'),
      transactionType: this.formModel.affairType,
      transactionOrganizationId: this.formModel.department,
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
      this.dataTable.pageSize = page.pageSize;
      this.getDataTableList({
        startTime: moment(this.pageParams.startTime).format('YYYY-MM-DD HH:mm:ss'),
        endTime: moment(this.pageParams.endTime).format('YYYY-MM-DD HH:mm:ss'),
        transactionType: this.pageParams.affairType,
        transactionOrganizationId: this.pageParams.department,
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

  getDropdownDepartment(params?) {
    this._service.listTransactionDepartmentInfo(params)
      .then(data => {
        if (data.status === 0) {
          this.dropdown.department = this.dropdown.default.concat(data.data.map((item) => ({
            label: item.organizationName,
            value: item.organizationId
          })));
        } else {
          this.dropdown.department = this.dropdown.default.concat([]);
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      }).catch(error => {
        this.dropdown.department = this.dropdown.default.concat([]);
        this.messageService.add({ severity: 'error', summary: '出错了', detail: '错误代码：' + error.status });
        throw error;
      });
  }


  getDataTableList(params?) {
    this._service.listTransactionInfo(params)
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
}

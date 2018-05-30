import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { zh_CN } from './../../../common/date-localization';
import * as moment from 'moment';
import { CollaborativeService } from '../collaborative.service';
import { Util } from '../../../core/util';

@Component({
  selector: 'gas-timeout-search',
  templateUrl: './timeout-search.component.html',
  styleUrls: ['./timeout-search.component.scss']
})
export class TimeoutSearchComponent implements OnInit {
  zh = zh_CN;
  dropdown = {
    enterprise: [],
    government: [],
    currentObject: []
  };
  formModel = {
    type: '0',
    id: '',
    startTime: moment().subtract(365, 'days')['_d'],
    endTime: new Date(),
  };
  pageParams = {
    type: '0',
    id: '',
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
    private util: Util,
    private _service: CollaborativeService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getDropdownGovernment();
  }
  onObjectTypeChange() {
    setTimeout(() => { // 点击事件发生时模型数据还未改变，所以使用了setTimeout。
      if (this.formModel.type === '0') { // 单选按纽选择的是执法局
        this.dropdown.currentObject = this.dropdown.government.concat([]);
        this.formModel.id = this.dropdown.currentObject[0].value;
      } else if (this.formModel.type === '1') { // 单选按纽选择的是企业
        if (this.dropdown.enterprise.length > 0) {
          this.dropdown.currentObject = this.dropdown.enterprise.concat([]);
          this.formModel.id = this.dropdown.currentObject[0].value;
        } else {
          this.getDropdownEnterprise();
        }
      }
    }, 0);
  }
  onSearch() {
    this.getDataTableList({
      startTime: this.util.formatTime(this.formModel.startTime, 'start'),
      endTime: this.util.formatTime(this.formModel.endTime, 'end'),
      searchType: this.formModel.type,
      userId: this.formModel.id['userId'],
      organizationId: this.formModel.id['organizationId'],
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
        startTime: this.util.formatTime(this.pageParams.startTime, 'start'),
        endTime: this.util.formatTime(this.pageParams.endTime, 'end'),
        searchType: this.formModel.type,
        userId: this.formModel.id['userId'],
        organizationId: this.formModel.id['organizationId'],
        pageNumber: this.dataTable.pageNumber,
        pageSize: this.dataTable.pageSize,
      });
    };
  }
  getDataTableList(params?) {
    this._service.listTransactionOverdueHistory(params)
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
  getDropdownGovernment() {
    this._service.listChildUserId({})
      .then(data => {
        if (data.status === 0) {
          this.dropdown.government = data.data.map((item) => ({
            label: item.userName,
            value: {
              userId: item.userId,
              organizationId: item.organizationId
            }
          }));
          this.dropdown.currentObject = this.dropdown.government.concat([]);
          this.formModel.id = this.dropdown.currentObject[0].value;
          this.pageParams.id = this.formModel.id;
        } else {
          this.dropdown.government = [];
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
  getDropdownEnterprise() {
    this._service.listCollaborativeInfo({})
      .then(data => {
        if (data.status === 0) {
          this.dropdown.enterprise = data.data.map((item) => ({
            label: item.enterpriseName,
            value: {
              userId: item.userId,
              organizationId: item.organizationId,
              enterpriseNumber: item.enterpriseNumber
            }
          }));
          this.dropdown.currentObject = this.dropdown.enterprise.concat([]);
          this.formModel.id = this.dropdown.currentObject[0].value;
          this.pageParams.id = this.formModel.id;
        } else {
          this.dropdown.enterprise = [];
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
}

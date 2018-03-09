import { Component, OnInit, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ManageService } from './manage.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { zh_CN } from './../../../../common/date-localization';
import { API } from '../../../../../app/common/api';
import * as moment from 'moment';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'gas-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
  providers: [ManageService, ConfirmationService]
})
export class ManageComponent implements OnInit {
  zh = zh_CN;
  document: any = document;
  window = window;
  API = API;
  visible = false;
  currentDate = new Date();
  dataTable = {
    list: [],
    option: [5, 10, 20, 40],
    total: 0,
    first: 0,
    pageSize: 10,
    pageNumber: 1
  };

  formModel = {
    name: '',
    interval: '',
    target: '',
    initTime: null,
  };
  constructor(
    private _service: ManageService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
  }
  checkForm(file): boolean {
    if (this.formModel.name === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请输入报表名称' });
      return false;
    } else if (file.files.length === 0) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请上传一个附件' });
      return false;
    } else if (this.formModel.interval === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请输入提交间隔' });
      return false;
    } else if (this.formModel.target === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请选择使用对象' });
      return false;
    } else if (this.formModel.initTime === null) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请输入初始提交时间' });
      return false;
    }
    return true;
  }
  resetFromModel() {
    this.document.getElementById('file').value = null;
    this.formModel = {
      name: '',
      interval: '',
      target: '',
      initTime: null,
    };
  }
  onSubmit(file) {
    if (this.checkForm(file)) {
      const formData = new FormData();
      formData.set('reportName', this.formModel.name);
      formData.set('attachmentUrl', file.files[0]);
      formData.set('reportCommitIntervalTime', this.formModel.interval);
      formData.set('useObject', this.formModel.target);
      formData.set('reportCommitInitialDate', moment(this.formModel.initTime).format('YYYY-MM-DD HH:mm:ss'));
      this.sendForm(formData);
    }
  }
  confirmDelete(rowData?) {
    this.confirmationService.confirm({
      message: '你确定要删除此报表吗?',
      accept: () => {
        this.sendDelete({
          corpReportManagementId: rowData.corpReportManagementId
        });
      }
    });
  }
  onCancel() {
    this.visible = false;
    this.resetFromModel();
  }

  onPageChange(event) {
    const page = {
      pageSize: event.rows,
      pageNumber: event.first / event.rows + 1
    };
    Object.assign(this.dataTable, page);
    this.getDataTableList(page);
  }

  getDataTableList(params) {
    this._service.listReportInfo(params)
      .then(data => {
        if (data.status === 0) {
          this.dataTable.list = data.data.list;
          this.dataTable.total = data.data.total;
          this.dataTable.list.forEach(item => {
            item.attachmentUrl = item.attachmentUrl ? this.API.url + item.attachmentUrl : '';
          });
        } else {
          this.dataTable.list = [];
          this.dataTable.total = 0;
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
  sendForm(params?) {
    this._service.addReportInfo(params)
      .then(data => {
        if (data.status === 0) {
          this.resetFromModel();
          this.getDataTableList({
            pageSize: this.dataTable.pageSize,
            pageNumber: this.dataTable.pageNumber
          });
          this.visible = false;
          this.messageService.add({ severity: 'success', summary: '操作成功', detail: data.msg });
        } else {
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
  sendDelete(params?) {
    this._service.deleteReport(params)
      .then(data => {
        if (data.status === 0) {
          this.dataTable.first = 0;
          this.getDataTableList({
            pageSize: this.dataTable.pageSize,
            pageNumber: 1
          });
          this.visible = false;
          this.messageService.add({ severity: 'success', summary: '操作成功', detail: data.msg });
        } else {
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
}

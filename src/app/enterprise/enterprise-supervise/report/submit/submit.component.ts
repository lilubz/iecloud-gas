import { Component, OnInit } from '@angular/core';
import { SubmitService } from './submit.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { API } from '../../../../common/api';

@Component({
  selector: 'gas-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss'],
  providers: [SubmitService]
})
export class SubmitComponent implements OnInit {
  window = window; // 文件下载时使用了
  API = API;
  dataTable = {
    list: [],
    option: [5, 10, 20, 40],
    total: 0,
    first: 0,
    pageSize: 10,
    pageNumber: 1
  };
  constructor(
    private messageService: MessageService,
    public _service: SubmitService,
  ) { }
  onPageChange(event) {
    const page = {
      pageSize: event.rows,
      pageNumber: event.first / event.rows + 1
    };
    Object.assign(this.dataTable, page);
    this.getDataTableList(page);
  }
  onSubmit(index) {
    const files = document.getElementById('file' + index)['files'];
    if (files.length > 0) {
      const formData = new FormData();
      formData.set('multipartFile', files[0]);
      formData.set('corpReportCommitId', this.dataTable.list[index]['corpReportCommitId']);
      this.sendForm(formData);
    } else {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请选择要上传的报表文件' });
    }
  }
  ngOnInit() {
  }

  getDataTableList(params?) {
    this._service.listReportCommitInfo(params)
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

  sendForm(params?) {
    this._service.reportCommit(params)
      .then(data => {
        if (data.status === 0) {
          this.getDataTableList({
            pageSize: this.dataTable.pageSize,
            pageNumber: this.dataTable.pageNumber
          });
          this.messageService.add({ severity: 'success', summary: '操作成功', detail: data.msg });
        } else {
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
}

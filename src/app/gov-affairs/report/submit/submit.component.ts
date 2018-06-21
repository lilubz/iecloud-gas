import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SubmitService } from './submit.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { API } from '../../../common/api';
import { Util } from '../../../core/util';
import * as $ from 'jquery';
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
    option: [10, 20, 40, 80],
    total: 0,
    first: 0,
    pageSize: 40,
    pageNumber: 1
  };
  IE9: boolean;
  redirectUrl: string;
  constructor(
    private messageService: MessageService,
    public _service: SubmitService,
    public util: Util,
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
      formData.append('multipartFile', files[0]);
      formData.append('corpReportCommitId', this.dataTable.list[index]['corpReportCommitId']);
      this.sendForm(formData);
    } else {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请选择要上传的报表文件' });
    }
  }
  ngOnInit() {
    this.IE9 = this.util.isIE9();
    this.redirectUrl = this.util.getReturnUrl(API.reportCommit);
  }
  SubmitAll(index){
    if(this.IE9){
      this.IESubmit(index)
    }else{
      this.onSubmit(index);
    }
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
  IESubmit(index) {
    console.dir(document.querySelectorAll('input[type=file]')[index]);
    // console.log(form.multipartFile.value);
    if (!$("#file" + index).val()) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请选择要上传的报表文件' });
    } else
    if (this.FileType(index)) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请上传Excel格式文件' });
    } else {
      document.querySelectorAll('input[type=file]')[index]['form'].submit();

      // form.submit();
    }
  }
  FileType(index): boolean {
    const filePath = $("#file" + index).val();
    // console.log(filePath);

    if (filePath != "") {
      var fileType = this.util.getFileType(filePath);
      //判断上传的附件是否为图片  
      if ("xls" != fileType && "xlsx" != fileType) {
        const file = $("#file" + index);
        file.after(file.clone());
        file.remove();
        return true
      } else {
        return false
      }
    }
  }
}

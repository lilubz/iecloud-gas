import { Component, OnInit, Injectable, Inject } from '@angular/core';

import { MessageService } from 'primeng/components/common/messageservice';
import { API_TOKEN } from './../../core/api';

@Component({
  selector: 'gas-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor(private messageService: MessageService, @Inject(API_TOKEN) private API) { }

  userUrl = this.API.importUser;
  gcUrl = this.API.importGc;
  cardUrl = this.API.importCard;
  tagUrl = this.API.importTag;

  ngOnInit() {
  }

  result(event) {
    if (event.xhr.status === 200) {
      const data = JSON.parse(event.xhr.responseText);

      if (data.status === 0) {
        this.setMessages('success', '操作成功', data.msg);
      } else {
        this.setMessages('warn', '操作失败', data.msg);
      }
    } else {
      this.setMessages('error', '上传失败', '错误代码：' + event.xhr.status);
    }
  }

  setMessages(type, title, msg) {
    this.messageService.add({
      severity: type,
      summary: title,
      detail: msg,
    });
  }
}

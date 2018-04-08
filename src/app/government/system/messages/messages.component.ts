import { Component, OnInit, OnDestroy, } from '@angular/core';
import { MessagesService, } from './messages.service';
import { ConfirmationService } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/components/common/api';
import { API } from '../../../common/api';


@Component({
  selector: 'gas-message',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, OnDestroy {

  messageList: any[] = [

  ];
  pageNumber = 1;
  pageSize = 40;
  pageOption = [1, 10, 20, 30, 40];
  total = 3;
  first = 0;
  msgs: Message[] = [];
  addTitle = '';
  List: {
    title: string,
    file: File[];
  } = {
      title: '',
      file: [],
    };

  constructor(private _service: MessagesService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.getList();
  }
  onPageChange(event) {
    const page: {
      pageSize: number,
      pageNumber: number
    } = {
        pageSize: event.rows,
        pageNumber: event.first / event.rows + 1
      };
    // console.log(event);
  }
  deleteConfirm(deData) {
    // console.log(deData);
    this.confirmationService.confirm({
      message: '确定删除吗?',
      header: '删除通知',
      icon: 'fa fa-trash',
      accept: () => {
        this._service.delete({ announcementId: deData.announcementId }).then(data => {
          if (data.status === 0) {
            this.showMessage('success', '提示信息', data.msg);
            this.getList();
          } else {
            this.showMessage('warn', '提示信息', data.msg);
          }
        }).catch(error => {
          this.showMessage('error', '服务器错误', '错误码:' + error.status);
        });
        // this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' }];
      },
      reject: () => {
        // this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }
  addConfirm(MessageFiles: any) {
    this.List.file = MessageFiles.files;
    const formData = new FormData();
    // formData.append()
    for (const key in this.List) {
      if (key) {
        if (key === 'file') {
          // formData.append(key, '');
          for (const file of this.List[key]) {
            formData.append(key, file);
          }
        } else {
          formData.append(key, this.List[key]);
        }

      }
    }
    if (this.checkForm()) {
      this._service.add(formData).then(data => {
        if (data.status === 0) {
          this.showMessage('success', '提示信息', data.msg);
          MessageFiles.clear();
          this.List.title = '';
          this.getList();
        } else {
          MessageFiles.clear();
          this.List.title = '';
          this.showMessage('warn', '提示信息', data.msg);
        }
      }).catch(error => {
        MessageFiles.clear();
        this.List.title = '';
        this.showMessage('error', '服务器错误', '错误码:' + error.status);
      });
    }
  }

  getList() {
    this._service.query({}).then(data => {
      if (data.status === 0) {
        this.messageList = data.data.announcements;
        this.total = data.data.total;
      } else {
        this.messageList = [];
        this.total = 0;
        this.showMessage('warn', '提示信息', '获取信息失败');
      }
    }).catch(error => {
      this.messageList = [];
      this.total = 0;
      this.showMessage('error', '服务器错误', '错误码:' + error.status);
    });
  }

  checkForm(): boolean {
    if (!this.List.title) {
      this.showMessage('warn', '提示信息', '标题不能为空');
      return false;
    } else if (!this.List.file) {
      this.showMessage('warn', '提示信息', '上传文件不能为空');
      return false;
    } else {
      return true;
    }
  }
  showMessage(type, title, msg) {
    this.msgs.push({
      severity: type,
      summary: title,
      detail: msg
    });
    setTimeout(() => this.msgs = [], 2000);
  }
  ngOnDestroy() {
  }
}

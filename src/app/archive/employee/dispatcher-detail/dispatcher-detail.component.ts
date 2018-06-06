import { Component, OnInit } from '@angular/core';
import { DispatcherService } from '../dispatcher.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'gas-dispatcher-detail',
  templateUrl: './dispatcher-detail.component.html',
  styleUrls: ['./dispatcher-detail.component.scss'],
  providers: [DispatcherService, ConfirmationService]
})
export class DispatcherDetailComponent implements OnInit {
  details: any = null;
  id = '';
  loading = false;
  currentImgUrl = '';
  constructor(
    private _service: DispatcherService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.queryParams['value'].id;
    if (typeof this.id === 'string' && this.id !== '') {
      this.getDetails({ dispatcherNumber: this.id });
    }
  }

  getDetails(params?) {
    this.loading = true;
    this._service.getDispatcherDetailInfo(params)
      .then(data => {
        if (data.status === 0) {
          this.details = data.data;
        } else {
          this.details = null;
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
        this.loading = false;
      });
  }

  confirmResetPassword() {
    this.confirmationService.confirm({
      message: '您真的要重置密码吗?',
      header: '重置密码',
      icon: 'fa fa-question-circle',
      accept: () => {
        this.resetPassword();
      },
      reject: () => {
      }
    });
  }

  showImg(event, url, overlaypanel) {
    this.currentImgUrl = '';
    overlaypanel.toggle(event);
    const el = overlaypanel.container;
    setTimeout(() => {
      this.currentImgUrl = url;
      el.style.top = parseFloat(el.style.top) - 120 + 'px';
      el.style.left = parseFloat(el.style.left) - 120 + 'px';
      el.style.maxWidth = '300px';
    }, 0);
  }

  resetPassword() {
    this._service.resetPassword({
      userId: this.details.dispatcherInfoVO.userId
    })
      .then(data => {
        if (data.status === 0) {
          this.messageService.add({ severity: 'success', summary: '操作成功', detail: data.msg });
        } else {
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }

}

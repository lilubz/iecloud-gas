import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { zh_CN } from './../../common/date-localization';
import { MessageService } from 'primeng/components/common/messageservice';
import { AffairDetailsService } from './affair-details.service';
import { API } from '../../../app/common/api';
import * as moment from 'moment';

@Component({
  selector: 'gas-affair-details',
  templateUrl: './affair-details.component.html',
  styleUrls: ['./affair-details.component.scss'],
  providers: [AffairDetailsService]
})
export class AffairDetailsComponent implements OnInit {
  zh = zh_CN;
  window = window; // 文件下载时使用了
  API = API;
  history = history;  // 返回按纽使用了，功能返回上一个页面。
  id = '';

  formModel = {
    explain: '',
  };
  details: {
    transactionBasicNumber?: string, // 事务编号
    transactionPatrolTime?: string, // 事务巡查时间
    description?: string, // 事务描述
    transactionAddress?: string, // 事务发生地址
    transactionHandleName?: string, // 事务处理对象
    createTime?: string, // 记录生成时间
    transactionOrganizationName?: string, // 发起部门
    transactionUserName?: string, // 发起人
    url?: string, // 附件
    transactionTypeList?: any, // 事务类型列表
    boolIsHandle?: boolean, // false表示正在处理 true表示已经处理完成
    emergencyDegree?: string, // 紧急程度
    boolIsRelate?: false, // 是否与当前登录人相关
  } = {};
  todo: {
    transactionOrganizationName?: string, // 事务来源部门
    eventId?: number, // 事件id
    endTime?: string, // 结束时间
    eventOrganizationId?: string, // 事件处理部门编号
    eventHandleOrganizationName?: string, // 事件处理部门姓名
    eventHandleName?: string, // 事件处理人姓名
    description?: string, // 描述
    url?: string, // 附件
    relateNumber?: number, // 相关性2表示与自己相关但是未处理
    boolIsHandle?: boolean, // 是否需要处理
    expirationDate?: Date, // 到期时间
    lastEventId?: string, // 上一个事件id
  } = {};
  constructor(
    public _service: AffairDetailsService,
    private messageService: MessageService,
    private routerInfo: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.routerInfo.queryParams['value'].id) {
      this.id = this.routerInfo.queryParams['value'].id;
      this.getDetails({ transactionBasicNumber: this.id });
      this.getTodo({ transactionBasicNumber: this.id });
    }
  }
  onSubmit(file) {
    if (this.formModel.explain.trim()) {
      const formData: any = new FormData();
      formData.append('transactionBasicId', this.todo.eventId);
      formData.append('description', this.formModel.explain);
      formData.append('boolIsApproved', false);
      formData.append('boolIsReject', false);
      formData.append('collaborativeOrganizationInfoTOS', null);
      formData.append('cylinderImage', file.files[0] ? file.files[0] : '');
      this.sendForm(formData);
    } else {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请填写回复内容' });
    }
  }

  getAffairLevel(number): string {
    switch (number) {
      case 1:
        return '1级（一般）';
      case 2:
        return '2级（重要）';
      case 3:
        return '3级（紧急）';
      default:
        break;
    }
  }

  // http请求
  getDetails(params?) {
    this._service.listTransactionDetailInfo(params)
      .then(data => {
        if (data.status === 0) {
          this.details = data.data;
        } else {
          this.details = {};
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
  getTodo(params?) {
    this._service.listCorpEventInfo(params)
      .then(data => {
        if (data.status === 0) {
          this.todo = data.data;
        } else {
          this.todo = {};
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
  sendForm(params?) {
    this._service.cooperativeOperation(params)
      .then(data => {
        if (data.status === 0) {
          this.messageService.add({ severity: 'success', summary: '操作成功', detail: data.msg + '2秒后返回上一页面' });
          setTimeout(() => {
            history.go(-1);
          }, 2000);
        } else {
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { zh_CN } from './../../../../common/date-localization';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/primeng';
import { CollaborativeService } from '../collaborative.service';
import { API } from '../../../../../app/common/api';
import * as moment from 'moment';
@Component({
  selector: 'gas-collaborative-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [ConfirmationService]
})
export class DetailsComponent implements OnInit {
  zh = zh_CN;
  window = window; // 文件下载时使用了
  API = API;
  history = history;  // 返回按纽使用了，功能返回上一个页面。
  currentDate: Date = new Date();
  id = '';

  formModel = {
    boolIsReject: false,
    needHelp: false,
    explain: '',
    shiftList: [],
    file: null,
    boolIsApproved: false
  };
  details: {
    transactionBasicNumber?: string,
    transactionPatrolTime?: string,
    description?: string,
    transactionAddress?: string,
    transactionHandleName?: string,
    createTime?: string,
    transactionOrganizationName?: string,
    transactionUserName?: string,
    url?: string,
    transactionTypeList?: any,
    boolIsHandle?: string,
    emergencyDegree?: string,
    boolIsRelate?: false,
  } = {};
  treeNode = {
    data: null,
    selectObj: null,
    selectId: null,
    selectInfo: null,
    needHandle: null,
    replyInfo: []
  };
  multiSelectOptions = [];
  constructor(
    public _service: CollaborativeService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private routerInfo: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.routerInfo.queryParams['value'].id) {
      this.id = this.routerInfo.queryParams['value'].id;
      this.getTreeNode();
      this.getDetails({ transactionBasicNumber: this.id });
      this.getMultiSelectDepartment();
    } else {
      throw new Error('查询参数不能为空');
    }
  }

  onDestroy() {
    this.confirmationService.confirm({
      message: '您确认要撤销本次的事务么?',
      accept: () => {
        this.sendDelete({
          transactionBasicNumber: this.id,
        });
      }
    });
  }
  checkForm(): boolean {
    if (this.formModel.explain === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请填写说明信息' });
      return false;
    }
    // 检测是否填入了时间。
    const hasTime = this.formModel.shiftList.every(item => item.time ? true : false);
    if (!hasTime) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请填写批转的截止时间' });
      return false;
    }
    return true;
  }
  handleTypeChange(file) {
    setTimeout(() => {
      if (this.formModel.boolIsReject) { // 回退
        this.formModel.shiftList = [];
        file.value = null;
        this.formModel.file = null;
      }
    });
  }
  onSubmit(file) {
    if (this.checkForm()) {
      const formData: any = new FormData();
      formData.append('transactionBasicId', this.treeNode.needHandle.eventId);
      formData.append('description', this.formModel.explain);
      formData.append('boolIsApproved', this.formModel.shiftList.length > 0 ? true : false);
      formData.append('boolIsReject', this.formModel.boolIsReject);
      if (this.formModel.boolIsReject) {  // 回退
        formData.append('collaborativeOrganizationInfoTOS', '');
        formData.append('cylinderImage', '');
      } else { // 处理
        const list = [];
        this.formModel.shiftList.forEach(item => {
          list.push({
            organizationId: item.organizationId,
            expirationDate: moment(item.time).format('YYYY-MM-DD HH:mm:ss')
          });
        });
        formData.append('collaborativeOrganizationInfoTOS', JSON.stringify(list));
        formData.append('cylinderImage', file.files[0] ? file.files[0] : '');
      }
      this.sendHandle(formData);
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

  // 点击展开节点
  onNodeExpand(event) {
  }
  getTreeNode() {
    this._service.listTransactionChildren({
      transactionBasicNumber: this.id
    })
      .then(data => {
        if (data.status === 0) {
          this.treeNode.data = [this.transformToTreeNode(data.data, true)];
          this.getAllNodeDetailsInfo();
        } else {
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      }).catch(error => {
        this.messageService.add({ severity: 'error', summary: '出错了', detail: '错误代码：' + error.status });
        throw error;
      });
  }
  getAllNodeDetailsInfo(params?) {
    this._service.listEventDetailInfo({
      transactionBasicId: this.treeNode.data[0].data
    })
      .then(data => {
        if (data.status === 0) {
          data.data.forEach(item => {
            if (item.relateNumber === 2) { // 需要处理
              item.url = item.url ? this.API.url + item.url : '';
              this.treeNode.needHandle = item;
            } else {
              item.url = item.url ? this.API.url + item.url : '';
              this.treeNode.replyInfo.push(item);
            }
          });
          // 填充需处理事务下面的信息
          const target = this.treeNode.needHandle;

          if (target && target.lastEventId) {
            const parentNode = (() => {
              for (let i = 0; i < this.treeNode.replyInfo.length; i++) {
                const current = this.treeNode.replyInfo[i];
                if (target.lastEventId === current.eventId) {
                  return current;
                }
              }
              return null;
            })();
            if (parentNode) {
              target['parentEndTime'] = parentNode.endTime; // 结束时间
              target['parentDescription'] = parentNode.description; // 描述
              target['parentEventHandleName'] = parentNode.eventHandleName; // 事件处理人名称
              target['parentEventHandleOrganizationName'] = parentNode.eventHandleOrganizationName;
              target['parentUrl'] = parentNode.url;
            }
          } else if (target && !target.lastEventId) { // 没有lastEventId 那么此节点的父节点是根节点
            setTimeout(() => {
              target['parentEndTime'] = ''; // 结束时间
              target['parentDescription'] = this.details.description ? this.details.description : ''; // 描述
              target['parentEventHandleName'] = this.details.transactionUserName ? this.details.transactionUserName : ''; // 事件处理人名称
              target['parentEventHandleOrganizationName'] = this.details.transactionOrganizationName ? this.details.transactionOrganizationName : '';
              target['parentUrl'] = this.details.url ? this.details.url : '';
            }, 3000);
          }
        } else {
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      }).catch(error => {
        this.messageService.add({ severity: 'error', summary: '出错了', detail: '错误代码：' + error.status });
        throw error;
      });
  }

  getDetails(params?) {
    this._service.listTransactionDetailInfo(params)
      .then(data => {
        if (data.status === 0) {
          this.details = data.data;
          this.details['url'] = this.details['url'] ? this.API.url + this.details['url'] : '';
        } else {
          this.details = {};
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      }).catch(error => {
        this.details = {};
        this.messageService.add({ severity: 'error', summary: '出错了', detail: '错误代码：' + error.status });
        throw error;
      });
  }
  sendHandle(params?) {
    this._service.cooperativeOperation(params)
      .then(data => {
        if (data.status === 0) {
          this.messageService.add({ severity: 'success', summary: '操作成功', detail: data.msg + '2秒后重新加载' });
          setTimeout(() => {
            history.go(0);
          }, 2000);
        } else {
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      }).catch(error => {
        this.messageService.add({ severity: 'error', summary: '出错了', detail: '错误代码：' + error.status });
        throw error;
      });
  }
  sendDelete(params?) {
    this._service.deleteTransaction(params)
      .then(data => {
        if (data.status === 0) {
          this.messageService.add({ severity: 'success', summary: '操作成功', detail: data.msg });
          this.history.go(-1);
        } else {
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      }).catch(error => {
        this.messageService.add({ severity: 'error', summary: '出错了', detail: '错误代码：' + error.status });
        throw error;
      });
  }
  getMultiSelectDepartment() {
    this._service.listEventOrganizationId({})
      .then(data => {
        if (data.status === 0) {
          this.multiSelectOptions = data.data.map(item => {
            item.time = null;
            return item;
          });
        } else {
          this.multiSelectOptions = [];
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      }).catch(error => {
        this.multiSelectOptions = [];
        this.messageService.add({ severity: 'error', summary: '出错了', detail: '错误代码：' + error.status });
        throw error;
      });
  }
  /**
   * 遍历数组
   * @param data 获取的数组
   */
  transformToTreeNode(data, isFirst?) {
    if (data) {
      const temp = {
        collapsedIcon: 'fa-folder',
        data: data.t.transactionBasicId,
        expandedIcon: 'fa-folder-open',
        label: isFirst ? data.t.transactionOrganizationName + '(发起)' : data.t.transactionOrganizationName,
        description: data.t.description,
        address: data.t.address,
        icon: 'fa-folder',
        style: 'color:red',
        selectable: isFirst ? false : true,
        expanded: data.children ? true : false,
        children: null,
      };
      if (data.children) {
        const arr = [];
        for (const item of data.children) {
          arr.push(this.transformToTreeNode(item));
        }
        temp.children = arr;
      }
      return temp;
    }
    return null;
  }
}

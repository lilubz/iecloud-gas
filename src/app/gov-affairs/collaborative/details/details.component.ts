import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsService } from './details.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/primeng';
import { CollaborativeService } from '../collaborative.service';
import { API } from '../../../../app/core/api';
@Component({
  selector: 'gas-collaborative-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [ ConfirmationService]
})
export class DetailsComponent implements OnInit {
  window = window;
  API = API;
  history = history;
  config = this._service.getConfig();
  relateNumber = -1;
  id = '';
  visible = false;
  selectNode = {
    id: '',
    info: {}
  };
  formModel = {
    boolIsReject: 0,
    needHelp: false,
    explain: '',
    helpList: []
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
  } = {};
  source = [];
  target = [];
  tree = [];
  selectedNode: any;
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
      this.getDetails({transactionBasicNumber: this.id});
    } else {
      throw new Error('查询参数不能为空');
    }
    console.dir(this.router);
  }
  onTest() {
    console.log(this);
  }
  onBack() {
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
  onSubmit(file) {
    let arr = [];
    this.target.forEach((item) => {
      arr.push(item.organizationId);
    });
    if (this.formModel.explain !== '') {
      if (!this.formModel.boolIsReject) {
        const formData: any = new FormData();
        formData.append('transactionBasicId', this.selectNode.id);
        formData.append('description', this.formModel.explain);
        formData.append('boolIsApproved', this.formModel.needHelp);
        formData.append('boolIsReject', this.formModel.boolIsReject ? true : false);
        formData.append('organizationList', arr);
        formData.append('cylinderImage', file.files[0]);
        this.sendHandle(formData);
      } else {
        this.formModel.needHelp = false;
        const formData: any = new FormData();
        this.formModel.boolIsReject = 1;
        this.target = [];
        file.value = '';
        arr = [];
        formData.append('transactionBasicId', this.selectNode.id);
        formData.append('description', this.formModel.explain);
        formData.append('boolIsApproved', this.formModel.needHelp);
        formData.append('boolIsReject', this.formModel.boolIsReject ? true : false);
        formData.append('organizationList', arr);
        formData.append('cylinderImage', '');
        this.sendHandle(formData);
      }
    } else {
      this.messageService.add({ severity: 'warn', summary: '说明信息不能为空'});
    }
    // this
  }
  onPickListOk() {
    this.visible = false;
    if (this.target.length === 0) {
      this.formModel.needHelp = false;
    }
  }
  onChangeHasHelp() {
    if (this.formModel.needHelp) {
      this.visible = true;
      this.getSourceList();
    } else {
      this.target = [];
    }
  }
  onNodeSelect(event) {
    this.selectNode.id = event.node.data;
    this.getSelectNodeInfo({
      transactionBasicId: event.node.data
    });
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
          this.tree = [this.transformToTreeNode(data.data, true)];
        } else {
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      }).catch(error => {
        this.messageService.add({ severity: 'error', summary: '出错了', detail: '错误代码：' + error.status });
        throw error;
      });
  }
  getSelectNodeInfo(params?) {
    this._service.listEventDetailInfo(params)
      .then(data => {
        if (data.status === 0) {
          this.selectNode.info = data.data;
          this.selectNode.info['url'] = this.API.url + this.selectNode.info['url'];
          this.relateNumber = data.data.relateNumber;
        } else {
          this.selectNode.info = {};
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      }).catch(error => {
        this.selectNode.info = {};
        this.messageService.add({ severity: 'error', summary: '出错了', detail: '错误代码：' + error.status });
        throw error;
      });
  }
  getSourceList() {
    this._service.listEventOrganizationId({})
      .then(data => {
        if (data.status === 0) {
          this.source = data.data;
        } else {
          this.source = [];
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      }).catch(error => {
        this.source = [];
        this.messageService.add({ severity: 'error', summary: '出错了', detail: '错误代码：' + error.status });
        throw error;
      });
  }
  getDetails(params?) {
    this._service.listTransactionDetailInfo(params)
      .then(data => {
        if (data.status === 0) {
          this.details = data.data;
          this.details['transactionTypeList'] = this.details.transactionTypeList.split(',');
          this.details['url'] = this.API.url + this.details['url'];
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
          this.messageService.add({severity: 'success', summary: '操作成功', detail: data.msg});
          this.router.navigate(['/gov-affairs/collaborative/details'], { queryParams: { id: this.id } });
        } else {
          // this.details = {};
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      }).catch(error => {
        // this.details = {};
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
          // this.details = {};
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      }).catch(error => {
        // this.details = {};
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

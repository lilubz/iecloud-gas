import { Injectable } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { API } from '../../core/api';

@Injectable()
export class CollaborativeService {
  constructor(private HttpService: HttpService) { }

  listEventOrganizationId(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listEventOrganizationId, params);
  }

  getDropdownForRegionSysUser(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.getDropdownForRegionSysUser, params);
  }

  listTransactionDetailInfo(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listTransactionDetailInfo, params);
  }

  listEventDetailInfo(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listEventDetailInfo, params);
  }

  insertTransactionBasic(params?: any): Promise<any> {
    return this.HttpService.formDataPostRequest(API.insertTransactionBasic, params);
  }

  listTransactionChildren(params?: any): Promise<any> {
    return this.HttpService.formPostRequest(API.listTransactionChildren, params);
  }

  listTransactionInfo(params?: any): Promise<any> {
    return this.HttpService.formPostRequest(API.listTransactionInfo, params);
  }

  cooperativeOperation(params?: any): Promise<any> {
    return this.HttpService.formDataPostRequest(API.cooperativeOperation, params);
  }

  deleteTransaction(params?: any): Promise<any> {
    return this.HttpService.delete(API.deleteTransaction, params);
  }

  get(interfaceName, params) {
    return this.HttpService.getRequest(API[interfaceName], params);
  }

  listRegionInfo(params) {
    return this.HttpService.getRequest(API.listRegionInfo, params);
  }

  getConfig() {
    // 事务的分类与事务的紧急程度。
    return {
      affairType: [
        { 'label': '事故处理', 'value': '1' },
        { 'label': '人员管理', 'value': '2' },
        { 'label': '操作规范', 'value': '3' },
        { 'label': '违法安装', 'value': '4' },
        { 'label': '设施安检', 'value': '5' },
        { 'label': '违规使用', 'value': '6' },
        { 'label': '违规冲装', 'value': '7' },
        { 'label': '气瓶问题', 'value': '8' },
        { 'label': '非法储存销售', 'value': '9' },
        { 'label': '消防安全', 'value': '10' },
        { 'label': '妨碍公务', 'value': '11' },
        { 'label': '运输问题', 'value': '12' },
        { 'label': '经营许可', 'value': '13' },
        { 'label': '安全生产隐患', 'value': '14' },
        { 'label': '其他', 'value': '15' }
      ],
      degree: [
        {
          label: '1级（一般）',
          value: '1'
        },
        {
          label: '2级（重要）',
          value: '2'
        },
        {
          label: '3级（紧急）',
          value: '3'
        }
      ]
    };
  }
  getAffairName(params) {
    const target = this.getConfig().affairType;
    for (const itme of target) {
      if (params === itme.value) {
        return itme.label + ' ';
      }
    }
  }
  getAffairLevel(params) {
    const target = this.getConfig().degree;
    for (const itme of target) {
      if (params + '' === itme.value) {
        return itme.label;
      }
    }
  }
}

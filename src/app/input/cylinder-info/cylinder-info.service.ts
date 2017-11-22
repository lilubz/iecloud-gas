import { API_TOKEN } from './../../core/api';
import { HttpService } from './../../core/http.service';
import {
  Injectable, Inject
} from '@angular/core';
import { Headers } from '@angular/http';

@Injectable()
export class CylinderInfoService {
  constructor(private HttpService: HttpService, @Inject(API_TOKEN) private API) { }
  // 验证气瓶编码是否存在
  // querySingle(params: any): Promise<any> {
  //   return this.HttpService.formPostRequest(this.API.queryCustomerDetail, params)
  //     .catch(this.handleError);
  // }
  // 获取下拉框数据
  getListManufactureOrg(params: any): Promise<any> {
    return this.HttpService
      .getRequest(this.API.getListManufactureOrg, params)
      .catch(this.handleError);
  }
  getListGcType(params: any): Promise<any> {
    return this.HttpService
      .getRequest(this.API.getListGcType, params)
      .catch(this.handleError);
  }
  getListFillingMedium(params: any): Promise<any> {
    return this.HttpService
      .getRequest(this.API.getListFillingMedium, params)
      .catch(this.handleError);
  }
  getListGcSpecification(params: any): Promise<any> {
    return this.HttpService
      .getRequest(this.API.getListGcSpecification, params)
      .catch(this.handleError);
  }
  getListInspection(params: any): Promise<any> {
    return this.HttpService
      .getRequest(this.API.getListInspection, params)
      .catch(this.handleError);
  }
  getGcSpecification(params: any): Promise<any> {
    return this.HttpService
      .getRequest(this.API.getGcSpecification, params)
      .catch(this.handleError);
  }
  getSerialNumber(params: any): Promise<any> {
    return this.HttpService
      .getRequest(this.API.getSerialNumber, params)
      .catch(this.handleError);
  }
  getEnterpriseName(params: any): Promise<any> {
    return this.HttpService
      .getRequest(this.API.getEnterpriseName, params)
      .catch(this.handleError);
  }
  // 添加单条记录
  addInformation(params: any): Promise<any> {
    return this.HttpService
      .formDataPostRequest(this.API.insertGCInfoBasic, params);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}

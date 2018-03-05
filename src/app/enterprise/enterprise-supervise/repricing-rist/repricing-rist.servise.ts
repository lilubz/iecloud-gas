import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/http.service';
import { API } from '../../../common/api';

@Injectable()
export class RepricingRistService {
    constructor(private HttpService: HttpService) { }
    //气瓶规格列表
    listGcSpecification(params?) {
        return this.HttpService.getRequest(API.getCylinderSpecification, params);
    }
    //列表
    alllistGcPricingByCorp(params?) {
        return this.HttpService.getRequest(API.listGcPricingByCorp, params);
    }
    //保存
    updateOrAddPricing(params?) {
        return this.HttpService.getRequest(API.updateOrAddPricing, params);
    }
    //删除
    deletePricing(params?) {
        return this.HttpService.getRequest(API.deletePricing, params);
    }
}

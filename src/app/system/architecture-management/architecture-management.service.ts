import { Injectable, } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { API } from '../../common/api';

@Injectable()
export class ArchitectureManagementService {
    constructor(private httpService: HttpService) { }

    getCylinderSearchOpt(params: any): Promise<any> {
        return this.httpService
            .formPostRequest(API.cylinderSelectOpt, params);
    }
    getDropdownForCorpInfoInRegion(params: any): Promise<any> {
        return this.httpService
            .getRequest(API.getDropdownForCorpInfoInRegion, params);
    }

    // onsearch(params: any): Promise<any> {
    //     return this.httpService.getRequest(API.listSupplyStationUser, params);
    // }
    // createAccount(params: any): Promise<any> {
    //     return this.httpService.formPostRequest(API.createAccount, params);

    // }
    addOrganzation(params: any): Promise<any> {
        return this.httpService.formPostRequest(API.addOrganzation, params);

    }
    getOrganzationTree(params: any): Promise<any> {
        return this.httpService.getRequest(API.getOrganzationTree, params);
    }
}

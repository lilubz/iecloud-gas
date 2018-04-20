import { Injectable } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { API } from '../../common/api';

@Injectable()
export class GasBusinessLicenseService {
  constructor(private httpService: HttpService) { }

  uploadGasBusinessLicense(params: any): Promise<any> {
    return this.httpService.formDataPostRequest('', params);
  }
}

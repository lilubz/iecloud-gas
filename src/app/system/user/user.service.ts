import { API } from './../../core/api';
import { HttpService } from './../../core/http.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private httpService: HttpService) { }

  updatePassword(params): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(API.updatePassword, params);
  }
}

import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpService } from '../../core/http.service';
import { API } from '../../core/api';

@Injectable()
export class MessagesService {
  constructor(private HttpService: HttpService) { }

  query(params: any): Promise<any> {
    return this.HttpService.getRequest(API.query, params);
  }
  add(params: any): Promise<any> {
    return this.HttpService
      .formDataPostRequest(API.add, params);
  }
  delete(params: any): Promise<any> {
    return this.HttpService
      .getRequest(API.delete, params);
  }

}


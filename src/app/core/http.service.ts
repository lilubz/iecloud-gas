import { Injectable } from '@angular/core';
import { Headers, Http, ResponseContentType, RequestOptionsArgs } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import { UserStateService } from './userState.service';

@Injectable()
export class HttpService {
  private formHeaders = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charser=UTF-8' });
  private formDataHeaders = new Headers({ 'Content-Type': 'multipart/form-data; charser=UTF-8' });

  constructor(private http: Http, private router: Router, private userStateService: UserStateService) { }
  // 重封装get请求
  getRequest(url, data) {
    return this.http.get(url + '?' + this.transformRequest(data))
      .toPromise()
      .then(res => this.httpStatusFilter(res))
      .catch(error => this.handleError(error));
  }

  // 重封装delete请求
  delete(url, data) {
    return this.http.delete(url + '?' + this.transformRequest(data))
      .toPromise()
      .then(res => this.httpStatusFilter(res))
      .catch(error => this.handleError(error));
  }

  // 重封装post请求
  JSONPostRequest(url, data, options?: RequestOptionsArgs) {
    return this.http
      .post(url, JSON.stringify(data), options)
      .toPromise()
      .then(res => this.httpStatusFilter(res))
      .catch(error => this.handleError(error));
  }

  // 重封装post请求，参数序列化
  formPostRequest(url, data) {
    return this.http
      .post(url, this.transformRequest(data), { headers: this.formHeaders })
      .toPromise()
      .then(res => this.httpStatusFilter(res))
      .catch(error => this.handleError(error));
  }

  // 重封装post请求，不修改content-type请求头
  formDataPostRequest(url, data, options?: RequestOptionsArgs) {
    return this.http
      .post(url, data)
      .toPromise()
      .then(res => this.httpStatusFilter(res))
      .catch(error => this.handleError(error));
  }

  // 重封装post请求，允许cookie，参数序列化
  withCredentialsPostRequest(url, data, options?: RequestOptionsArgs) {
    return this.http
      .post(url, this.transformRequest(data),
      Object.assign({}, { headers: this.formHeaders, withCredentials: true }, options))
      .toPromise()
      .then(res => this.httpStatusFilter(res))
      .catch(error => this.handleError(error));
  }

  // 重封装post请求，允许cookie，参数序列化
  withCredentialsPost(url, data) {
    return this.http
      .post(url, this.transformRequest(data), {
        headers: this.formHeaders,
        responseType: ResponseContentType.Blob, withCredentials: true
      })
      .toPromise()
      .then(res => res);
  }

  transformRequest(obj) {
    const str = [];
    for (const p in obj) {
      if (p) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    }
    return str.join('&');
  }

  checkLogin(data) {
    // if (data.status === 10) {
    //   this.userStateService.getUser() = null;
    //   this.router.navigate(['/']);
    // }
    return data;
  }

  private handleError(error: any): Promise<any> {
    console.log(error);
    console.log(error.status);
    this.httpStatusFilter(error);
    return Promise.reject(error.message || error);
  }

  private httpStatusFilter(res: Response | any) {
    switch (res.status) {
      case 100:
        break;
      case 200:
        // 没有登录
        if (res.json().status === 10) {
          this.userStateService.setUser(undefined);
          this.router.navigate(['/login']);
        }
        break;
      case 300:
        break;
      case 400:
        break;
      case 500:
        break;
    }
    return res.json();
  }
}

import { Injectable } from '@angular/core';
import { Headers, Http, ResponseContentType } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  private formHeaders = new Headers({ "Content-Type": "application/x-www-form-urlencoded; charser=UTF-8" });

  constructor(private http: Http) { }
  // 重封装get请求
  getRequest(url, data) {
    return this.http.get(url + '?' + this.transformRequest(data))
      .toPromise()
      .then(res => res.json());
  }

  // 重封装post请求
  JSONPostRequest(url, data) {
    return this.http
      .post(url, JSON.stringify(data))
      .toPromise()
      .then(res => res.json());
  }

  // 重封装post请求，参数序列化
  formPostRequest(url, data) {
    return this.http
      .post(url, this.transformRequest(data), { headers: this.formHeaders })
      .toPromise()
      .then(res => res.json());
  }

  // 重封装post请求，允许cookie，参数序列化
  withCredentialsPostRequest(url, data) {
    return this.http
      .post(url, this.transformRequest(data), { headers: this.formHeaders, withCredentials: true })
      .toPromise()
      .then(res => res.json());
  }

  // 重封装post请求，允许cookie，参数序列化
  withCredentialsPost(url, data) {
    return this.http
      .post(url, this.transformRequest(data), { headers: this.formHeaders, responseType: ResponseContentType.Blob, withCredentials: true })
      .toPromise()
      .then(res => res);
  }

  transformRequest(obj) {
    let str = [];
    for (let p in obj) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
    return str.join("&");
  }
}
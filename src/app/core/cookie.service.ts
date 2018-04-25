import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {

  constructor() { }


  // 设置cookie
  setItem(name:string, value:any, days:number) {
    var date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = name + '=' + value + ';expires=' + date;
  }

  // 获取cookie
  getItem(name:string) {
    var arr = document.cookie.replace(/\s/g, "").split(';');
    for (var i = 0; i < arr.length; i++) {
      var tempArr = arr[i].split('=');
      if (tempArr[0] == name) {
        return decodeURIComponent(tempArr[1]);
      }
    }
    return '';
  }

  // 删除cookie
  removeItem(name:string) {
    this.setItem(name, '1', -1);
  }

  // 检查是否含有某cookie
  hasItem(name:string) {
    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(name).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
  }

  // 获取全部的cookie列表
  getAllItems() {
    var cookieArr = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
    for (var nIdx = 0; nIdx < cookieArr.length; nIdx++) { cookieArr[nIdx] = decodeURIComponent(cookieArr[nIdx]); }
    return cookieArr;
  }
}

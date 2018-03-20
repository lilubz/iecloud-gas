import { Injectable } from '@angular/core';

@Injectable()
export class Base64Service {

  constructor() { }
  // 加密
  b64EncodeUnicode(str:string) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
        return String.fromCharCode(<any>('0x' + p1));
      }));
  }

  // 解密
  b64DecodeUnicode(str:string) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

}

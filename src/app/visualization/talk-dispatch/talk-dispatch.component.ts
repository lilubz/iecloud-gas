import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gas-talk-dispatch',
  templateUrl: './talk-dispatch.component.html',
  styleUrls: ['./talk-dispatch.component.scss']
})
export class TalkDispatchComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  // 浏览器检查
  isIE(): boolean {
    const ua = window.navigator.userAgent;
    let version = 0;
    if (/MSIE([^;]+)/.test(ua)) { // 判断IE11以下（不含IE11）
      version = parseFloat(RegExp['$1']);
    }
    return version > 0;
  }
}

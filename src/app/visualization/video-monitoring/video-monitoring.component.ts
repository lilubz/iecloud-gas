import { UserStateService } from './../../core/userState.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gas-video-monitoring',
  templateUrl: './video-monitoring.component.html',
  styleUrls: ['./video-monitoring.component.scss']
})
export class VideoMonitoringComponent implements OnInit {
  isAdmin: boolean;
  constructor(
    private userStateService: UserStateService
  ) { }

  ngOnInit() {
    this.isAdmin = (this.userStateService.getUser().roleId).toString() === '4' ? true : false;
  }

  // 浏览器检查
  isIE(): boolean {
    const ua = window.navigator.userAgent;
    let version = 0;
    if (/MSIE([^;]+)/.test(ua)) { // 判断IE11以下（不含IE11）
      version = parseFloat(RegExp['$1']);
    } else if (/rv:([^\)]+)\) like Gecko/.test(ua)) { // 判断IE11
      version = parseFloat(RegExp['$1']);
    }
    return version > 0;
  }
}

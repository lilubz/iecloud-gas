import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './../login/login.service';
import { MenuItem } from 'primeng/components/common/menuitem';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'gas-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {

  constructor(private loginService: LoginService, private messageService: MessageService, private router: Router) { }
  menus: MenuItem[];
  curTime: any;
  DateTime: any;

  ngOnInit() {
    this.menus = [
      {
        label: '首页',
        icon: 'menu-icon home-icon',
        routerLink: ['/home']
      },
      {
        label: '基础档案',
        icon: 'menu-icon archive-icon',
        routerLink: ['/archive/'],
        items: [
          { label: '气瓶档案', routerLink: ['/archive/cylinder'] },
          { label: '用户档案', routerLink: ['/archive/customer'] },
          { label: '企业档案', routerLink: ['/archive/enterprise'] },
          { label: '车辆信息', routerLink: ['/archive/car'] },
          { label: '从业人员信息', routerLink: ['/archive/employee '] },
          { label: '视频图像', routerLink: ['/archive/media'] },
        ]
      },
      {
        label: '配送监管',
        icon: 'menu-icon distribution-icon',
        // routerLink: ['/home']
      },
      {
        label: '监管事务',
        icon: 'menu-icon supervise-icon',
        // routerLink: ['/home']
      },
      {
        label: '可视化',
        icon: 'menu-icon visualization-icon',
        // routerLink: ['/home']
      },
      {
        label: '统计查询',
        icon: 'menu-icon statistic-icon',
        // routerLink: ['/home']
      },
      {
        label: '系统配置',
        icon: 'menu-icon system-icon',
        // routerLink: ['/home']
      }
    ];
    setInterval(() => {
      this.curTime = new Date().toLocaleTimeString();
      this.DateTime = new Date().toLocaleDateString();
    }, 1000);
  }

  logout() {
    this.loginService.logout();
  }
}

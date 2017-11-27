import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './../login/login.service';
import { MenuItem } from 'primeng/components/common/menuitem';
import { MessageService } from 'primeng/components/common/messageservice';
import { UserStateService } from './../core/userState.service';
import { CylinderOverviewService } from './../archive/cylinder/cylinder-overview/cylinder-overview.service';
import { CustomerOverviewService } from './../archive/customer/customer-overview/customer-overview.service';

@Component({
  selector: 'gas-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [CylinderOverviewService, CustomerOverviewService],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {

  constructor(private loginService: LoginService,
    private messageService: MessageService,
    private router: Router,
    private userStateService: UserStateService,
    private cylinderOverviewService: CylinderOverviewService,
    private customerOverviewService: CustomerOverviewService
  ) { }

  menus: MenuItem[];
  curTime: any;
  DateTime: any;
  sumCylinder: any = 0;
  sumUser: any = 0;
  countyCylinders: {
    name: string,
    totalCount: number,
    normalCount: number,
    expireCount: number,
    scrapCount: number,
    regionId: string,
    parentRegionId: string
  }[] = [];


  ngOnInit() {
    this.getCountiesOverview();
    this.getCountiesOverviewUser();
    this.menus = [
      {
        label: '首页',
        icon: 'menu-icon home-icon',
        routerLink: ['/home']
      },
      {
        label: '基础档案',
        icon: 'menu-icon archive-icon',
        routerLink: ['/archive'],
        items: [
          { label: '气瓶档案', routerLink: ['/archive/cylinder'] },
          { label: '用户档案', routerLink: ['/archive/customer'] },
          { label: '企业档案', routerLink: ['/archive/enterprise'] },
          { label: '车辆信息', routerLink: ['/archive/car'] },
          { label: '从业人员信息', routerLink: ['/archive/employee'] },
          { label: '视频图像', routerLink: ['/archive/media'] },
        ]
      },
      {
        label: '配送监管',
        icon: 'menu-icon distribution-icon',
        routerLink: ['/delivery'],
        items: [
          { label: '首页', routerLink: ['/delivery/dashboard'] },
        ]
      },
      {
        label: '监管事务',
        icon: 'menu-icon supervise-icon',
        routerLink: ['/gov-affairs'],
        items: [
          { label: '气瓶全过程监管追溯查询', routerLink: ['/gov-affairs/cylinder-trace'] }
        ]
      },
      {
        label: '可视化',
        icon: 'menu-icon visualization-icon',
        routerLink: ['/visualization']
      },
      {
        label: '统计查询',
        icon: 'menu-icon statistic-icon',
        routerLink: ['/statistic']
      },
      {
        label: '系统配置',
        icon: 'menu-icon system-icon',
        routerLink: ['/system'],
        items: [
          { label: '个人信息', routerLink: ['/system/user'] },
        ]
      },
      {
        label: '信息录入',
        icon: 'menu-icon input-icon',
        routerLink: ['/input']
      },
      {
        label: '审核管理',
        icon: 'menu-icon verification-icon',
        routerLink: ['/verification']
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

  getCountiesOverview() {
    const user = this.userStateService.getUser();
    if (user.organizationType === 1) {
      this.cylinderOverviewService
        .getCylinderEnterpriseOverviewByOrganizationId({
          organizationId: user.organizationId || ''
        }).then(data => {
          if (data.status === 0) {
            this.sumCylinder = this.calculateTotal('totalCount', data.data);
          } else {
            this.messageService.add({ severity: 'error', summary: '获取信息失败', detail: data.msg });
          }
        });
    } else {
      this.cylinderOverviewService
        .getCountiesOverview({
          areaID: user.regionId || ''
        }).then(data => {
          if (data.status === 0) {
            for (let i = 0; i < data.data.length; i++) {
              if (user.regionId === data.data[i].regionId) {
                this.sumCylinder = data.data[i].totalCount || 0;
                break;
              } else {
                this.sumCylinder += data.data[i].totalCount || 0;
              }
            }
          } else {
            this.messageService.add({ severity: 'error', summary: '获取信息失败', detail: data.msg });
          }
        });
    }
  }

  getCountiesOverviewUser() {
    const user = this.userStateService.getUser();
    if (user.organizationType === 1) {
      this.customerOverviewService
        .getEnterprisesOverviewByOrganizationId({
          organizationId: user.organizationId || ''
        }).then(data => {
          if (data.status === 0) {
            this.sumUser = this.calculateTotal('userCount', data.data);
          } else {
            this.messageService.add({ severity: 'error', summary: '获取信息失败', detail: data.msg });
          }
        });
    } else {
      this.customerOverviewService
        .getCountiesOverview({
          areaID: user.regionId || ''
        }).then(data => {
          if (data.status === 0) {
            for (let i = 0; i < data.data.length; i++) {
              if (user.regionId === data.data[i].regionId) {
                this.sumUser = data.data[i].userCount || 0;
                break;
              } else {
                this.sumUser += data.data[i].userCount || 0;
              }
            }
          } else {
            this.messageService.add({ severity: 'error', summary: '获取信息失败', detail: data.msg });
          }
        });
    }
  }

  calculateTotal(prop: string, data: any) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      sum += element[prop];
    }
    return sum;
  }
}

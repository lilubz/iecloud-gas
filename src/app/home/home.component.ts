import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { GovernmentMenus, EnterpriseMenus } from './../core/menus';
import { LoginService } from './../login/login.service';
import { MenuItem } from 'primeng/components/common/menuitem';
import { MessageService } from 'primeng/components/common/messageservice';
import { UserStateService } from './../core/userState.service';
import { CylinderOverviewService } from './../archive/cylinder/cylinder-overview/cylinder-overview.service';
import { CustomerOverviewService } from './../archive/customer/customer-overview/customer-overview.service';
import { UserType } from '../core/UserType';

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
  normalCylinder = 0;
  expireCylinder = 0;
  scrapCylinder = 0;
  sumUser = 0;
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

    if (this.userStateService.getUserRoleType() === UserType.Government) {
      this.menus = GovernmentMenus;
    } else if (this.userStateService.getUserRoleType() === UserType.Enterprise) {
      this.menus = EnterpriseMenus;
    }

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
            this.normalCylinder = data.data[0].normalCount || 0;
            this.expireCylinder = data.data[0].expireCount || 0;
            this.scrapCylinder = data.data[0].scrapCount || 0;
            this.sumCylinder += data.data[0].totalCount || 0;
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
            this.sumCylinder = this.calculateTotal('totalCount', data.data);
            this.normalCylinder = this.calculateTotal('normalCount', data.data);
            this.expireCylinder = this.calculateTotal('expireCount', data.data);
            this.scrapCylinder = this.calculateTotal('scrapCount', data.data);
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
            this.sumUser = data.data[0].userCountByEnterprise || 0;
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
            this.sumUser = this.calculateTotal('userCount', data.data);
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

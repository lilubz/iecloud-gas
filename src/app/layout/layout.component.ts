import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/components/common/menuitem';
import { MessageService } from 'primeng/components/common/messageservice';
import { GovernmentMenus, EnterpriseMenus } from './../common/menus';

import { LoginService } from './../login/login.service';
import { UserStateService } from './../core/userState.service';
import { OrganizationType } from './../common/OrganizationType';
import { LayoutService } from './layout.service';
@Component({
  selector: 'gas-layout',
  templateUrl: './layout.component.html',
  providers: [LayoutService]
})

export class LayoutComponent implements OnInit {
  menus: MenuItem[];

  constructor(
    private messageService: MessageService,
    private router: Router,
    private userStateService: UserStateService,
    private _service: LayoutService
  ) { }

  ngOnInit() {
    if (this.userStateService.getUserOrganizationType() === OrganizationType.Government) {
      this.menus = GovernmentMenus;
      // this.getWarningInfo(10 * 60 * 1000);
    } else if (this.userStateService.getUserOrganizationType() === OrganizationType.Enterprise) {
      this.menus = EnterpriseMenus;
    }
  }

  getWarningInfo(delay: number) {
    this._service.listGcThresholdCurrentWarning({
      boolIsFull: '2',
      liabilityTypeId: '',
      regionId: '',
      pageSize: 1,
      pageNumber: 1,
    })
      .then(data => {
        setTimeout(() => {
          this.getWarningInfo(delay);
        }, delay);
        const targetLabel = ['统计分析', '实时预警']; // 需要加报警图标的菜单
        let hasWarning = false;
        if (data.status === 0) {
          hasWarning = data.data.list.length > 0 ? true : false;
        }
        // 改变菜单中报警图标的显示与隐藏
        targetLabel.forEach(currentLabel => {
          function toggleClass(menus: Array<any>) {
            menus.forEach(menuItem => {
              if (menuItem.label === currentLabel) { // 当前的菜单是需要改变class的。
                menuItem.icon = menuItem.icon ? menuItem.icon : '';
                if (hasWarning) { // 后台有报警信息
                  if (menuItem.icon.indexOf('warning-icon') === -1) {
                    menuItem.icon += ' warning-icon';
                  }
                } else { // 后台没有报警信息
                  if (menuItem.icon.indexOf('warning-icon') !== -1) {
                    menuItem.icon = menuItem.icon.replace('warning-icon', '');
                  }
                }
              } else if (menuItem.items) { // 当前的菜单是不需要改变class的，向下找子菜单。
                toggleClass(menuItem.items);
              }
            });
          }
          toggleClass(this.menus);
        });
      });
  }
}

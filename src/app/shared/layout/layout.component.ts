import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/components/common/menuitem';
import { MessageService } from 'primeng/components/common/messageservice';
import { GovernmentMenus, EnterpriseMenus } from './../../core/menus';

import { LoginService } from './../../login/login.service';
import { UserStateService } from './../../core/userState.service';
import { RoleType } from '../../core/RoleType';
@Component({
  selector: 'gas-layout',
  templateUrl: './layout.component.html'
})

export class LayoutComponent implements OnInit {
  menus: MenuItem[];

  constructor(private messageService: MessageService, private loginService: LoginService, private router: Router,
    private userStateService: UserStateService) { }

  ngOnInit() {
    if (this.userStateService.getUserRoleType() === RoleType.Government) {
      this.menus = GovernmentMenus;
    } else if (this.userStateService.getUserRoleType() === RoleType.Enterprise) {
      this.menus = EnterpriseMenus;
    }
  }

  logout() {
    this.loginService.logout();
  }
}

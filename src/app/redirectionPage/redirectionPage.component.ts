import { Component, OnInit, OnDestroy, } from '@angular/core';
import { RedirectionPageService, } from './redirectionPage.service';
import { UserStateService } from '../core/userState.service';
import { Router } from '@angular/router';
import { OrganizationType } from '../common/OrganizationType';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'gas-redirectionPage',
  templateUrl: './redirectionPage.component.html',
  styleUrls: ['./redirectionPage.component.scss']
})
export class RedirectionPageComponent implements OnInit, OnDestroy {
  showGovernment: boolean = false;
  showEnterprise: boolean = false;
  constructor(
    private _service: RedirectionPageService,
    private userStateService: UserStateService,
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    if (this.userStateService.getUserOrganizationType() === OrganizationType.Enterprise) {
      this.showEnterprise = true;
      this.showGovernment = false;//企业账号
    } else if (this.userStateService.getUserOrganizationType() === OrganizationType.Government) {
      this.showEnterprise = false;
      this.showGovernment = true;//政府账号
    }
  }
  logout() {
    this.loginService.logout();
  }

  ngOnDestroy() {
  }
}

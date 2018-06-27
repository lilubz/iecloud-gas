import { LoginService } from './../../login/login.service';
import { Component, OnInit } from '@angular/core';
import { RoleType } from './../../common/RoleType';

@Component({
  selector: 'gas-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  RoleType = RoleType;
  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
  }
}

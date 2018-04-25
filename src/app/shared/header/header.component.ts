import { LoginService } from './../../login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gas-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
  }
}

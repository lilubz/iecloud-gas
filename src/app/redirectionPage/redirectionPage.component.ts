import { Component, OnInit, OnDestroy, Renderer2, ViewChild, ElementRef, } from '@angular/core';
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
  resizeListener: any;
  @ViewChild('redirection') redirectionElem: ElementRef;
  @ViewChild('container') containerElem: ElementRef;
  constructor(
    private _service: RedirectionPageService,
    private userStateService: UserStateService,
    private router: Router,
    private loginService: LoginService,
    private renderer: Renderer2,
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
  ngAfterViewInit() {
    this.resizeListener = this.renderer.listen('window', 'resize', (event => {
      this.setScreen();
    }));

    this.setScreen();
  }
  // 设置默认屏幕缩放比例，以及偏移量
  setScreen() {
    const height = this.redirectionElem.nativeElement ? (this.redirectionElem.nativeElement.clientHeight / 1080) : null;
    
    this.renderer.setStyle(this.containerElem.nativeElement, 'transform', `scale(${height})`);
    this.renderer.setStyle(this.containerElem.nativeElement, '-ms-transform', `scale(${height})`);
    const marginLeft = -((1920 * height) - (document.body.clientWidth - 110)) / 2;
    this.renderer.setStyle(this.containerElem.nativeElement, 'margin-left', `${marginLeft}px`);
  }
  logout() {
    this.loginService.logout();
  }

  ngOnDestroy() {
    this.resizeListener();
  }
}

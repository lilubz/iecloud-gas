import { Component, OnInit, OnDestroy, Renderer2, ViewChild, ElementRef, } from '@angular/core';
import { RedirectionPageService, } from './redirectionPage.service';
import { UserStateService } from '../core/userState.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { OrganizationType } from '../common/OrganizationType';
import { LoginService } from '../login/login.service';
import { CommonRequestService } from '../core/common-request.service';
import { RoleType } from '../common/RoleType';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'gas-redirectionPage',
  templateUrl: './redirectionPage.component.html',
  styleUrls: ['./redirectionPage.component.scss']
})
export class RedirectionPageComponent implements OnInit, OnDestroy {
  Admin: boolean;
  unable: boolean;
  @ViewChild('redirection') redirectionElem: ElementRef;
  @ViewChild('container') containerElem: ElementRef;
  dropdown: any = {
    region: [],
    default: [
      {
        label: '全部',
        value: '',
      }
    ],
    objValue: [
      {
        label: '气瓶条码',
        value: '1',
        placeholder: '请输入8-11位气瓶条码',
      },
      {
        label: '燃气用户',
        value: '2',
        placeholder: '请输入用户姓名或手机号'
      },
      {
        label: '储配站',
        value: '3',
        placeholder: '请输入储备站名称'
      },
      {
        label: '供应站',
        value: '4',
        placeholder: '请输入供应站名称'
      },
      {
        label: '企业',
        value: '5',
        placeholder: '请输入企业名称'
      },
      {
        label: '送气工',
        value: '6',
        placeholder: '请输入送气工证件编号或姓名'
      },
    ],
  };
  objValue;
  Region;
  searchValue: string;
  constructor(
    private _service: RedirectionPageService,
    private userStateService: UserStateService,
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private renderer: Renderer2,
    private commonRequestService: CommonRequestService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.objValue = this.dropdown.objValue[0];
    if (this.userStateService.getUserRoleType() === RoleType.Admin) {
      this.Admin = true; //admin权限
      this.unable = false;
    } else if (this.userStateService.getUserRoleType() === RoleType.Government) {
      this.Admin = false;//非admin
    } else {
      this.unable = true;
    }
    // this.getDropdownRegion();
  }
  getDropdownRegion() {
    this.commonRequestService.getRegions().then(data => {
      if (data.status === 0) {
        if (this.Admin) {
          this.dropdown.region = this.dropdown.default.concat(data.data.map(item => ({
            label: item.regionName,
            value: item.regionId
          })));
          this.Region = this.dropdown.region[0];
        } else {
          this.dropdown.region = this.dropdown.region.concat(data.data.map(item => ({
            label: item.regionName,
            value: item.regionId
          })));
          this.Region = this.dropdown.region[0];
        }
      } else {
        this.dropdown.region = this.dropdown.default.concat([]);
      }
    });
  }
  onChangeObj(event) {
    this.searchValue = '';
    this.objValue = this.dropdown.objValue.find(item => item.value == event.value);
  }
  onChangeRegion(event) {
    this.Region = this.dropdown.region.find(item => item.value == event.value);

  }
  /**
   *跳转区域
   *
   * @memberof RedirectionPageComponent
   */
  searchRegion() {

    const queryParams = {
      'regionId': this.Region ? this.Region.value : ''
    }
    if (queryParams.regionId === '') {
      this.router.navigate(['/statistic/search-overview/city-overview']);
    } else {
      this.router.navigate(['/statistic/search-overview/partition-overview'], { relativeTo: this.route, queryParams });
    }
  }
  /**
   *对象跳转
   *
   * @memberof RedirectionPageComponent
   */
  searchObj() {
    this.returnPH(this.objValue.value)
  }
  returnPH(data) {
    const queryParams = {};
    switch (data) {
      case '1':
        if (!/^\d{8,11}$/.test(this.searchValue)) {
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: '请输入8-11为数字' });
          this.searchValue = '';
          return false;
        }
        queryParams['cylinderCode'] = this.searchValue;
        this.router.navigate(['/archive/cylinder/list'], { relativeTo: this.route, queryParams });
        break;
      case '2':
        // 正则判断是否是姓名还是手机号并跳转
        if (/^[\u4E00-\u9FA5]+$/.test(this.searchValue)) { // 验证是否全为汉字
          if (!/^[\u4E00-\u9FA5]{2,}$/.test(this.searchValue)) { // 验证至少2个汉字
            this.messageService.add({ severity: 'warn', summary: '响应消息', detail: '姓名至少两位全中文字符或,8位或11位手机号' });
            // this.searchValue = '';
            return false;
          }
          queryParams['userName'] = this.searchValue;
          this.router.navigate(['/archive/customer/list'], { relativeTo: this.route, queryParams });
        } else {
          if (!/^(\d{8}|\d{11})$/.test(this.searchValue)) {
            this.messageService.add({ severity: 'warn', summary: '响应消息', detail: '姓名至少两位中文字符或,8位或11位手机号' });
            this.searchValue = '';
            return false;
          }
          queryParams['phoneNumber'] = this.searchValue;
          this.router.navigate(['/archive/customer/list'], { relativeTo: this.route, queryParams });
        }
        break;
      case '3':
        if (!/^[\u4E00-\u9FA5]{2,}$/.test(this.searchValue)) { // 验证至少2个汉字
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: '储配站名称全中文字符至少两位' });
          // this.searchValue = '';
          return false;
        }
        queryParams['supplyName'] = this.searchValue;
        this.router.navigate(['/archive/gasHolderStation/list'], { relativeTo: this.route, queryParams });
        break;
      case '4':
        if (!/^[\u4E00-\u9FA5]{2,}$/.test(this.searchValue)) { // 验证至少2个汉字
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: '供应站名称全中文字符至少两位' });
          // this.searchValue = '';
          return false;
        }
        queryParams['supplyName'] = this.searchValue;
        this.router.navigate(['/archive/supplyStation/list'], { relativeTo: this.route, queryParams });
        break;
      case '5':
        if (!/^[\u4E00-\u9FA5]{2,}$/.test(this.searchValue)) { // 验证至少2个汉字
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: '企业名称全中文字符至少两位' });
          // this.searchValue = '';
          return false;
        }
        queryParams['enterpriseName'] = this.searchValue;
        this.router.navigate(['/archive/enterprise/list'], { relativeTo: this.route, queryParams });
        break;
      case '6':
        if (/^[\u4E00-\u9FA5]+$/.test(this.searchValue)) { // 验证是否全为汉字
          if (!/^[\u4E00-\u9FA5]{2,}$/.test(this.searchValue)) { // 验证至少2个汉字
            this.messageService.add({ severity: 'warn', summary: '响应消息', detail: '送气工证号（字母+数字），或姓名（至少两位中文字符，全模糊）' });
            // this.searchValue = '';
            return false;
          }
          queryParams['employee'] = this.searchValue;
          this.router.navigate(['//archive/employee/list'], { relativeTo: this.route, queryParams });
        } else {
          if (!/^[a-zA-Z0-9]+$/.test(this.searchValue)) {
            this.messageService.add({ severity: 'warn', summary: '响应消息', detail: '送气工证号（字母+数字），或姓名（至少两位中文字符，全模糊）' });
            this.searchValue = '';
            return false;
          }
          queryParams['idNumber'] = this.searchValue;
          this.router.navigate(['/archive/employee/list'], { relativeTo: this.route, queryParams });
        }
        break;

      default:
        break;
    }
  }
  logout() {
    this.loginService.logout();
  }

  ngOnDestroy() {
  }
}

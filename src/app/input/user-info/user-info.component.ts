import { DashboardService } from './../../delivery/dashboard/dashboard.service';
import { API } from './../../common/api';
import { Component, OnInit, AfterViewInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { UserInfoService } from './user-info.service';
import { CommonRequestService } from './../../core/common-request.service';
import { Customer } from './Customer.model';
import { zh_CN } from './../../common/date-localization';
import { UserStateService } from './../../core/userState.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Message } from 'primeng/components/common/api';
import * as moment from 'moment';
import { User } from '../../common/User.model';
import { Util } from '../../core/util';

@Component({
  selector: 'gas-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  @ViewChild('OtherImageUpload') OtherImageUpload: ElementRef;
  zh = zh_CN;
  importGcUserInfoUrl = API.importGcUserInfo;

  // 证件类型
  IDTypes: SelectItem[] = [
    { label: '身份证', value: '身份证' },
    { label: '营业执照', value: '营业执照' }
  ];

  // 客户类型
  customerTypes: SelectItem[] = [];

  // 客户信息
  customer: Customer = new Customer();

  // 管理员信息
  user: User;

  // 提示消息
  msgs: Message[] = [];

  dispatcherList: SelectItem[] = [{ label: '--请选择--', value: '' }];
  certificateAddress = ''; // 证件地址
  certificateDetailAddress = ''; // 证件详细地址
  deliveryRegionId; // 配送区域id
  constractBeginTime: Date;
  constractEndTime: Date;
  constructor(
    private util: Util,
    private userStateService: UserStateService,
    private userInfoService: UserInfoService,
    private route: ActivatedRoute,
    private commonRequestService: CommonRequestService,
  ) {
    this.user = this.userStateService.getUser();
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: any) => {
        this.customerTypes = data.userType.map(element => ({ label: element.name, value: element.userTypeId }));
        this.customer.userTypeId = this.customerTypes[0].value;
        this.selectCustomerType();
      });

    this.getDispatcher();
  }

  formInit() {
    this.customer = new Customer();
    this.customer.userTypeId = this.customerTypes[0].value;
    this.certificateAddress = '';
    this.certificateDetailAddress = '';
    this.deliveryRegionId = '';
    this.constractBeginTime = null;
    this.constractEndTime = null;
  }

  selectCustomerType() {
    this.customer.certificateName = this.customer.userTypeId === this.customerTypes[0].value ? '身份证' : '营业执照';
  }

  save(IDImageUpload: any) {
    this.customer.gcCorpUserName = this.customer.userName; // 企业用户名称等于输入的用户名
    this.customer.identity = IDImageUpload.files;
    this.customer.others = this.OtherImageUpload.nativeElement.files[0] || '';
    this.customer.certificateAddress = this.certificateAddress + this.certificateDetailAddress;
    this.customer.deliveryRegionId = this.deliveryRegionId;
    if (this.checkForm()) {
      const formData = new FormData();
      for (const key in this.customer) {
        if (key) {
          if (key === 'identity') {
            for (const file of this.customer[key]) {
              formData.append(key, file);
            }
          } else {
            formData.append(key, this.customer[key]);
          }
        }
      }
      // console.log(formData)
      this.userInfoService.addCustomer(formData).then((data) => {
        if (data.status === 0) {
          this.showMessage('success', '保存成功', data.msg);
          this.formInit();
          IDImageUpload.clear();
          this.OtherImageUpload.nativeElement.value = null;
        } else {
          this.showMessage('warn', '保存失败', data.msg);
        }
      }).catch((error) => {

      });
    } else {

    }
  }

  checkForm(): boolean {
    if (!this.customer.userName) {
      this.showMessage('warn', '', '请填写客户姓名！');
      return false;
    } else if (!this.customer.principal) {
      this.showMessage('warn', '', '请填写姓名！');
      return false;
    } else if (!this.customer.certificateId) {
      this.showMessage('warn', '', '请填写证件号码！');
      return false;
    } else if (!this.certificateAddress || !this.certificateDetailAddress) {
      this.showMessage('warn', '', '请填写完整的证件地址信息！');
      return false;
    } else if (!this.customer.deliveryAddress || !this.deliveryRegionId) {
      this.showMessage('warn', '', '请填写完整的居住地址信息！');
      return false;
    } else if (!this.customer.phone) {
      this.showMessage('warn', '', '请填写联系电话！');
      return false;
    } else if (this.customer.identity.length === 0) {
      this.showMessage('warn', '', '请选择证件图片！');
      return false;
    } else if (this.customer.identity.length > 2) {
      this.showMessage('warn', '', '证件信息最多上传两张图片！');
      return false;
    }

    if (this.customer.userTypeId.toString() !== '0') {
      if (this.customer.enterpriseOrganizationCode === '') {
        this.showMessage('warn', '', '请填写营业执照！');
        return false;
      } else if (this.customer.address === '') {
        this.showMessage('warn', '', '请填写注册地址！');
        return false;
      } else if (this.customer.legalRepresentative === '') {
        this.showMessage('warn', '', '请填写法定代表人！');
        return false;
      }
    }
    return true;
  }
  selectIDAddress(event) {
    this.certificateAddress = event.province.name + event.city.name + event.county.name;
  }

  selectConstractBeginDate(event) {
    this.customer.contractEffectiveDate = this.util.formatTime(event, 'start');
  }

  selectConstractEndDate(event) {
    this.customer.contractDeadline = this.util.formatTime(event, 'end');
  }

  clearBeginDate(event) {
    this.customer.contractEffectiveDate = '';
  }

  clearEndDate(event) {
    this.customer.contractDeadline = '';
  }

  showMessage(type, title, msg) {
    this.msgs.push({
      severity: type,
      summary: title,
      detail: msg
    });
    setTimeout(() => this.msgs.shift(), 2000);
  }

  uploadCustomerFile(event) {
    if (JSON.parse(event.xhr.responseText).status === 0) {
      this.showMessage('success', '上传成功', '');
    } else {
      this.showMessage('warn', '上传失败', JSON.parse(event.xhr.responseText).msg);
    }
  }

  getDispatcher(regionId?) {
    this.commonRequestService.getDispatchers().then(data => {
      if (data.status === 0) {
        this.dispatcherList = data.data.map(item => ({ label: item.dispatcherName, value: item.dispatcherNumber }));
        this.dispatcherList.unshift({ label: '--请选择--', value: '' });
      } else {
        this.dispatcherList = [{ label: '--请选择--', value: '' }];
        this.showMessage('warn', '获取配送员信息失败', data.msg);
      }
    }).catch(error => {
      this.showMessage('error', '', error);
    });
  }
}

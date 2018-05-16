import { Component, OnInit, OnDestroy, } from '@angular/core';
import { AccountOpeningService, } from './account-opening.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { validator } from './validator';
import { MessageService } from 'primeng/components/common/messageservice';
import { SelectItem } from 'primeng/components/common/selectitem';
import { UserStateService } from '../../../core/userState.service';
 @Component({
  selector: 'gas-account-opening',
  templateUrl: './account-opening.component.html',
  styleUrls: ['./account-opening.component.scss']
})
export class AccountOpeningComponent implements OnInit, OnDestroy {
  formModel = this.fb.group({
    realname: ['', [validator.realname]],
    username: ['', [validator.username]],
    passwords: this.fb.group({
      password: ['', validator.password],
      passwordConfirm: ['']
    }, { validator: validator.passwords }),
    certificateName: ['', [validator.certificateName]],
    certificateId: ['', [validator.certificateId]],
    enterpriseNumber: ['', [validator.enterpriseNumber]],
    isfreezed: ['', [validator.isfreezed]],
    gender: [''],
  });
  category: SelectItem[] = [  // 证件类别
    {
      label: '请选择',
      value: ''
    },
    {
      label: '身份证',
      value: '身份证'
    },
  ];
  enterpriseDrop: SelectItem[] = [
    {
      label: '请选择',
      value: ''
    },
  ]; // 企业下拉框

  legalRepresentative = '';
  enterpriseName = '';
  enterpriseNumber = '';
  userName = '';
  phoneNumber = '';
  password = '';
  confirmPassword = '';

  constructor(
    private _service: AccountOpeningService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getEnterprise();
    const queryParams = this.route.queryParams['value'];
    this.legalRepresentative = queryParams.legalRepresentative;
    this.enterpriseName = queryParams.enterpriseName;
    this.userName = queryParams.enterpriseName;
    this.phoneNumber = queryParams.phoneNumber === 'null' ? '' : queryParams.phoneNumber;
    this.enterpriseNumber = queryParams.enterpriseNumber;
  }
  addEnterpriseUser() {
    if (this.checkForm()) {
      this._service.addEnterpriseUser({
        username: this.userName,
        password: this.password,
        enterpriseNumber: this.enterpriseNumber,
        legalRepresentative: this.legalRepresentative,
        phoneNumber: this.phoneNumber,


      }).then(data => {
        if (data.status === 0) {
          this.messageService.add({ severity: 'success', summary: '提示信息', detail: data.msg });
        } else {
          this.messageService.add({ severity: 'warn', summary: '提示信息', detail: data.msg });
        }
      });
    }
  }
  checkForm() {
    if (!this.userName.trim()) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '用户名不能为空' });
      return false;
    } else if (!(this.password.length >= 6 && this.password.length <= 16)) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '密码长度为6-16位' });
      return false;
    } else if (this.password !== this.confirmPassword) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '密码和确认密码不一致' });
      return false;
    }
    return true;
  }
  getEnterprise() {  // 获取企业列表
    this._service.getEnterpriseList({ regionId: '' }).then(data => {
      if (data.status === 0) {
        const list = data.data.map((item) => {
          return {
            label: item.enterpriseName,
            value: item.enterpriseNumber
          };
        });
        this.enterpriseDrop = this.enterpriseDrop.concat(list);
      } else {
        this.messageService.add({ severity: 'warn', summary: '提示信息', detail: data.msg });
      }

    }).catch(error => {
      this.messageService.add({ severity: 'error', summary: '服务器错误,错误码:', detail: error.status });
    });
  }
  reset() {
    this.password = '';
    this.confirmPassword = '';
    this.userName = '';
  }

  ngOnDestroy() {
  }
}

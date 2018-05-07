import { Component, OnInit, OnDestroy, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { validator } from '../../enterprise-management/account-opening/validator';
import { MessageService } from 'primeng/components/common/messageservice';
import { SelectItem } from 'primeng/components/common/selectitem';
import { UserStateService } from '../../../core/userState.service';
import { BottleLibraryService } from '../bottle-library.service';
import { AccountOpeningService } from '../../enterprise-management/account-opening/account-opening.service';
@Component({
  selector: 'gas-bottle-open',
  templateUrl: './bottle-open.component.html',
  styleUrls: ['./bottle-open.component.scss']
})
export class BottleOpenComponent implements OnInit, OnDestroy {
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
  legalRepresentative = '';
  enterpriseName = '';
  enterpriseNumber = '';
  supplyStationName = '';
  userName = '';
  phoneNumber = '';
  password = '';
  confirmPassword = '';
  supplyStationNumber = '';
  constructor(
    private _service: BottleLibraryService,
    private accountOpeningService: AccountOpeningService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const queryParams = this.route.queryParams['value'];
    this.legalRepresentative = queryParams.legalRepresentative;
    this.enterpriseName = queryParams.enterpriseName === 'null' ? '' : queryParams.enterpriseName;
    this.userName = queryParams.supplyStationName;
    this.phoneNumber = queryParams.phoneNumber === 'null' ? '' : queryParams.phoneNumber;
    this.enterpriseNumber = queryParams.enterpriseNumber;
    this.supplyStationName = queryParams.supplyStationName;
    this.supplyStationNumber = queryParams.supplyStationNumber;
  }
  addEnterpriseUser() {
    if (this.checkForm()) {
      this._service.createAccount({
        username: this.userName,
        password: this.password,
        legalRepresentative: this.legalRepresentative,
        phoneNumber: this.phoneNumber,
        enterpriseNumber: this.enterpriseNumber === 'null' ? '' : this.enterpriseNumber,
        supplyStationNumber: this.supplyStationNumber,
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

  reset() {
    this.password = '';
    this.confirmPassword = '';
    this.userName = '';
  }

  ngOnDestroy() {
  }
}


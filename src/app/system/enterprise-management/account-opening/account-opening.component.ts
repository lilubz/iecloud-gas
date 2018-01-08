import { Component, OnInit, OnDestroy, } from '@angular/core';
import { AccountOpeningService, } from './account-opening.service';
import { FormBuilder, Validators } from '@angular/forms';
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
    gender: [''],
    isfreezed: ['', [validator.isfreezed]],
    enterpriseNumber: ['', [validator.enterpriseNumber]],
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


  constructor(private _service: AccountOpeningService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private userStateService: UserStateService, ) { }

  ngOnInit() {
    this.getEnterprise();
  }
  addEnterpriseUser() {
    if (this.formModel.valid) { // 通过了验证
      console.log(this.formModel.value);
      const formData = new FormData();
      for (const key in this.formModel.value) {
        if (key) {
          if (key === 'passwords') {
            // formData.append(key, '');
            for (const key1 in this.formModel.value[key]) {
              if (key1 === 'password') {
                formData.append(key1, this.formModel.value[key][key1]);
              } else {

              }
            }
          } else {
            formData.append(key, this.formModel.value[key]);
          }
        }
      }
      this._service.addEnterpriseUser(formData).then(data => {
        if (data.status === 0) {
          this.messageService.add({ severity: 'success', summary: '提示信息', detail: data.msg });
        } else {
          this.messageService.add({ severity: 'warn', summary: '提示信息', detail: data.msg });
        }
      }).catch(error => {
        this.messageService.add({ severity: 'error', summary: '服务器错误,错误码:', detail: error.status });
      });
    } else { // 没有通过验证
      for (const key in this.formModel.controls) {
        if (this.formModel.controls[key].errors) {
          const msg = this.formModel.controls[key].errors.msg;
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: msg });
          return;
        }
      }
    }
  }
  getEnterprise() {  // 获取企业列表
    const user = this.userStateService.getUser();
    this._service.getEnterpriseList({ regionId: user.regionId }).then(data => {
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

  ngOnDestroy() {
  }
}

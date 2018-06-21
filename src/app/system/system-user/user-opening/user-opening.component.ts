import { Component, OnInit, OnDestroy, } from '@angular/core';
import { UserOpeningService, } from './user-opening.service';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';
import { validator } from './userValidator';


@Component({
  selector: 'gas-user-opening',
  templateUrl: './user-opening.component.html',
  styleUrls: ['./user-opening.component.scss']
})
export class UserOpeningComponent implements OnInit, OnDestroy {
  formModel = this.fb.group({
    organization: ['', validator.organization],
    role: ['', validator.role],
    username: ['', validator.username],
    passwords: this.fb.group({
      password: ['', validator.password],
      passwordConfirm: ['']
    }, { validator: validator.passwords }),
    realname: ['', validator.realname],
    phone: ['', validator.phone],
  });
  dropdown = {
    organization: [
      {
        label: '全部',
        value: ''
      }
    ],
    role: [
      {
        label: '全部',
        value: ''
      }
    ],
    default: [
      {
        label: '全部',
        value: ''
      }
    ],
  };
  constructor(
    private _service: UserOpeningService,
    private fb: FormBuilder,
    private messageService: MessageService, ) { }

  ngOnInit() {
    this.getGovOrganzationsDrop();
  }
  getGovOrganzationsDrop() {
    this._service.getGovOrganzations({}).then(data => {
      if (data.status === 0) {
        this.dropdown.organization = this.dropdown.organization.concat(data.data.map((item) => ({
          label: item.name,
          value: item.organizationId
        })));
      } else {
        this.dropdown.organization = this.dropdown.default;
        this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
      }
    });
  }
  onChangeOrganzation(event) {
    this.dropdown.role = this.dropdown.default;
    this.formModel.patchValue({
      role: ''
    });
    if (!event.value) {
      this.dropdown.role = this.dropdown.default;
      this.formModel.patchValue({
        role: ''
      });
    } else {
      this.getRolesDrop(event.value);
    }

  }
  getRolesDrop(param) {
    this._service.getRoles({ organizationid: param }).then(data => {
      if (data.status === 0) {
        this.dropdown.role = this.dropdown.role.concat(data.data.map((item) => ({
          label: item.name,
          value: item.roleId
        })));
      } else {
        this.dropdown.role = this.dropdown.default;
        this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
      }
    });
  }
  addSystemUser() {
    if (this.formModel.valid) {
      const formModel = {
        roleId: this.formModel.value['role'],
        username: this.formModel.value['username'],
        password: this.formModel.value['passwords']['password'],
        realname: this.formModel.value['realname'],
        phone: this.formModel.value['phone'],
      }
      this._service.addUser(formModel).then(data => {
        if (data.status === 0) {
          this.messageService.add({ severity: 'success', summary: '响应消息', detail: data.msg });
        } else {
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
    } else {
      for (const key in this.formModel.controls) {
        if (this.formModel.controls[key].errors) {
          const msg = this.formModel.controls[key].errors.msg;
          this.messageService.add({ severity: 'warn', summary: '提示消息', detail: msg });
          return;
        }
      }
    }

  }
  reset() {
    this.formModel.reset();
  }
  ngOnDestroy() {
  }
}

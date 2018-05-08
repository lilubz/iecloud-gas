import { OrganizationType } from './../../common/OrganizationType';
import { MessageService } from 'primeng/components/common/messageservice';
import { UserService } from './user.service';
import { UserStateService } from './../../core/userState.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../common/User.model';

@Component({
  selector: 'gas-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User;
  OrganizationType = OrganizationType;
  organizationType: OrganizationType;
  updatePasswordForm: {
    oldPassword: string,
    newPassword: string,
    confirmNewPassword: string
  } = {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    };
  updatePwdDialogVisiable = false;

  constructor(
    private userStateService: UserStateService,
    private messageService: MessageService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = this.userStateService.getUser();
    this.organizationType = this.userStateService.getUserOrganizationType();
  }

  updatePassword() {
    if (this.updatePasswordForm.oldPassword === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请输入原密码' });
      return false;
    } else if (this.updatePasswordForm.newPassword === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请输入新密码' });
      return false;
    } else if (this.updatePasswordForm.newPassword.length < 6) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '密码长度至少为六位' });
      return false;
    } else if (this.updatePasswordForm.confirmNewPassword === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请输入确认密码' });
      return false;
    } else if (this.updatePasswordForm.confirmNewPassword !== this.updatePasswordForm.newPassword) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请确认您输入的密码是否一致！' });
      return false;
    }

    this.userService.updatePassword({
      oldPassword: this.updatePasswordForm.oldPassword,
      newPassword: this.updatePasswordForm.newPassword
    }).then(data => {
      if (data.status === 0) {
        this.messageService.add({ severity: 'success', summary: '', detail: '密码修改成功' });
        this.updatePwdDialogVisiable = false;
      } else {
        this.messageService.add({ severity: 'warn', summary: '密码修改失败', detail: data.msg });
      }
    });
  }

  showUpdatePwdDialog() {
    this.updatePwdDialogVisiable = true;
    this.updatePasswordForm = {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    };
  }
}

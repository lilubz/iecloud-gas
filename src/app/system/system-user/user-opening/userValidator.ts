import { AbstractControl } from '@angular/forms';

export const validator = {
  phone(control: AbstractControl) {
    const error = { msg: '' };
    const value = control.value;
    const regexp = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|17[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    if (!value) {

    } else if (!regexp.test(value)){
      error.msg = '您输入的手机号码不正确！';
      return error;
    }
    return null;
  },

  password(control: AbstractControl) {
    const error = { msg: '' };
    const value = control.value;
    if (!value) {
      error.msg = '密码不能为空';
      return error;
    } else if (value && value.length < 6) {
      error.msg = '密码不能小于6位';
      return error;
    } else if (value && value.length > 16) {
      error.msg = '密码不能大于16位';
      return error;
    }
    return null;
  },

  passwords(controlGroup: AbstractControl) {
    const error = { msg: '' },
      password = controlGroup.get('password'),
      passwoedConfirm = controlGroup.get('passwordConfirm');
    if (!password.valid) {
      return password.errors;
    } else if (password.value !== passwoedConfirm.value) {
      error.msg = '前后输入的密码不一致';
      return error;
    }
    return null;
  },
  username(control: AbstractControl) {
    const error = { msg: '' };
    const value = control.value;
    if (!value) {
      error.msg = '用户名不能为空';
      return error;
    } else if (value.length > 30) {
      error.msg = '用户名长度不能大于30位';
      return error;
    }
    return null;
  },
  realname(control: AbstractControl) {
    const error = { msg: '' };
    const value = control.value;
    if (value.length > 10) {
      error.msg = '姓名不能大于10位';
      return error;
    }
    return null;
  },

  certificateName(control: AbstractControl) {
    const error = { msg: '' };
    const value = control.value;
    if (!value) {
      error.msg = '证件类型不能为空';
      return error;
    }
    return null;
  },
  organization(control: AbstractControl) {
    const error = { msg: '' };
    const value = control.value;
    if (!value) {
      error.msg = '请选择组织';
      return error;
    }
    return null;
  },
  role(control: AbstractControl) {
    const error = { msg: '' };
    const value = control.value;
    if (!value) {
      error.msg = '请选择角色名';
      return error;
    }
    return null;
  }

};

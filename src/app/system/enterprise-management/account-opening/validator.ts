import { AbstractControl } from '@angular/forms';

export const validator = {
  phone(control: AbstractControl) {
    const error = { msg: '' };
    const value = control.value;
    const regexp = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|17[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    if (!regexp.test(value)) {
      error.msg = '您输入的手机号码不正确！';
      return error;
    }
    return null;
  },

  password(control: AbstractControl) {
    const error = { msg: '' };
    const value = control.value;
    // console.log(typeof value);
    const regexp = /^\d{6}$/;
    if (!value) {
      error.msg = '密码不能为空';
      return error;
    } else if (value && value.length < 6) {
      error.msg = '密码不能小于6位';
      return error;
    } else if (regexp.test(value)) {
      error.msg = '密码不能为6位纯数字';
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
      error.msg = '两次输入的密码不一样';
      return error;
    }
    return null;
  },

  idNumber(control: AbstractControl) {
    const error = { msg: '' };
    const value = control.value;
    const regexp18 = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    const regexp15 = /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/;
    if (value !== '' && (!regexp18.test(value) || !regexp15.test(value))) {
      error.msg = '您输入的不是15位或18位的身份证号码！';
      return error;
    }
    return null;
  },
  realname(control: AbstractControl) {
    const error = { msg: '' };
    const value = control.value;
    if (!value) {
      error.msg = '姓名不能为空';
      return error;
    } else if (value.length > 10) {
      error.msg = '姓名不能大于10位';
      return error;
    }
    return null;
  },
  username(control: AbstractControl) {
    const error = { msg: '' };
    const value = control.value;
    if (!value) {
      error.msg = '登陆名长度不能为空';
      return error;
    } else if (value.length > 30) {
      error.msg = '登陆名长度不能大于30位';
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
  certificateId(control: AbstractControl) {
    const error = { msg: '' };
    const value = control.value;
    if (!value) {
      error.msg = '证件编号不能为空';
      return error;
    }
    return null;
  },
  isfreezed(control: AbstractControl) {
    const error = { msg: '' };
    const value = control.value;
    if (!value) {
      error.msg = '是否启用未选择';
      return error;
    }
    return null;
  },
  enterpriseNumber(control: AbstractControl) {
    const error = { msg: '' };
    const value = control.value;
    if (!value) {
      error.msg = '用户所属企业未选择';
      return error;
    }
    return null;
  },

};

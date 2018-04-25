import { AbstractControl } from '@angular/forms';

export const validator = {
  phone(control: AbstractControl) {
    const error = { msg: '' };
    const value = control.value;
    const regexp = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|17[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    if (value !== '' && !regexp.test(value)) {
      error.msg = '您输入的手机号码不正确！';
      return error;
    }
    return null;
  },

  idNumber(control: AbstractControl) {
    const error = { msg: '' };
    const value = control.value;
    const regexp = /^[1-9]{1}\d{16}[0-9Xx]$|^[1-9]{1}\d{14}$/;
    if (value !== '' && !regexp.test(value)) {
      error.msg = '您输入的不是15位或18位的身份证号码！';
      return error;
    }
    return null;
  },

  required(type?) {
    return (control: AbstractControl) => {
      const error = { msg: '' };
      const value = control.value;
      if (value === '') {
        error.msg = `${type}是必填项，不能输入空值！`;
        return error;
      }
      return null;
    };
  },

  minLength(length: number, type?: string) {
    return (control: AbstractControl) => {
      const error = { msg: '' };
      const value = control.value;
      const reg = /\s/g; // 空格不计数
      const realityLen = value.replace(reg, '').length;
      if (realityLen !== 0 && realityLen < length) {
        error.msg = `${type || ''}最少输入${length}个有效字符`;
        return error;
      }
      return null;
    };
  }
};

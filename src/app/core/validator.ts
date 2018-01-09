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
    const regexp18 = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    const regexp15 = /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/;
    if (value !== '' && !regexp18.test(value) && !regexp15.test(value)) {
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
  }
};

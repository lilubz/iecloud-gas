import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

/**
 * 基于moment.js的日期格式化组件。默认格式：YYYY-MM-DD HH:mm:ss。
 * 2018-01-31 11:30:51
 * @author hzb
 * @export
 * @class DateFormat
 * @implements {PipeTransform}
 */
@Pipe({ name: 'DateFormat' })
export class DateFormat implements PipeTransform {
  transform(value: number, exponent: string): string {
    if (value) {
      return moment(value).format(exponent || 'YYYY-MM-DD HH:mm:ss');
    } else {
      return '';
    }
  }
}

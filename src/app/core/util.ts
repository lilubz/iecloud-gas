import { Injectable } from '@angular/core';

/**
 * 工具类--提供常用方法
 * 2018-01-24 11:03:03
 * @author hzb
 * @export
 * @class Util
 */
@Injectable()
export class Util {

  /**
   * 计算对象数组中某属性值之和
   * 2018-01-24 10:52:08
   * @author hzb
   * @param {string} prop
   * @param {Object[]} data
   * @returns
   * @memberof UtilService
   */
  calculateTotal(prop: string, data: Object[]) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      sum += element[prop];
    }
    return sum;
  }
}

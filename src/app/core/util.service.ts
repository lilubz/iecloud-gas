

import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  // TODO:这里可能会有性能问题，因为首次加载会执行20次（4次调用*5列），再次点击会执行10次
  calculateTotal(prop: string, data: Object[]) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      sum += element[prop];
    }
    return sum;
  }
}

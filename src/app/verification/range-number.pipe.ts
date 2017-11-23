import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rangeNumber'
})
export class RangeNumberPipe implements PipeTransform {

  transform(value: Array<{
    startNumber: string,
    endNumber: string
  }>, args?: any): string {
    let str = '';
    if (value.length === 0) {
      return str;
    } else {
      for (let i = 0; i < value.length; i++) {
        str += '[' + value[i].startNumber + '-' + value[i].endNumber + ']';
      }
    }
    return str;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rangeNumber'
})
export class RangeNumberPipe implements PipeTransform {

  transform(value: Array<{startNumber: string, endNumber: string}>): string {
    let str = '';
    for (let i = 0; i < value.length; i++) {
      str += '[' + value[i].startNumber + '-' + value[i].endNumber + ']';
    }
    return str;
  }
}

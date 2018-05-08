import { Directive, HostListener, Input, HostBinding, ElementRef } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[gasInputFilter]'
})
export class InputFilterDirective {
  @Input('gasInputFilter') filter: string;
  private regEx: RegExp;
  private previousValue: string;

  constructor(private element: ElementRef, private ngModel: NgModel) {
    this.previousValue = '';
  }

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    if (!this.regEx) {
      this.regEx = new RegExp(`^${this.filter}$`);
    }

    if (this.regEx.test(this.ngModel.value)) {
      this.previousValue = this.ngModel.value;
    }
  }
  @HostListener('keyup', ['$event']) onKeyUp(event) {
    let e = <KeyboardEvent>event;

    if (this.regEx.test(this.ngModel.value)) {
      return;
    } else {
      this.ngModel.update.emit(this.previousValue);
    }
  }
}

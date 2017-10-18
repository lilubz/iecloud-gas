import { Component, OnDestroy, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SharedModule } from './../shared/shared.module';

@Component({
  selector: 'gas-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {

  constructor( @Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {
    this.renderer.addClass(this.document.body, 'login-body');
    this.renderer.setStyle(this.document.querySelector('html'), 'height', '100%');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'login-body');
    this.renderer.removeStyle(this.document.querySelector('html'), 'height');
  }

}

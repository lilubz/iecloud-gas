import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gas-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss']
})
export class BackComponent implements OnInit {
  @Input() title: string = '返回';
  @Input() link: string = '../';

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gas-page-not-found',
  template: `<div class="main">本功能暂未开通，敬请期待！</div>`,
  styles: [`
    .main {
      text-align: center;
      font-size: 20px;
    }
  `]
})

export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}

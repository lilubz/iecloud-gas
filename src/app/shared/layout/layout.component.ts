import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'gas-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {

  constructor() { }
  menus: MenuItem[];

  ngOnInit() {
    this.menus = [
      {
        label: '首页',
        icon: 'fa-file-o',
        routerLink: ['/home']
      },
      {
        label: '监管对象档案',
        icon: 'fa-edit',
        items: [
          { label: '气瓶档案', icon: 'fa-mail-forward', routerLink: ['/supervise/cylinder'] },
          { label: '用户档案', icon: 'fa-mail-reply' }
        ]
      },
      { separator: true },
      {
        label: 'Quit', icon: 'fa-minus'
      }
    ];
  }
}

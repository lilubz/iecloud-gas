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
        label: '基础档案',
        icon: 'fa-edit',
        items: [
          { label: '气瓶档案', routerLink: ['/archive/cylinder'] },
          { label: '用户档案', routerLink: ['/archive/customer'] },
          { label: '企业档案', routerLink: ['/archive/enterprise'] },
          { label: '车辆信息', routerLink: ['/archive/car'] },
          { label: '从业人员信息', routerLink: ['/archive/employee '] },
          { label: '视频图像', routerLink: ['/archive/media'] },
        ]
      },
      {
        label: '配送监管',
        icon: 'fa-file-o',
        routerLink: ['/home']
      },
      {
        label: '监管事务',
        icon: 'fa-file-o',
        routerLink: ['/home']
      },
      {
        label: '可视化',
        icon: 'fa-file-o',
        routerLink: ['/home']
      },
      {
        label: '统计查询',
        icon: 'fa-file-o',
        routerLink: ['/home']
      },
      {
        label: '系统配置',
        icon: 'fa-file-o',
        routerLink: ['/home']
      },
      { separator: true },
      {
        label: 'Quit', icon: 'fa-minus'
      }
    ];
  }
}

import { RoleType } from './../../core/RoleType';
import { Component, OnInit } from '@angular/core';
import { StatisticCylinderService } from './statistic-cylinder.service';

@Component({
  selector: 'gas-cylinder',
  templateUrl: './cylinder.component.html',
  styleUrls: ['./cylinder.component.scss'],
  providers: [StatisticCylinderService]
})
export class CylinderComponent implements OnInit {

  permissionRoles: RoleType[] = [
    RoleType.Government
  ];

  constructor() { }

  ngOnInit() {
  }

}

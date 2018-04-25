import { Component, OnInit } from '@angular/core';
import { RoleType } from '../../common/RoleType';

@Component({
  selector: 'gas-filling-scale',
  templateUrl: './filling-scale.component.html',
  styleUrls: ['./filling-scale.component.scss']
})
export class FillingScaleComponent implements OnInit {
  RoleType = RoleType;
  constructor() { }

  ngOnInit() {
  }

}

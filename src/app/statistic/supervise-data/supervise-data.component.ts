import { Component, OnInit } from '@angular/core';
import { RoleType } from '../../common/RoleType';

@Component({
  selector: 'gas-supervise-data',
  templateUrl: './supervise-data.component.html',
  styleUrls: ['./supervise-data.component.scss']
})
export class SuperviseDataComponent implements OnInit {
  RoleType = RoleType;
  constructor() { }

  ngOnInit() {
  }

}

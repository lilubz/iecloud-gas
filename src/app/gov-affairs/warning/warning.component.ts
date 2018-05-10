import { Component, OnInit } from '@angular/core';
import { RoleType } from '../../common/RoleType';

@Component({
  selector: 'gas-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss']
})
export class WarningComponent implements OnInit {
  RoleType = RoleType;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { RoleType } from '../../common/RoleType';

@Component({
  selector: 'gas-architecture-management',
  templateUrl: './architecture-management.component.html',
  styleUrls: ['./architecture-management.component.scss']
})
export class ArchitectureManagementComponent implements OnInit {
  RoleType = RoleType;
  constructor() { }

  ngOnInit() {
  }

}

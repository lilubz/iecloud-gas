import { Component, } from '@angular/core';
import { RoleType } from '../../common/RoleType';

@Component({
  selector: 'gas-enterprise-management',
  templateUrl: './enterprise-management.component.html',
  styleUrls: ['./enterprise-management.component.scss'],
})
export class EnterpriseManagementComponent {
  RoleType = RoleType;
}

import { Component, } from '@angular/core';
import { RoleType } from '../../common/RoleType';

@Component({
  selector: 's-system-user',
  templateUrl: './system-user.component.html'
})
export class SystemUserComponent {
  RoleType = RoleType;
}

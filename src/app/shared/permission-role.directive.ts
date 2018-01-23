import { UserStateService } from './../core/userState.service';
import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { RoleType } from '../core/RoleType';

/**
 * 根据用户权限和输入的权限列表判断是否展示展示界面
 * 2018-01-23 15:54:04
 * @author hzb
 * @export
 * @class PermissionRoleDirective
 */
@Directive({
  selector: '[gasPermissionRole]'
})
export class PermissionRoleDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private userStateService: UserStateService
  ) { }

  @Input() set gasPermissionRole(roles: RoleType[]) {
    const userRole = this.userStateService.getUserRoleType();
    if ((roles.indexOf(userRole) !== -1) && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if ((roles.indexOf(userRole) === -1) && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}

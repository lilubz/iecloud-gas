export class User {
  createTime?: number; // 用户创建时间
  lastLoginTime?: number; // 最后登录时间
  loginNum?: number; // 登录次数
  organizationId?: string; // 组织id
  organizationName?: string; // 组织名称
  organizationType?: number; // 组织类型
  permissionValues?: string[]; // 权限列表
  phone?: string; // 手机号
  regionId?: string; // 所在区域id
  regionName?: string; // 所在区域名
  roleId?: string; // 用户角色id
  roleName?: string; // 用户角色名
  userId?: string; // 用户id
  username?: string; // 用户名
  roleType?: number; // 用户角色类型
}

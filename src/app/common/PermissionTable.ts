export class PermissionTable {
  'archive': boolean;
  'archive/cylinder': boolean;
  'archive/customer': boolean;
  'archive/enterprise': boolean;
  'archive/car': boolean;
  'archive/employee': boolean;
}

export const GovernmentPermissionTable: PermissionTable = {
  'archive': true,
  'archive/cylinder': true,
  'archive/customer': true,
  'archive/enterprise': true,
  'archive/car': true,
  'archive/employee': true,
}

export const EnterprisePermissionTable: PermissionTable = {
  'archive': true,
  'archive/cylinder': true,
  'archive/customer': true,
  'archive/enterprise': false,
  'archive/car': true,
  'archive/employee': true,
}

import { MenuItem } from 'primeng/primeng';

export const GovernmentMenus: MenuItem[] = [
  {
    label: '首页',
    icon: 'menu-icon home-icon',
    routerLink: ['/home']
  },
  {
    label: '基础档案',
    icon: 'menu-icon archive-icon',
    routerLink: ['/archive'],
    items: [
      { label: '气瓶档案', routerLink: ['/archive/cylinder'] },
      { label: '用户档案', routerLink: ['/archive/customer'] },
      { label: '企业档案', routerLink: ['/archive/enterprise'] },
      { label: '车辆信息', routerLink: ['/archive/car'] },
      { label: '从业人员信息', routerLink: ['/archive/employee'] },
      { label: '视频图像', routerLink: ['/archive/media'] },
    ]
  },
  {
    label: '配送监管',
    icon: 'menu-icon distribution-icon',
    routerLink: ['/delivery'],
    items: [
      { label: '气瓶全过程监管追溯查询', routerLink: ['/delivery/cylinder-trace'] },
      // { label: '充装记录', routerLink: ['/delivery/cylinder-filling'] }
    ]
  },
  {
    label: '监管事务',
    icon: 'menu-icon supervise-icon',
    routerLink: ['/gov-affairs'],
    items: [
      // { label: '气瓶全过程监管追溯查询', routerLink: ['/gov-affairs/cylinder-trace'] },
      // { label: '充装记录', routerLink: ['/gov-affairs/cylinder-filling'] }
      { label: '协同管理', routerLink: ['/gov-affairs/collaborative'] },
    ]
  },
  {
    label: '可视化',
    icon: 'menu-icon visualization-icon',
    routerLink: ['/visualization']
  },
  {
    label: '统计查询',
    icon: 'menu-icon statistic-icon',
    routerLink: ['/statistic'],
    items: [
      { label: '气瓶', routerLink: ['/statistic/cylinder'] },
      { label: '企业', routerLink: ['/statistic/enterprise'] },
      { label: '执法', routerLink: ['/statistic/affair'] },
    ]
  },
  {
    label: '系统配置',
    icon: 'menu-icon system-icon',
    routerLink: ['/system'],
    items: [
      { label: '个人信息', routerLink: ['/system/user'] },
      { label: '通知公告', routerLink: ['/system/message'] },
      { label: '企业管理', routerLink: ['/system/enterprise-management'] },
      { label: '瓶库管理', routerLink: ['/system/bottle-library'] },
    ]
  },
  {
    label: '审核管理',
    icon: 'menu-icon verification-icon',
    routerLink: ['/verification']
  }
];

export const EnterpriseMenus: MenuItem[] = [
  {
    label: '首页',
    icon: 'menu-icon home-icon',
    routerLink: ['/home']
  },
  {
    label: '基础档案',
    icon: 'menu-icon archive-icon',
    routerLink: ['/archive'],
    items: [
      { label: '气瓶档案', routerLink: ['/archive/cylinder'] },
      { label: '用户档案', routerLink: ['/archive/customer'] },
      { label: '车辆信息', routerLink: ['/archive/car'] },
      { label: '从业人员信息', routerLink: ['/archive/employee'] },
      { label: '视频图像', routerLink: ['/archive/media'] },
    ]
  },
  {
    label: '配送监管',
    icon: 'menu-icon distribution-icon',
    routerLink: ['/delivery'],
    items: [
      { label: '气瓶全过程监管追溯查询', routerLink: ['/delivery/cylinder-trace'] },
      // { label: '充装记录', routerLink: ['/delivery/cylinder-filling'] }
    ]
  },
  {
    label: '统计查询',
    icon: 'menu-icon statistic-icon',
    routerLink: ['/statistic'],
    items: [
      { label: '气瓶', routerLink: ['/statistic/cylinder'] },
      { label: '企业', routerLink: ['/statistic/enterprise'] },
    ]
  },
  {
    label: '系统配置',
    icon: 'menu-icon system-icon',
    routerLink: ['/system'],
    items: [
      { label: '个人信息', routerLink: ['/system/user'] },
      { label: '瓶库管理', routerLink: ['/system/bottle-library'] },
    ]
  },
  // {
  //   label: '企业监管',
  //   icon: 'menu-icon statistic-icon',
  //   routerLink: ['/enterprise-supervise'],
  //   items: [
  //     // { label: '报表管理', routerLink: ['/enterprise-supervise/affair-details'] },
  //     { label: '事务处理', routerLink: ['/enterprise-supervise/affair-list'] }
  //   ]
  // },
  {
    label: '信息录入',
    icon: 'menu-icon input-icon',
    routerLink: ['/input']
  }
];

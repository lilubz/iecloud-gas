import { MenuItem } from 'primeng/primeng';

export const GovernmentMenus: MenuItem[] = [
  // {
  //   label: '首页',
  //   icon: 'menu-icon home-icon',
  //   routerLink: ['/government/home']
  // },
  {
    label: '基础档案',
    icon: 'menu-icon archive-icon',
    routerLink: ['/government/archive'],
    items: [
      { label: '气瓶档案', routerLink: ['/government/archive/cylinder'] },
      { label: '用户档案', routerLink: ['/government/archive/customer'] },
      { label: '企业档案', routerLink: ['/government/archive/enterprise'] },
      { label: '车辆信息', routerLink: ['/government/archive/car'] },
      { label: '送气工信息', routerLink: ['/government/archive/employee'] },
    ]
  },
  {
    label: '配送监管',
    icon: 'menu-icon distribution-icon',
    routerLink: ['/government/delivery'],
    items: [
      { label: '气瓶全过程监管追溯查询', routerLink: ['/government/delivery/cylinder-trace'] },
      // { label: '充装记录', routerLink: ['/delivery/cylinder-filling'] }
    ]
  },
  {
    label: '监管事务',
    icon: 'menu-icon supervise-icon',
    routerLink: ['/government/gov-affairs'],
    items: [
      // { label: '气瓶全过程监管追溯查询', routerLink: ['/gov-affairs/cylinder-trace'] },
      // { label: '充装记录', routerLink: ['/gov-affairs/cylinder-filling'] }
      { label: '报表管理', routerLink: ['/government/gov-affairs/report'] },
      { label: '协同管理', routerLink: ['/government/gov-affairs/collaborative'] },
    ]
  },
  {
    label: '可视化',
    icon: 'menu-icon visualization-icon',
    routerLink: ['/government/visualization'],
    items: [
      { label: '视频图像', routerLink: ['/government/visualization/video-monitor'] },
    ]
  },
  {
    label: '统计查询',
    icon: 'menu-icon statistic-icon',
    routerLink: ['/government/statistic'],
    items: [
      { label: '气瓶', routerLink: ['/government/statistic/cylinder'] },
      { label: '企业', routerLink: ['/government/statistic/enterprise'] },
      { label: '执法', routerLink: ['/government/statistic/affair'] },
    ]
  },
  {
    label: '系统配置',
    icon: 'menu-icon system-icon',
    routerLink: ['/government/system'],
    items: [
      { label: '个人信息', routerLink: ['/government/system/user'] },
      { label: '通知公告', routerLink: ['/government/system/message'] },
      { label: '企业管理', routerLink: ['/government/system/enterprise-management'] },
      { label: '瓶库管理', routerLink: ['/government/system/bottle-library'] },
    ]
  },
  {
    label: '审核管理',
    icon: 'menu-icon verification-icon',
    routerLink: ['/government/verification']
  }
];

export const EnterpriseMenus: MenuItem[] = [
  // {
  //   label: '首页',
  //   icon: 'menu-icon home-icon',
  //   routerLink: ['/enterprise/home']
  // },
  {
    label: '基础档案',
    icon: 'menu-icon archive-icon',
    routerLink: ['/enterprise/archive'],
    items: [
      { label: '气瓶档案', routerLink: ['/enterprise/archive/cylinder'] },
      { label: '用户档案', routerLink: ['/enterprise/archive/customer'] },
      { label: '车辆信息', routerLink: ['/enterprise/archive/car'] },
      { label: '送气工信息', routerLink: ['/enterprise/archive/employee'] },
    ]
  },
  {
    label: '配送监管',
    icon: 'menu-icon distribution-icon',
    routerLink: ['/enterprise/delivery'],
    items: [
      { label: '气瓶全过程监管追溯查询', routerLink: ['/enterprise/delivery/cylinder-trace'] },
      // { label: '充装记录', routerLink: ['/enterprise/delivery/cylinder-filling'] }
    ]
  },
  {
    label: '统计查询',
    icon: 'menu-icon statistic-icon',
    routerLink: ['/enterprise/statistic'],
    items: [
      { label: '气瓶', routerLink: ['/enterprise/statistic/cylinder'] },
      { label: '企业', routerLink: ['/enterprise/statistic/enterprise'] },
    ]
  },
  {
    label: '系统配置',
    icon: 'menu-icon system-icon',
    routerLink: ['/enterprise/system'],
    items: [
      { label: '个人信息', routerLink: ['/enterprise/system/user'] },
      { label: '瓶库管理', routerLink: ['/enterprise/system/bottle-library'] },
    ]
  },
  {
    label: '企业监管',
    icon: 'menu-icon statistic-icon',
    routerLink: ['/enterprise/enterprise-supervise'],
    items: [
      { label: '报表管理', routerLink: ['/enterprise/enterprise-supervise/report'] },
      { label: '事务处理', routerLink: ['/enterprise/enterprise-supervise/affair-list'] }
    ]
  },
  {
    label: '信息录入',
    icon: 'menu-icon input-icon',
    routerLink: ['/enterprise/input']
  }
];

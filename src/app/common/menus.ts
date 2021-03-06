import { MenuItem } from 'primeng/primeng';

export const AdminMenus: MenuItem[] = [
  // {
  //   label: '首页',
  //   icon: 'menu-icon home-icon',
  //   routerLink: ['/home']
  // },
  {
    label: '基础档案',
    routerLink: ['/archive'],
    items: [
      { label: '气瓶档案', routerLink: ['/archive/cylinder'] },
      { label: '用户档案', routerLink: ['/archive/customer'] },
      { label: '企业档案', routerLink: ['/archive/enterprise'] },
      { label: '车辆信息', routerLink: ['/archive/car'] },
      { label: '送气工信息', routerLink: ['/archive/employee'] },
      { label: '储气罐档案', routerLink: ['/archive/gasHolder'] },
      { label: '储配站档案', routerLink: ['/archive/gasHolderStation'] },
      { label: '供应站档案', routerLink: ['/archive/supplyStation'] },
      { label: '充装秤档案', routerLink: ['/archive/filling-scale'] },
    ]
  },
  {
    label: '监管查询',
    routerLink: ['/delivery'],
    items: [
      { label: '气瓶全过程监管追溯查询', routerLink: ['/delivery/cylinder-trace'] },
      { label: '地图轨迹', routerLink: ['/delivery/map'] },
      { label: '安检信息查询', routerLink: ['/delivery/security-query'] },
      // { label: '充装记录', routerLink: ['/delivery/cylinder-filling'] }
    ]
  },
  {
    label: '监管事务',
    routerLink: ['/gov-affairs'],
    items: [
      // { label: '气瓶全过程监管追溯查询', routerLink: ['/gov-affairs/cylinder-trace'] },
      // { label: '充装记录', routerLink: ['/gov-affairs/cylinder-filling'] }
      { label: '报表管理', routerLink: ['/gov-affairs/report'] },
      { label: '协同管理', routerLink: ['/gov-affairs/collaborative'] },
      { label: '预警管理', routerLink: ['/gov-affairs/warning'] },
      { label: '充装监管', routerLink: ['/gov-affairs/filling-scale'] },
    ]
  },
  {
    label: '视频查看',
    routerLink: ['/visualization'],
    items: [
      { label: '大屏展示', routerLink: ['/visualization/big-screen'] },
      { label: '视频监控', routerLink: ['/visualization/video-monitor'] },
      { label: '单兵执法', routerLink: ['/visualization/single-solider'] },
      { label: '对讲调度', routerLink: ['/visualization/talk-dispatch'] },
    ]
  },
  {
    label: '统计分析',
    routerLink: ['/statistic'],
    items: [
      { label: '气瓶', routerLink: ['/statistic/cylinder'] },
      { label: '企业', routerLink: ['/statistic/enterprise'] },
      { label: '新增用户统计', routerLink: ['/statistic/customer'] },
      { label: '执法', routerLink: ['/statistic/affair'] },
      { label: '入户安检统计', routerLink: ['/statistic/safety-check'] },
      { label: '行业分析', routerLink: ['/statistic/industry-analyze'] },
    ]
  },
  {
    label: '系统配置',
    routerLink: ['/system'],
    items: [
      { label: '个人信息', routerLink: ['/system/user'] },
      // { label: '企业管理', routerLink: ['/system/enterprise-management'] },
      // { label: '供应站管理', routerLink: ['/system/bottle-library'] },
      { label: '燃气经营许可证管理', routerLink: ['/system/gas-business-license'] },
      { label: '账号管理', routerLink: ['/system/system-user'] },
      { label: '配置管理', routerLink: ['/system/setting'] },
    ]
  },
  {
    label: '审核管理',
    routerLink: ['/verification']
  },
  {
    label: '公众服务',
    routerLink: ['/pub-service'],
    items: [
      { label: '调查问卷', routerLink: ['/pub-service/questionnaire'] },
      { label: '安全宣传', routerLink: ['/pub-service/security-publicity'] },
      { label: '通知公告', routerLink: ['/pub-service/message'] },
    ]
  }




];

export const GovernmentMenus: MenuItem[] = [
  // {
  //   label: '首页',
  //   icon: 'menu-icon home-icon',
  //   routerLink: ['/home']
  // },
  {
    label: '基础档案',
    routerLink: ['/archive'],
    items: [
      { label: '气瓶档案', routerLink: ['/archive/cylinder'] },
      { label: '用户档案', routerLink: ['/archive/customer'] },
      { label: '企业档案', routerLink: ['/archive/enterprise'] },
      { label: '车辆信息', routerLink: ['/archive/car'] },
      { label: '送气工信息', routerLink: ['/archive/employee'] },
      { label: '储气罐档案', routerLink: ['/archive/gasHolder'] },
      { label: '储配站档案', routerLink: ['/archive/gasHolderStation'] },
      { label: '供应站档案', routerLink: ['/archive/supplyStation'] },
      { label: '充装秤档案', routerLink: ['/archive/filling-scale'] },
    ]
  },
  {
    label: '监管查询',
    routerLink: ['/delivery'],
    items: [
      { label: '气瓶全过程监管追溯查询', routerLink: ['/delivery/cylinder-trace'] },
      { label: '地图轨迹', routerLink: ['/delivery/map'] },
      { label: '安检信息查询', routerLink: ['/delivery/security-query'] },
      // { label: '充装记录', routerLink: ['/delivery/cylinder-filling'] }
    ]
  },
  {
    label: '监管事务',
    routerLink: ['/gov-affairs'],
    items: [
      // { label: '气瓶全过程监管追溯查询', routerLink: ['/gov-affairs/cylinder-trace'] },
      // { label: '充装记录', routerLink: ['/gov-affairs/cylinder-filling'] }
      { label: '报表管理', routerLink: ['/gov-affairs/report'] },
      { label: '协同管理', routerLink: ['/gov-affairs/collaborative'] },
      { label: '预警管理', routerLink: ['/gov-affairs/warning'] },
      { label: '充装监管', routerLink: ['/gov-affairs/filling-scale'] },
    ]
  },
  {
    label: '视频查看',
    routerLink: ['/visualization'],
    items: [
      { label: '大屏展示', routerLink: ['/visualization/big-screen'] },
      // { label: '视频监控', routerLink: ['/visualization/video-monitor'] },
      // { label: '单兵执法', routerLink: ['/visualization/single-solider'] },
      // { label: '对讲调度', routerLink: ['/visualization/talk-dispatch'] },
    ]
  },
  {
    label: '统计分析',
    routerLink: ['/statistic'],
    items: [
      { label: '气瓶', routerLink: ['/statistic/cylinder'] },
      { label: '企业', routerLink: ['/statistic/enterprise'] },
      { label: '新增用户统计', routerLink: ['/statistic/customer'] },
      { label: '执法', routerLink: ['/statistic/affair'] },
      { label: '入户安检统计', routerLink: ['/statistic/safety-check'] },
      { label: '行业分析', routerLink: ['/statistic/industry-analyze'] },
    ]
  },
  {
    label: '系统配置',
    routerLink: ['/system'],
    items: [
      { label: '个人信息', routerLink: ['/system/user'] },
      { label: '燃气经营许可证管理', routerLink: ['/system/gas-business-license'] },
      { label: '账号管理', routerLink: ['/system/system-user'] },
      { label: '配置管理', routerLink: ['/system/setting'] },
    ]
  },
  {
    label: '审核管理',
    routerLink: ['/verification']
  },
];






export const EnterpriseMenus: MenuItem[] = [
  // {
  //   label: '首页',
  //   icon: 'menu-icon home-icon',
  //   routerLink: ['/home']
  // },
  {
    label: '基础档案',
    routerLink: ['/archive'],
    items: [
      { label: '气瓶档案', routerLink: ['/archive/cylinder'] },
      { label: '用户档案', routerLink: ['/archive/customer'] },
      { label: '车辆信息', routerLink: ['/archive/car'] },
      { label: '送气工信息', routerLink: ['/archive/employee'] },
      { label: '储气罐档案', routerLink: ['/archive/gasHolder'] },
      { label: '储配站档案', routerLink: ['/archive/gasHolderStation'] },
      { label: '供应站档案', routerLink: ['/archive/supplyStation'] },
      { label: '充装秤档案', routerLink: ['/archive/filling-scale'] },
    ]
  },
  {
    label: '监管查询',
    routerLink: ['/delivery'],
    items: [
      { label: '气瓶全过程监管追溯查询', routerLink: ['/delivery/cylinder-trace'] },
      { label: '安检信息查询', routerLink: ['/delivery/security-query'] },
      { label: '地图轨迹', routerLink: ['/delivery/map'] },
      // { label: '充装记录', routerLink: ['/delivery/cylinder-filling'] }
    ]
  },
  {
    label: '统计分析',
    routerLink: ['/statistic'],
    items: [
      { label: '气瓶', routerLink: ['/statistic/cylinder'] },
      { label: '企业', routerLink: ['/statistic/enterprise'] },
      { label: '经营许可证到期预警', routerLink: ['/statistic/license-warning'] },
      { label: '安检预警处置记录', routerLink: ['/statistic/warning-record'] },
    ]
  },
  {
    label: '系统配置',
    routerLink: ['/system'],
    items: [
      { label: '个人信息', routerLink: ['/system/user'] },
    ]
  },
  {
    label: '企业监管',
    routerLink: ['/enterprise-supervise'],
    items: [
      { label: '报表管理', routerLink: ['/enterprise-supervise/report'] },
      { label: '事务处理', routerLink: ['/enterprise-supervise/affair-list'] },
      { label: '重瓶定价', routerLink: ['/enterprise-supervise/repricing-rist'] },
      { label: '客户评价', routerLink: ['/enterprise-supervise/customer-evaluation'] }
    ]
  },
  {
    label: '信息录入',
    routerLink: ['/input']
  }
];

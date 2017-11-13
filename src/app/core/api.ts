import { InjectionToken } from '@angular/core';

const release = '/wenZhouGas/';
const local = '/api/';

const URL = release;
const API = {
  // 项目地址
  'url': URL,
  // 气瓶档案
  'queryCylinderDetail': URL + 'basicInformation/gasCylinder/searchGCInfoByCylinderCode.do',
  // 系统管理
  'queryLog': URL + '',

  // 气瓶信息概览
  'getCylinderCountiesOverview': URL + 'basicInformation/gasCylinder/GcCountInfoByRegion.do',
  'getCylinderEnterpriseOverviewByAreaId': URL + 'basicInformation/gasCylinder/getGroupGasCylinderOverview.do',
  'getCylinderEnterpriseOverviewByOrganizationId': URL + 'basicInformation/gasCylinder/getGroupGasInfo.do',

  // 气瓶综合查询
  'cylinderSelectOpt': URL + 'basicInformation/gasCylinder/getDropInfo.do',
  'getCylinders': URL + 'basicInformation/gasCylinder/searchGasCylinder.do',

  // 用户综合查询
  'getCustomerList': URL + 'basicInformation/gcUserInfo/listUserInfoSelective.do',
  // 'getCustomerDropdownOpt': URL + 'userInfo/getGcUserDropDownData.do',
  'getDropdownForUserNature': URL + 'basicInformation/gcUserInfo/listUserNature.do',
  'getDropdownForUserType': URL + 'basicInformation/gcUserInfo/listUserType.do',
  'getDropdownForRegionSysUser': URL + 'basicInformation/region/listRegionInfo.do',
  'getDropdownForCorpInfoInRegion': URL + 'basicInformation/corpInfo/listCorpInfoInRegion.do',

  // 登录
  'signIn': URL + 'sysUserPermissions/user/login.do',
  'signUp': URL + 'user/login.do',
  'logout': URL + 'sysUserPermissions/user/logout.do',
};

export let API_TOKEN = new InjectionToken<any>('API');

export let APIProvide: any = {
  provide: API_TOKEN,
  useValue: API
};

import { InjectionToken } from '@angular/core';

const nina = 'http://192.168.1.8:8080/';
const tiejun = 'http://192.168.1.113:8080/';
const feifeng = 'http://192.168.1.26:8080/';
const guotao = 'http://192.168.1.107:28081/';
const release = '/wenZhouGas/';
const local = 'http://192.168.1.100:4200/api/';

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
  'getCylinderEnterpriseOverview': URL + 'basicInformation/gasCylinder/getGroupGasCylinderOverview.do',

  // 气瓶综合查询
  'cylinderSelectOpt': URL + 'basicInformation/gasCylinder/getDropInfo.do',
  'getCylinders': URL + 'basicInformation/gasCylinder/searchGasCylinder.do',

  // 登录
  'signIn': URL + 'user/login.do',
  'signUp': URL + 'user/login.do',
  'logout': URL + 'user/logout.do',
};

export let API_TOKEN = new InjectionToken<any>('API');

export let APIProvide: any = {
  provide: API_TOKEN,
  useValue: API
};

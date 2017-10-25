import { InjectionToken } from '@angular/core';

const nina = 'http://192.168.1.8:8089/';
const tiejun = 'http://192.168.1.113:8080/';
const feifeng = 'http://192.168.1.26:8080/';
const guotao = 'http://192.168.1.107:28081/';
const release = 'http://59.110.233.230/iecloud/';
const local = 'http://localhost:4200/api/';

const URL = local;
const API = {
  // 项目地址
  'url': URL,

  // 系统管理
  'queryLog': URL + '',

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

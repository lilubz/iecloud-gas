import { InjectionToken } from '@angular/core';

const nina = 'http://192.168.1.8:8089/';
const tiejun = 'http://192.168.1.113:8080/';
const feifeng = 'http://192.168.1.26:18080/';
const guotao = 'http://192.168.1.107:28081/';
const release = 'http://59.110.233.230/iecloud/';

const URL = release;
const API = {
  // 项目地址
  'url': URL,

  // 系统管理
  'queryLog': URL + '',
};

export let API_TOKEN = new InjectionToken<any>('API');

export let APIProvide: any = {
  provide: API_TOKEN,
  useValue: API
};

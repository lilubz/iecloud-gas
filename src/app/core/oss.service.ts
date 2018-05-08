import { error } from 'selenium-webdriver';
import { Injectable } from '@angular/core';

declare const OSS;

/**
 * 阿里云oss服务
 * 2018-03-12 20:37:13
 * @author hzb
 * @export
 * @class OssService
 */
@Injectable()
export class OssService {

  constructor() { }

  /**
   * 向STS服务发起请求，获取STS临时授权信息
   * 2018-03-12 20:47:02
   * @memberof OssService
   */
  createSTS = (url) => {
    OSS.urllib.request(url, { method: 'GET' }, (err, response) => {
      if (err) {
        console.error(err);
        return;
      }
      try {
        console.log(JSON.parse(response));
        return JSON.parse(response);
      } catch (e) {
        console.error('parse sts response info error: ' + e.message);
        return;
      }
      // console.log(result)
    });
  }

  /**
   * 根据授权信息创建oss客户端对象
   * 2018-03-12 21:09:20
   * @memberof OssService
   */
  getOSSClient = (options) => {
    return new OSS.Wrapper({
      accessKeyId: options.AccessKeyId,
      accessKeySecret: options.AccessKeySecret,
      stsToken: options.SecurityToken,
      endpoint: 'oss-cn-hangzhou.aliyuncs.com',
      bucket: '<Your bucket name>'
    });
  }
}

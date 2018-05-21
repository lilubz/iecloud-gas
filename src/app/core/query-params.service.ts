import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, NavigationStart } from '@angular/router';
import { Util } from './util';

@Injectable()
export class QueryParamsService {
  private _paramsMap: Map<string, any> = new Map();
  constructor(
    private route: ActivatedRoute,
    // private activeRoute: ActivatedRouteSnapshot,
    private util: Util,
    private router: Router
  ) {
  }


  /**
   * 获取当前路由的查询参数
   * 2018-05-14 16:11:55
   * @author hzb
   * @returns {*}
   * @memberof Util
   */
  getQueryParams(routerUrl: string): any {
    return this._paramsMap.get(routerUrl);
  }

  /**
   * 设置当前路由的查询参数
   * 2018-05-14 16:12:36
   * @author hzb
   * @param {*} params
   * @memberof Util
   */
  setQueryParams(routerUrl: string, params: any): void {
    // console.log(this.activeRoute);
    this._paramsMap.set(routerUrl, params);
  }
}

import { RouteReuseStrategy, DefaultUrlSerializer, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class AppRoutingCache implements RouteReuseStrategy {
  public maxCacheLength = 15;  // 最大复用页面的长度
  public handlers = [];  // 保存路由复用的数据。

  /** 是否对路由使用复用：只对路由配置中 keep 属性为true的启用复用 */
  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    if (!route.routeConfig) return false;
    if (route.routeConfig.loadChildren) return false;
    return route.data.keep ? true : false;
  }

  /** 保存复用：当路由离开时会触发。按route中的 component 作为唯一标识符，
   * 如果达到最大复用长度，最早的路由复用将会被删除
   * */
  public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    const cache = this.handlers.find(item => item.component === route.component);
    if (cache) {
      cache.handle = handle;
    } else {
      this.handlers.unshift({
        component: route.component,
        handle: handle
      });
      if (this.handlers.length > this.maxCacheLength) {
        this.handlers.pop();
      }
    }
  }

  /** 如果复用中有此组件，并且路由当中没有携带参数的话 才允许使用复用 */
  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    if (!route.routeConfig) return false;
    if (route.routeConfig.loadChildren) return false;
    if (this.handlers.find(item => item.component === route.component)) {
      if(route.data.extra && JSON.stringify(route.queryParams) === '{}'){
        return true;
      }
      return JSON.stringify(route.params) === '{}' && JSON.stringify(route.queryParams) === '{}' ? true : false;
    }
  }

  /** 从复用中获取快照，若无则返回null */
  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if (!route.routeConfig) { return null; }
    if (route.routeConfig.loadChildren) { return null; }
    const needObj = this.handlers.find(item => item.component === route.component);
    // console.log(needObj);
    if (needObj) {
      if (!needObj.component) {
        return null;
      }
    }
    return needObj ? needObj.handle : null;
  }

  /** 进入路由触发，判断是否同一路由 */
  public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    if (future.data.clear) {
      this.handlers = [];
    }
    return future.component === curr.component;
  }
}

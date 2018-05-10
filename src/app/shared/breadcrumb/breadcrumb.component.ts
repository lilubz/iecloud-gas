import { Component, DoCheck, OnInit, AfterViewChecked, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import * as $ from 'jquery';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'gas-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements DoCheck {
  sidebar = {
    element: null,
    show: true,
    computedStyle: null,
    left: 0,
    offsetX: 0,
  };
  main = {
    element: null,
    left: 0,
  };
  breadcrumbs: Array<Object>;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event) => {
      this.breadcrumbs = [];
      let currentRoute = this.route.root;
      let url = '';
      do {
        const childrenRoutes = currentRoute.children;
        currentRoute = null;
        childrenRoutes.forEach(route => {
          if (route.outlet === 'primary') {
            const routeSnapshot = route.snapshot;
            url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
            this.breadcrumbs.push({
              label: route.snapshot.data,
              url: url
            });
            currentRoute = route;
          }
        });
      } while (currentRoute);
    });
  }

  ngDoCheck() {
    const sidebar: any = document.querySelector('div.sidebar');
    const main: any = document.querySelector('div.main');

    if (sidebar === this.sidebar.element && main === this.main.element) { // 两者都没有改变直接返回
      return;
    }

    if (sidebar) { // 有侧边栏
      if (main) { // 也有主功能区
        if (sidebar !== this.sidebar.element) { // 侧边栏已经不是原来的侧边栏了
          this.updateElementState('sidebar', sidebar, true);
        }
        if (main !== this.main.element) { // 主功能区已经不是原来的主功能区了
          setTimeout(() => { // 使用 setTimeout 是为了解决某些有 sidebar 页面向没有sidebar页面跳转时.main元素left设置错误的问题。
            this.updateElementState('main', main);
          }, 0);
        }
      } else { // 有侧边栏但是没有主功能区， 目前不存在这样的情况

      }
    } else { // 没有侧边栏
      this.updateElementState('sidebar', null, false);
      if (main) { // 没有侧边栏但有主功能区，  有这样子的页面，比如 个人信息档案
        this.updateElementState('main', main);
      } else { // 没有侧边栏也没有主功能区  比如大屏展示页面
        this.updateElementState('main', null);
      }
    }
  }
  updateElementState(type: string, el: Element, isShow?: boolean) {
    switch (type) {
      case 'sidebar':
        this.sidebar.element = el;
        this.sidebar.computedStyle = el ? getComputedStyle(el) : null;
        this.sidebar.left = el ? parseFloat(this.sidebar.computedStyle.left) : 0;
        this.sidebar.show = isShow === undefined ? this.sidebar.show : isShow;
        this.sidebar.offsetX = el ? parseFloat(this.sidebar.computedStyle.width)
          + parseFloat(this.sidebar.computedStyle.marginLeft) : 0;
        if (el && !this.sidebar.show) { // 如果不显示侧边栏 能走到这里的都是新元素（默认显示侧边栏），所以不考虑else的情况。
          this.sidebar.element.style.left = (this.sidebar.left = this.sidebar.left - this.sidebar.offsetX) + 'px';
        }
        break;
      case 'main':
        this.main.element = el;
        this.main.left = el ? parseFloat(getComputedStyle(el).left) : 0;
        if (el && this.sidebar.element && !this.sidebar.show) { // 主功能区不为null, 侧边栏也不为null, 原来的侧边栏是隐藏的。
          this.main.element.style.left = (this.main.left = this.main.left - this.sidebar.offsetX) + 'px';
        }
        break;
      default:
        break;
    }
  }
  toggleSidebar() {
    if (this.sidebar.show) {
      $(this.sidebar.element).animate({ 'left': (this.sidebar.left = this.sidebar.left - this.sidebar.offsetX) + 'px' }, 200);
      $(this.main.element).animate({ 'left': (this.main.left = this.main.left - this.sidebar.offsetX) + 'px' }, 200);
    } else {
      $(this.sidebar.element).animate({ 'left': (this.sidebar.left = this.sidebar.left + this.sidebar.offsetX) + 'px' }, 200);
      $(this.main.element).animate({ 'left': (this.main.left = this.main.left + this.sidebar.offsetX) + 'px' }, 200);
    }
    this.sidebar.show = !this.sidebar.show;
  }
}

import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import * as moment from 'moment';
import { API } from '../common/api';

/**
 * 工具类--提供常用方法
 * 2018-01-24 11:03:03
 * @author hzb
 * @export
 * @class Util
 */
@Injectable()
export class Util {
  private renderer: Renderer2;

  constructor(
    private rendererFactory: RendererFactory2,
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  /**
   * 计算对象数组中某属性值之和
   * 2018-01-24 10:52:08
   * @author hzb
   * @param {string} prop
   * @param {Object[]} data
   * @returns
   * @memberof UtilService
   */
  calculateTotal(prop: string, data: Object[]) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      sum += element[prop];
    }
    return sum;
  }

  /**
   * 获取月初至今日的每周的时间范围
   * 周的范围是周一至周日；
   * eg: 2018-02-11 返回：[[1, 4],[5, 11]]
   * eg: 2018-02-12 返回：[[1, 4],[5, 11],[12, 12]]
   * 2018-02-11 17:13:50
   * @author hzb
   * @returns {number[][]}
   * @memberof Util
   */
  getWeekRangeOfMonth(): number[][] {
    const dayOfWeek = moment().day() === 0 ? 7 : moment().day(); // 今天本周第几天
    const dayOfMonth = moment().date(); // 今天是本月第几天
    const weekRangeOfMonth = [];
    let endDay = dayOfMonth;
    let beginDay = dayOfMonth - dayOfWeek > 0 ? dayOfMonth - dayOfWeek + 1 : 1;

    while (1) {
      if (beginDay > 0) {
        weekRangeOfMonth.unshift([beginDay, endDay]);
        endDay = beginDay - 1;
        beginDay = endDay - 6;
      } else if (endDay > 0) {
        weekRangeOfMonth.unshift([1, endDay]);
        break;
      } else {
        break;
      }
    }
    return weekRangeOfMonth;
  }

  /**
   * 下载文件
   * 2018-03-07 14:40:20
   * @memberof Util
   */
  downloadFile = (path: string) => {
    var $form = this.renderer.createElement('form');
    this.renderer.setAttribute($form, 'menthod', 'get');
    this.renderer.setAttribute($form, 'action', path);
    this.renderer.appendChild(document.body, $form);
    $form.submit();
    this.renderer.removeChild(document.body, $form);
  }
}

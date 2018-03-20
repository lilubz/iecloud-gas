import { Util } from './util';

import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable()
export class FullScreenService {
  private renderer: Renderer2;
  private isFullScreenInIE: boolean = false;

  constructor(
    private rendererFactory: RendererFactory2,
    private util: Util
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  /**
   * 展示全屏
   * 2018-03-19 11:01:14
   * @author hzb
   * @param {Element} elem
   * @memberof FullScreen
   */
  requestFullscreen(elem: Element): void {
    let _elem: any = elem;
    if (_elem.requestFullscreen) {
      _elem.requestFullscreen();
    } else if (_elem.msRequestFullscreen) {
      _elem.msRequestFullscreen();
    } else if (_elem.mozRequestFullScreen) {
      _elem.mozRequestFullScreen();
    } else if (_elem.webkitRequestFullscreen) {
      _elem.webkitRequestFullscreen();
    }
  }

  /**
   * 退出全屏
   * 2018-03-19 11:00:59
   * @author hzb
   * @memberof FullScreen
   */
  exitFullScreen() {
    let document: any = window.document;
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }

  /**
   * 全屏展示切换
   * 2018-03-19 11:00:02
   * @author hzb
   * @param {Element} elem
   * @memberof FullScreen
   */
  toggleFullScreen(elem: Element) {
    let document: any = window.document;
    if (this.util.isIE()) {
      if (this.isFullScreenInIE) {
        this.exitFullScreenInIE(elem);
      } else {
        this.requestFullscreenInIE(elem);
      }
    } else {
      if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement ||
        document.msFullscreenElement) {
        this.exitFullScreen();
      } else {
        this.requestFullscreen(elem);
      }
    }
  }

  /**
   * ie下使某一个dom元素全屏
   * 2018-03-19 14:17:49
   * @author hzb
   * @param {Element} elem
   * @memberof FullScreenService
   */
  requestFullscreenInIE(elem: Element) {
    this.isFullScreenInIE = true;
    this.renderer.setStyle(elem, 'position', 'fixed');
    this.renderer.setStyle(elem, 'left', '0');
    this.renderer.setStyle(elem, 'right', '0');
    this.renderer.setStyle(elem, 'top', '0');
    this.renderer.setStyle(elem, 'bottom', '0');
    this.renderer.setStyle(elem, 'height', '100vh');
    this.renderer.setStyle(elem, 'width', '100%');
    this.renderer.setStyle(elem, 'z-index', '999999');
  }

  /**
   * ie下退出全屏
   * 2018-03-19 14:21:54
   * @author hzb
   * @memberof FullScreenService
   */
  exitFullScreenInIE(elem: Element) {
    this.isFullScreenInIE = false;
    this.renderer.removeStyle(elem, 'position');
    this.renderer.removeStyle(elem, 'left');
    this.renderer.removeStyle(elem, 'right');
    this.renderer.removeStyle(elem, 'top');
    this.renderer.removeStyle(elem, 'bottom');
    this.renderer.removeStyle(elem, 'height');
    this.renderer.removeStyle(elem, 'width');
    this.renderer.removeStyle(elem, 'z-index');
  }

}

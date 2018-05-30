import { FullScreenService } from './../../core/full-screen.service';
import { MessageService } from 'primeng/components/common/messageservice';
import {
  Component, OnInit, OnDestroy, ViewChild,
  ElementRef, Inject, Renderer2, HostListener, NgZone,
} from '@angular/core';
import { BigScreenService, } from './big-screen.service';
import { DOCUMENT } from '@angular/common';
import * as $ from 'jquery';
import { UserStateService } from '../../core/userState.service';
import { WarningMockData } from './warningMockData';
import { BigScreenVO, BigScreenCylinderCaseVO } from './BigScreenVO.model';
import { Util } from '../../core/util';
import * as moment from 'moment';
declare const echarts: any;

// declare const $: any;
@Component({
  selector: 'gas-big-screen',
  templateUrl: './big-screen.component.html',
  styleUrls: ['./big-screen.component.scss'],
})
export class BigScreenComponent implements OnInit, OnDestroy {
  document: any = document;
  resizeListener: any;
  fullscreenListener: any;
  mapContainer: any;
  @ViewChild('bigScreen') bigScreenElem: ElementRef;
  @ViewChild('screen') screenElem: ElementRef;
  @ViewChild('needInspectRateLiquidFill') needInspectRateLiquidFillElem: ElementRef;
  @ViewChild('needScrapRateLiquidFill') needScrapRateLiquidFillElem: ElementRef;
  @ViewChild('yearOnYearLiquidFill') yearOnYearLiquidFillElem: ElementRef;
  @ViewChild('monthOnMonthLiquidFill') monthOnMonthLiquidFillElem: ElementRef;
  @ViewChild('map') map: ElementRef;
  @ViewChild('pie') Pie: ElementRef;
  currentTime: any;
  List: { id: number, content: string }[] = WarningMockData;
  selectedMapRegionid: number;
  dataList: BigScreenVO = new BigScreenVO();
  scrollInterval: any;
  timeInterval: any;
  requestInterval: any;

  constructor(
    private bigScreenService: BigScreenService,
    private renderer: Renderer2,
    private userStateService: UserStateService,
    private messageService: MessageService,
    private fullScreenService: FullScreenService,
    private util: Util
  ) { }

  ngOnInit() {
    this.messageService.add({ severity: 'success', summary: '', detail: '按F11全屏展示！' });
    this.getBigData();

    this.requestInterval = setInterval(() => {
      this.getBigData();
    }, 30 * 60 * 1000);

    // 滚动内容
    this.scrollInterval = setInterval(this.move, 3000);

    // 当前时间
    this.timeInterval = setInterval(() => { this.currentTime = moment().format('YYYY-MM-DD HH:mm:ss'); }, 1000);

    // 监听f11全屏事件
    this.fullscreenListener = this.renderer.listen('window', 'keydown', (event => {
      if (event.keyCode === 122) {
        if (!this.util.isIE()) {
          event.preventDefault();
        }
        this.fullScreenService.toggleFullScreen(this.bigScreenElem.nativeElement);
      }
    }));

    // 监听屏幕尺寸改变
    this.resizeListener = this.renderer.listen('window', 'resize', (event => {
      this.setScreen();
    }));

    this.setScreen();
    // 地图
    const pieChart = echarts.init(this.Pie.nativeElement);
    pieChart.setOption(this.bigScreenService.getAffairPieOption(50, 20, 30));
    this.setLiquidFill();
    this.mapInit();
  }

  mapInit() {
    this.mapContainer = echarts.init(this.map.nativeElement);
    let user = this.userStateService.getUser();
    this.selectedMapRegionid = user.regionId;
    if (user.regionId === 330300) {
      this.mapContainer.on('click', this.clickMap);
    }
    this.setMap(this.bigScreenService.transform(this.dataList.partOfCase.caseCountOutOfDateList));
  }

  // 设置地图数据
  setMap(arr: { name: string, regionId: number, value: number }[]) {
    let zoom = 7;
    let mins = 7;
    let roam = true;
    let center = [120.37, 28];

    if (this.selectedMapRegionid !== 330300) {
      zoom = 30;
      let user = this.userStateService.getUser();
      if (user.regionId !== 330300) {
        mins = 40;
        roam = false;
      }
      for (let i = 0; i < arr.length; i++) {
        if (this.selectedMapRegionid === arr[i].regionId) {
          center = this.bigScreenService.getRegionCenter(arr[i].name);
        }
      }
    }
    this.mapContainer.setOption(this.bigScreenService.getMapOption(mins, zoom, roam, center, arr), true);
  }

  clickMap = (params) => {
    let city = params.data.name;
    if (city === '鹿城区' || city === '瓯海区' || city === '龙湾区') {
      city = '市辖区';
      this.selectedMapRegionid = 330301;
      this.getBigData(this.selectedMapRegionid);
    } else {
      this.selectedMapRegionid = params.data.regionId;
      this.getBigData(this.selectedMapRegionid);
    }
    this.setMap(this.bigScreenService.transform(this.dataList.partOfCase.caseCountOutOfDateList));
    this.mapContainer.resize();
  }

  // 设置默认屏幕缩放比例，以及偏移量
  setScreen() {
    const height = this.bigScreenElem.nativeElement ? (this.bigScreenElem.nativeElement.clientHeight / 1080) : null;
    const marginLeft = -((1920 * height) - (document.body.clientWidth - 55)) / 2;
    this.renderer.setStyle(this.screenElem.nativeElement, 'transform', `scale(${height})`);
    this.renderer.setStyle(this.screenElem.nativeElement, '-ms-transform', `scale(${height})`);
    this.renderer.setStyle(this.screenElem.nativeElement, 'margin-left', `${marginLeft}px`);
  }

  /**
   * Http请求数据
   */
  getBigData(regionId?: number) {
    this.bigScreenService.getData({ regionId: regionId || '' }).then(data => {
      if (data.status === 0) {
        // console.log(data.data);
        this.dataList = data.data;
        this.setLiquidFill();
        this.setMap(this.bigScreenService.transform(this.dataList.partOfCase.caseCountOutOfDateList));
      } else {
        // this.messageService.add({ severity: 'warn', summary: '提示信息', detail: data.msg });
      }
    }).catch(error => {
      // this.messageService.add({ severity: 'error', summary: '服务器错误,错误码:', detail: error.status });
    });
  }

  // animate滚动
  move = () => {
    $('.ul-container ul').animate(
      { 'margin-top': '-69px' }, 800, () => {
        const first = $('.ul-container ul li:first-child'); // 找到ul的第一个子元素
        $('.ul-container ul').append(first); // 插入到ul的里面最后后面
        $('.ul-container ul').css('margin-top', 0); // ulmargin-top归0
      });
  }

  // 画水滴图
  setLiquidFill() {
    const myChart = echarts.init(this.needInspectRateLiquidFillElem.nativeElement);
    const myChart1 = echarts.init(this.needScrapRateLiquidFillElem.nativeElement);
    const myChart2 = echarts.init(this.yearOnYearLiquidFillElem.nativeElement);
    const myChart3 = echarts.init(this.monthOnMonthLiquidFillElem.nativeElement);
    // 画图
    myChart.setOption(this.bigScreenService.getBlueLiquidFillOption(this.dataList.partOfGc.completionRateGcNeedInspectCurrentMonth));
    myChart1.setOption(this.bigScreenService.getOrangeLiquidFillOption(this.dataList.partOfDispatch.growthGcDispatchCountYearOnYear));
    myChart2.setOption(this.bigScreenService.getBlueLiquidFillOption(this.dataList.partOfGc.completionRateGcNeedScrapCurrentMonth));
    myChart3.setOption(this.bigScreenService.getOrangeLiquidFillOption(this.dataList.partOfDispatch.growthGcDispatchCountMonthOnMonth));
  }

  ngOnDestroy() {
    this.resizeListener();
    this.fullscreenListener();
    // this.renderer.removeAttribute(this.resize);
    clearInterval(this.scrollInterval);
    clearInterval(this.timeInterval);
    clearInterval(this.requestInterval);
    if (this.mapContainer.un) {
      this.mapContainer.un('click', () => { });
    }
  }
}

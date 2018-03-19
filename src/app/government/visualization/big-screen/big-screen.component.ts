import { MessageService } from 'primeng/components/common/messageservice';
import {
  Component, OnInit, OnDestroy, ViewChild,
  ElementRef, Inject, Renderer2, HostListener, NgZone,
} from '@angular/core';
import { BigScreenService, } from './big-screen.service';
import { DOCUMENT } from '@angular/common';
import * as $ from 'jquery';
import { UserStateService } from '../../../core/userState.service';
import { WarningMockData } from './warningMockData';

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
  fullscreenchange: any;
  mozfullscreenchange: any;
  webkitfullscreenchange: any;
  msfullscreenchange: any;
  keydownListener: any;
  chartContainer: any;
  @ViewChild('chart') chart: ElementRef;
  @ViewChild('chart1') chart1: ElementRef;
  @ViewChild('chart2') chart2: ElementRef;
  @ViewChild('chart3') chart3: ElementRef;
  @ViewChild('map') map: ElementRef;
  @ViewChild('pie') Pie: ElementRef;
  DateTime: any;
  currentTime: any;
  timer: any;
  List: { id: number, content: string }[] = WarningMockData;
  list = [];

  first11 = true;
  firstLoad = true;
  dataList = {
    regionId: null,
    regionName: '',
    partOfGc: {
      gcCountAddedCurrentMouth: 0,
      gcCountNeedInspectCurrentMonth: 0,
      gcCountNeedScrapCurrentMonth: 0,
      completionRateGcNeedInspectCurrentMonth: 0,
      completionRateGcNeedScrapCurrentMonth: 0
    },
    partOfDispatch: {
      gcDispatchCountFullCurrentDay: 0,
      gcDispatchCountFullCurrentMonth: 0,
      growthGcDispatchCountYearOnYear: 0,
      growthGcDispatchCountMonthOnMonth: 0
    },
    partOfBasicInfo: {
      gcCount: 0,
      gcCountTakeBySupplyStation: 0,
      gcCountNormal: 0,
      corpDispatcherCount: 0,
      carCount: 0,
      gcUserCount: 0
    },
    partOfCase: {
      rateCompletionCase: null,
      rateProcessingCase: null,
      rateOutOfDateCase: null,
      caseCountOutOfDateList: [
        { name: '市辖区', regionId: 330301, value: 0 },
        { name: '洞头区', regionId: 330305, value: 0 },
        { name: '永嘉县', regionId: 330324, value: 0 },
        { name: '平阳县', regionId: 330326, value: 0 },
        { name: '苍南县', regionId: 330327, value: 0 },
        { name: '文成县', regionId: 330328, value: 0 },
        { name: '泰顺县', regionId: 330329, value: 0 },
        { name: '瑞安市', regionId: 330381, value: 0 },
        { name: '乐清市', regionId: 330382, value: 0 }

      ]
    },
    partOfWarning: {
      titleWarning: null
    },
  };
  regionId: any;
  earthFirst = true; // 第一次请求接口后数据赋值给地图
  earthInit = true; // 初始化数据赋值给地图
  seconds: any;
  minutes: any;
  Hours: any;
  scrollInterval: any;
  timeInterval: any;
  requestInterval: any;
  option: any;
  option2: any;
  option3: any;
  option4: any;
  // 地图
  mapData;
  geoCoordMap = {
    '市辖区': [120.6, 27.993144],
    '洞头区': [121.15202, 27.853144],
    '永嘉县': [120.697875, 28.259922],
    '平阳县': [120.402279, 27.608007],
    '文成县': [120.084401, 27.79932],
    '苍南县': [120.532872, 27.423336],
    '泰顺县': [119.923953, 27.502516],
    '瑞安市': [120.461759, 27.804332],
    '乐清市': [120.991934, 28.219178],
  };
  max = 480;
  min = 9;
  maxSize4Pin = 100;
  minSize4Pin = 20;

  constructor(
    private _service: BigScreenService,
    private renderer: Renderer2,
    private zone: NgZone,
    private userStateService: UserStateService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.messageService.add({ severity: 'success', summary: '', detail: '按F11全屏展示！' });

    this.max = 480;
    this.min = 9;
    this.maxSize4Pin = 100;
    this.minSize4Pin = 20;
    this.getBigData();

    this.requestInterval = setInterval(() => {
      this.getBigData();
    }, 30 * 60 * 1000);
    this.earth(this.dataList.partOfCase.caseCountOutOfDateList);

    /**
     * 滚动内容
     */
    this.scrollInterval = setInterval(this.move, 3000);

    /**
     * 当前时间
     */
    this.timeInterval = setInterval(() => {
      const Hour = this.FormatNum(new Date().getHours());
      const minute = this.FormatNum(new Date().getMinutes());
      const second = this.FormatNum(new Date().getSeconds());
      const date = new Date();
      // console.log(date);
      this.DateTime = date.getFullYear() + '-' + this.FormatNum(date.getMonth() + 1)
        + '-' + this.FormatNum(date.getDate());
      // console.log(this.DateTime);
      this.currentTime = Hour + ':' + minute + ':' + second;
    }, 1000);



    /**
     * 监听浏览器宽度、高度变化
     * IE11内核一下的处理方法,由于IE11一下不存在js全屏操作,所以要特殊处理
     */
    this.keydownListener = this.renderer.listen('window', 'keydown', (event => {
      const ua = window.navigator.userAgent.toLowerCase();
      const regIE = new RegExp('msie (\\d+\\.\\d+);');
      // console.log(regIE.test(ua));
      if (regIE.test(ua) || (ua.match(/trident/) != null)) {
        // if (parseFloat(RegExp['$1']) < 11) {
        if (event.keyCode === 122) {
          if (this.first11) {
            this.setStyle();
            this.first11 = false;
          } else {
            this.removeStyle();
            this.first11 = true;
          }
        }
        // }
      } else {
        if (event.keyCode === 122) {
          event.preventDefault();
          this.toggleFullscreen();
        }
      }
    }));

    this.setScreen();
    this.resizeListener = this.renderer.listen('window', 'resize', (event => {
      this.setScreen();
      // this.setStyle();
      // this.removeStyle();
    }));
    // }
    /**
     * 监听全屏与否
     */
    this.fullscreenchange = this.renderer.listen('window', 'fullscreenchange', (event) => {
      this.update_iframe_pos();
    });
    this.mozfullscreenchange = this.renderer.listen('window', 'mozfullscreenchange', (event) => {
      this.update_iframe_pos();
    });
    this.webkitfullscreenchange = this.renderer.listen('window', 'webkitfullscreenchange', (event) => {
      this.update_iframe_pos();
    });
    this.msfullscreenchange = this.renderer.listen('window', 'msfullscreenchange', (event) => {
      this.update_iframe_pos();
    });
    /**
     * 地图
     */
    this.pie();
    this.setDrop();
  }
  /**
   * 初始化分界线
   * @function sa 在数字每隔三位加一个逗号处理
   */

  changeType(data?) {
    const str = data.toString();
    const len = str.length;
    if (len <= 3) { return str; }
    const result = len % 3;
    return result > 0 ? str.slice(0, result) + ',' +
      str.slice(result, len).match(/\d{3}/g).join(',') : str.slice(result, len).match(/\d{3}/g).join(',');
  }

  FormatNum(strTime) {
    if (strTime < 10) {
      return '0' + strTime;
    } else {
      return strTime;
    }
  }
  /**
   * 南丁格尔图参数设置
   */
  pie() {
    const myChart = echarts.init(this.Pie.nativeElement);
    const Option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} '
      },
      // 南丁格尔图下面的三个小块
      legend: {
        x: 'center',
        y: 'bottom',
        show: true,
        width: 'auto',
        height: 'auto',
        itemWidth: 30,
        itemHeight: 20,
        textStyle: {
          color: 'white',
          fontSize: 18,
        },
        data: [{
          name: '超期',
        },
        {
          name: '已完成',
        },
        {
          name: '处理中',
        }
        ]
      },
      // 内容区
      series: [
        {
          name: '执法',
          type: 'pie',
          radius: [50, 60],
          center: ['50%', '35%'],
          roseType: 'radius',
          selectedMode: 'single',
          data: [
            {
              value: 50,
              name: '已完成',
              label: {
                normal: {
                  textStyle: {
                    // color: 'rgba(255, 255, 255, 1)',
                    // fontSize: 20,
                    align: 'center',
                  },
                  formatter: [
                    '{title|{c}%}',
                    '{nu|{b}}',
                  ].join('\n'),
                  rich: {
                    title: {
                      fontSize: 20,
                      color: 'rgba(255, 255, 255, 1)',
                    },
                    nu: {
                      fontSize: 18,
                      color: 'rgba(255, 255, 255, 1)',
                    }
                  }
                },
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: 'rgba(255, 255, 255, 1)',
                    // smooth: 0.2,
                    length: 40,
                    length2: 40
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
                }
              },
              itemStyle: {
                normal: {
                  color: 'rgba(140, 117, 214, 0.74)',
                }
              },
            },
            {
              value: 29.17,
              name: '处理中',
              label: {
                normal: {
                  textStyle: {
                    color: 'rgba(255, 255, 255, 1)',
                    fontSize: 20,
                    align: 'center',
                  },
                  formatter: [
                    '{c}%',
                    '{b}',
                  ].join('\n'),
                  rich: {

                  }
                },
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: 'rgba(255, 255, 255, 1)',
                    // smooth: 0.2,
                    length: 40,
                    length2: 40
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
                }
              },
              itemStyle: {
                normal: {
                  color: 'rgb(251, 243, 32)',
                }
              },
            },
            {
              value: 20.83,
              name: '超期',
              label: {
                normal: {
                  textStyle: {
                    color: 'rgba(255, 255, 255, 1)',
                    fontSize: 20,
                    align: 'center',
                  },
                  formatter: [
                    '{c}%',
                    '{b}',
                  ].join('\n'),
                  rich: {

                  }
                },
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: 'rgba(255, 255, 255, 1)',
                    // smooth: 0.2,
                    length: 40,
                    length2: 40
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
                }
              },
              itemStyle: {
                normal: {
                  color: 'rgb(235, 89, 95)',
                }
              },
            },
          ]
        },

      ]
    };
    myChart.setOption(Option);
  }
  /**
   * 地图嵌入
   */

  earth = (arr?) => {
    this.mapData = arr;
    let zoom = 7;
    let mins = 7;
    let roam = true;
    let center = [120.37, 28];

    const user = this.userStateService.getUser();
    if (user.regionId != '330300') {
      zoom = 30;
      mins = 40;
      roam = false;
      for (let i = 0; i < arr.length; i++) {
        if (user.regionId === arr[i].regionId) {
          center = this.geoCoordMap[arr[i].name];
        }
      }
    }

    this.chartContainer = echarts.init(document.getElementById('main'));
    this.chartContainer.setOption({
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          if (typeof (params.value)[2] === 'undefined') {
            return params.name + ' : ' + params.value;
          } else {
            return params.name + ' : ' + params.value[2];
          }
        }
      },
      visualMap: {
        show: false,
        min: 0,
        max: 500,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'], // 文本，默认为数值文本
        calculable: true,
        seriesIndex: [1],
        inRange: {
          // color: ['#3B5077', '#031525'] // 蓝黑
          // color: ['#ffc0cb', '#800080'] // 红紫
          // color: ['#3C3B3F', '#605C3C'] // 黑绿
          color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
          // color: ['#23074d', '#cc5333'] // 紫红
          // color: ['#00467F', '#A5CC82'] // 蓝绿
          // color: ['#1488CC', '#2B32B2'] // 浅蓝
          // color: ['#00467F', '#A5CC82'] // 蓝绿
          // color: ['#00467F', '#A5CC82'] // 蓝绿
          // color: ['#00467F', '#A5CC82'] // 蓝绿
          // color: ['#00467F', '#A5CC82'] // 蓝绿

        }
      },
      geo: {
        show: true,
        map: 'china',
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false,
          }
        },
        scaleLimit: {
          min: mins,
          max: 40,
        },
        zoom: zoom,
        center: center,
        roam: roam,
        itemStyle: {
          normal: {
            areaColor: '#031525',
            borderColor: '#3B5077',
          },
          emphasis: {
            areaColor: '#2B91B7',
          }
        }
      },
      series: this.getSeries(this.mapData),
    }, true);

    if (user.regionId == '330300') {
      this.chartContainer.on('click', this.clickChart);
    }
  }

  clickChart = (params) => {
    let mins = 7;
    let roam = true;
    let zoom = 30;
    let city = params.data.name;
    let center = this.geoCoordMap[city];
    const user = this.userStateService.getUser();
    if (user.regionId != '330300') {
      zoom = 30;
      mins = 40;
      roam = false;
      for (let i = 0; i < this.mapData.length; i++) {
        if (user.regionId === this.mapData[i].regionId) {
          center = this.geoCoordMap[this.mapData[i].name];
        }
      }
    }
    if (city === '鹿城区' || city === '瓯海区' || city === '龙湾区') {
      city = '市辖区';
      this.regionId = '330301';
      this.getBigData(this.regionId);
    } else {
      this.regionId = params.data.regionId;
      this.getBigData(this.regionId);
    }
    this.chartContainer.setOption({
      tooltip: {
        trigger: 'item',
        formatter: function (param) {
          if (typeof (param.value)[2] === 'undefined') {
            return param.name + ' : ' + param.value;
          } else {
            return param.name + ' : ' + param.value[2];
          }
        }
      },
      visualMap: {
        show: false,
        min: 0,
        max: 500,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'], // 文本，默认为数值文本
        calculable: true,
        seriesIndex: [1],
        inRange: {
          // color: ['#3B5077', '#031525'] // 蓝黑
          // color: ['#ffc0cb', '#800080'] // 红紫
          // color: ['#3C3B3F', '#605C3C'] // 黑绿
          color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
          // color: ['#23074d', '#cc5333'] // 紫红
          // color: ['#00467F', '#A5CC82'] // 蓝绿
          // color: ['#1488CC', '#2B32B2'] // 浅蓝
          // color: ['#00467F', '#A5CC82'] // 蓝绿
          // color: ['#00467F', '#A5CC82'] // 蓝绿
          // color: ['#00467F', '#A5CC82'] // 蓝绿
          // color: ['#00467F', '#A5CC82'] // 蓝绿

        }
      },
      geo: {
        show: true,
        map: 'china',
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false,
          }
        },
        scaleLimit: {
          min: mins,
          max: 40,
        },
        zoom: zoom,
        center: center,
        roam: roam,
        itemStyle: {
          normal: {
            areaColor: '#031525',
            borderColor: '#3B5077',
          },
          emphasis: {
            areaColor: '#2B91B7',
          }
        }
      },
      series: this.getSeries(this.mapData)
    }, true);
    this.chartContainer.resize();
  }

  /**
   *地图数据处理函数
  */
  convertData(regionData) {
    const res = [];
    for (let i = 0; i < regionData.length; i++) {
      const geoCoord = this.geoCoordMap[regionData[i].name];
      if (geoCoord) {
        res.push({
          name: regionData[i].name,
          value: geoCoord.concat(regionData[i].value)
        });
      }
    }
    return res;
  }
  transform(data?) {
    return data.map(event => {
      return {
        name: event.regionName,
        value: event.caseCount,
        regionId: event.regionId
      };
    });
  }
  // 返回series
  getSeries(arr) {
    return [
      // type: 'scatter',图例
      {
        name: '预警',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: this.convertData(arr),
        symbolSize: function (val) {
          return val[2] / 10 + 1;
        },
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: true,
            fontSize: 20,
          },
          emphasis: {
            show: true
          }
        },
        itemStyle: {
          normal: {
            color: '#05C3F9'
          },

        }
      },
      // type: 'map',地图
      {
        type: 'map',
        map: 'china',
        geoIndex: 0,
        aspectScale: 0.75, // 长宽比
        showLegendSymbol: false, // 存在legend时显示
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false,
            textStyle: {
              color: '#fff'
            }
          }
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: '#031525',
            borderColor: '#3B5077',
          },
          emphasis: {
            areaColor: '#2B91B7'
          }
        },
        animation: false,
        data: arr
      },
      // type: 'scatter',点
      {
        name: '点',
        type: 'scatter',
        coordinateSystem: 'geo',
        symbol: 'pin',
        symbolSize: (val) => {
          const a = (this.maxSize4Pin - this.minSize4Pin) / (this.max - this.min);
          let b = this.minSize4Pin - a * this.min;
          b = this.maxSize4Pin - a * this.max;
          return a * val[2] + b + 14;
        },
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#fff',
              fontSize: 14,
            }
          }
        },
        itemStyle: {
          normal: {
            color: 'rgba(240,240,240,0.5)', // 标志颜色
          }
        },
        zlevel: 6,
        data: this.convertData(arr),
      },
    ];
  }

  /**
   * 设置默认屏幕缩放比例，以及偏移量
   */
  setScreen() {
    const height = document.querySelector('.bigScreen')
      ? (document.querySelector('.bigScreen').clientHeight / 1080) : null;
    // console.log(document.body.clientWidth);

    const marginLeft = -((1920 * height) - (document.body.clientWidth - 110)) / 2;
    // console.log(marginLeft);

    this.renderer.setStyle(document.querySelector('.screen'), 'transform', `scale(${height})`);
    this.renderer.setStyle(document.querySelector('.screen'), '-ms-transform', `scale(${height})`);
    this.renderer.setStyle(document.querySelector('.screen'), 'margin-left', `${marginLeft}` + 'px');
  }
  /**
   * 点击铺满全屏
   */
  // clickBtn() {
  //   const ua = window.navigator.userAgent.toLowerCase();
  //   const regIE = new RegExp('msie (\\d+\\.\\d+);');
  //   if (regIE.test(ua)) {
  //     if (parseFloat(RegExp['$1']) < 11) {
  //       alert('IE11内核以下，请按F11键全屏');
  //       // if (this.first11) {
  //       //   // const WsShell = new ActiveXObject('WScript.Shell')
  //       //   // WsShell.SendKeys('{F11}');
  //       //   this.setStyle();
  //       //   this.first11 = false;
  //       // } else {
  //       //   this.removeStyle();
  //       //   this.first11 = true;
  //       // }
  //     }
  //   } else {
  //     this.toggleFullscreen();
  //   }
  // }
  /**
   * 兼容每个浏览器全屏
   */
  toggleFullscreen() {
    if (this.document.fullscreenElement ||
      this.document.mozFullScreenElement ||
      this.document.webkitFullscreenElement ||
      this.document.msFullscreenElement) {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        this.document.msExitFullscreen();
      }
    } else {
      if (this.document.documentElement.requestFullscreen) {
        this.document.documentElement.requestFullscreen();
      } else if (this.document.documentElement.mozRequestFullScreen) {
        this.document.documentElement.mozRequestFullScreen();
      } else if (this.document.documentElement.webkitRequestFullscreen) {
        this.document.documentElement.webkitRequestFullscreen();
      } else if (this.document.body.msRequestFullscreen) {
        this.document.body.msRequestFullscreen();
      }

    }
    this.update_iframe_pos();

  }
  /**
   * 全屏后隐藏侧边栏、导航栏以及其他样式变化
   */
  update_iframe_pos() {
    if (this.document.fullscreenElement ||
      this.document.mozFullScreenElement ||
      this.document.webkitFullscreenElement ||
      this.document.msFullscreenElement) {
      this.setStyle();

    } else {
      this.removeStyle();

    }
  }
  /**
   * setStyle() 和removeStyle()
   */
  setStyle() {
    this.renderer.setStyle(document.querySelector('.header'), 'display', 'none');
    this.renderer.setStyle(document.querySelector('.menu'), 'display', 'none');
    this.renderer.setStyle(document.querySelector('.bigScreen'), 'left', '0');
    this.renderer.setStyle(document.querySelector('.bigScreen'), 'top', '0');
    this.renderer.setStyle(document.querySelector('.bigScreen'), 'height', '100vh');
    this.renderer.setStyle(document.querySelector('.bigScreen'), 'width', '100%');
    this.setScreen();
    // this.zone.run(() => { });
  }
  removeStyle() {
    this.renderer.removeStyle(document.querySelector('.header'), 'display');
    this.renderer.removeStyle(document.querySelector('.menu'), 'display');
    this.renderer.removeStyle(document.querySelector('.bigScreen'), 'left');
    this.renderer.removeStyle(document.querySelector('.bigScreen'), 'top');
    this.renderer.removeStyle(document.querySelector('.bigScreen'), 'width');
    this.renderer.removeStyle(document.querySelector('.bigScreen'), 'height');
    this.setScreen();
    // this.zone.run(() => { });
  }
  /**
   * Http请求数据
   */

  getBigData(param?) {
    this._service.getData({ regionId: param || '' }).then(data => {
      if (data.status === 0) {
        // console.log(data.data);
        this.dataList = data.data;
        this.dataList['partOfGc']['gcCountAddedCurrentMouth'] = this.changeType(data.data['partOfGc']['gcCountAddedCurrentMouth']);
        this.dataList['partOfGc']['gcCountNeedInspectCurrentMonth'] = this.changeType(data.data['partOfGc']['gcCountNeedInspectCurrentMonth']);
        this.dataList['partOfGc']['gcCountNeedScrapCurrentMonth'] = this.changeType(data.data['partOfGc']['gcCountNeedScrapCurrentMonth']);

        this.dataList['partOfGc']['completionRateGcNeedInspectCurrentMonth'] = parseFloat(data.data['partOfGc']['completionRateGcNeedInspectCurrentMonth']);
        this.dataList['partOfGc']['completionRateGcNeedScrapCurrentMonth'] = parseFloat(data.data['partOfGc']['completionRateGcNeedScrapCurrentMonth']);

        this.dataList['partOfDispatch']['gcDispatchCountFullCurrentDay'] = this.changeType(data.data['partOfDispatch']['gcDispatchCountFullCurrentDay']);
        this.dataList['partOfDispatch']['gcDispatchCountFullCurrentMonth'] = this.changeType(data.data['partOfDispatch']['gcDispatchCountFullCurrentMonth']);
        this.dataList['partOfDispatch']['growthGcDispatchCountYearOnYear'] = parseFloat(data.data['partOfDispatch']['growthGcDispatchCountYearOnYear']);
        this.dataList['partOfDispatch']['growthGcDispatchCountMonthOnMonth'] = parseFloat(data.data['partOfDispatch']['growthGcDispatchCountMonthOnMonth']);

        this.dataList['partOfBasicInfo']['gcCount'] = this.changeType(data.data['partOfBasicInfo']['gcCount']);
        this.dataList['partOfBasicInfo']['gcCountTakeBySupplyStation'] = this.changeType(data.data['partOfBasicInfo']['gcCountTakeBySupplyStation']);
        this.dataList['partOfBasicInfo']['gcCountNormal'] = this.changeType(data.data['partOfBasicInfo']['gcCountNormal']);
        this.dataList['partOfBasicInfo']['corpDispatcherCount'] = this.changeType(data.data['partOfBasicInfo']['corpDispatcherCount']);
        this.dataList['partOfBasicInfo']['carCount'] = this.changeType(data.data['partOfBasicInfo']['carCount']);
        this.dataList['partOfBasicInfo']['gcUserCount'] = this.changeType(data.data['partOfBasicInfo']['gcUserCount']);

        this.setDrop();
        if (this.earthFirst) {
          // console.log('哈');
          this.earth(this.transform(this.dataList.partOfCase.caseCountOutOfDateList));
          this.earthFirst = false;
        } else {
          return false;
        }
      } else {
        // this.messageService.add({ severity: 'warn', summary: '提示信息', detail: data.msg });
      }
    }).catch(error => {
      // this.messageService.add({ severity: 'error', summary: '服务器错误,错误码:', detail: error.status });
    });
  }

  /**
   * animate滚动
   */
  move = () => {
    $('.ul-container ul').animate(
      { 'margin-top': '-69px' }, 800, () => {
        const first = $('.ul-container ul li:first-child'); // 找到ul的第一个子元素
        $('.ul-container ul').append(first); // 插入到ul的里面最后后面
        $('.ul-container ul').css('margin-top', 0); // ulmargin-top归0
      });
  }
  /**
   * 画水滴图
  */
  setDrop() {
    const myChart = echarts.init(this.chart.nativeElement);
    const myChart1 = echarts.init(this.chart1.nativeElement);
    const myChart2 = echarts.init(this.chart2.nativeElement);
    const myChart3 = echarts.init(this.chart3.nativeElement);
    // 画图
    myChart.setOption(this.getOption1(this.dataList.partOfGc.completionRateGcNeedInspectCurrentMonth));
    myChart1.setOption(this.getOption2(this.dataList.partOfDispatch.growthGcDispatchCountYearOnYear));
    myChart2.setOption(this.getOption1(this.dataList.partOfGc.completionRateGcNeedScrapCurrentMonth));
    myChart3.setOption(this.getOption2(this.dataList.partOfDispatch.growthGcDispatchCountMonthOnMonth));
  }
  /**
   * 设置水滴图的参数
   * @param option1 蓝色水滴
   */
  getOption1(option1) {
    if (option1 < 0) {
      return {
        series: [{
          type: 'liquidFill',
          radius: '76%',
          period: '2000',
          label: {
            fontSize: 40,
            color: 'rgb(59, 77, 241)',
            position: ['50%', '30%'],
          },
          itemStyle: {
            borderColor: 'rgb(59, 77, 241)',
          },
          backgroundStyle: {
            color: 'rgb(13, 42, 66)',
          },
          data: [option1, -option1 * (0.55 / 0.6), -option1 * (0.55 / 0.6)]
          // 0.6/0.45
        }]
      };
    } else {
      return {
        series: [{
          type: 'liquidFill',
          radius: '76%',
          period: '2000',
          label: {
            fontSize: 40,
            color: 'rgb(59, 77, 241)',
            position: ['50%', '30%'],
          },
          itemStyle: {
            borderColor: 'rgb(59, 77, 241)',
          },
          backgroundStyle: {
            color: 'rgb(13, 42, 66)',
          },
          data: [option1, option1 * (0.45 / 0.6)]
          // 0.6/0.45
        }]
      };
    }
  }
  /**
   * @param option2 橙色
   */
  getOption2(option2) {
    if (option2 < 0) {
      return {
        series: [{
          type: 'liquidFill',
          radius: '76%',
          period: '2000',
          label: {
            fontSize: 40,
            color: 'rgb(132, 52, 36)',
            position: ['50%', '30%'],
          },
          itemStyle: {
            borderColor: 'rgb(255, 78, 0)',
            // shadowColor: 'rgb(255, 78, 0)',
          },
          outline: {
            itemStyle: {
              borderColor: '#a0371d',
            }
          },
          backgroundStyle: {
            color: 'rgb(13, 42, 66)',
          },

          data: [{
            value: option2,
            itemStyle: {
              color: 'rgb(132, 52, 36)',
            },
          },
          {
            value: -option2 * (0.55 / 0.6),
            itemStyle: {
              color: 'rgba(255, 78, 0,0.8)',
            }
          },
          {
            value: -option2 * (0.45 / 0.6),
            itemStyle: {
              color: 'rgba(255, 78, 0,0.8)',
            }
          },
          ]
        }]
      };
    } else {
      return {
        series: [{
          type: 'liquidFill',
          radius: '76%',
          period: '2000',
          label: {
            fontSize: 40,
            color: 'rgb(132, 52, 36)',
            position: ['50%', '30%'],
          },
          itemStyle: {
            borderColor: 'rgb(255, 78, 0)',
            // shadowColor: 'rgb(255, 78, 0)',
          },
          outline: {
            itemStyle: {
              borderColor: '#a0371d',
            }
          },
          backgroundStyle: {
            color: 'rgb(13, 42, 66)',
          },
          data: [{
            value: option2,
            itemStyle: {
              color: 'rgb(132, 52, 36)',
            },
          },
          {
            value: option2 * (0.45 / 0.6),
            itemStyle: {
              color: 'rgba(255, 78, 0,0.8)',
            }
          }]
        }]
      };

    }
  }


  ngOnDestroy() {
    this.resizeListener();
    this.fullscreenchange();
    this.mozfullscreenchange();
    this.webkitfullscreenchange();
    this.msfullscreenchange();
    this.keydownListener();
    // this.renderer.removeAttribute(this.resize);
    clearInterval(this.scrollInterval);
    clearInterval(this.timeInterval);
    clearInterval(this.requestInterval);
  }
}

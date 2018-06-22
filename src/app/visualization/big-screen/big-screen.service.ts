import { Injectable, } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { API } from '../../common/api';


@Injectable()
export class BigScreenService {
  private geoCoordMap = {
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

  constructor(private httpService: HttpService) { }

  getData(params: any): Promise<any> {
    return this.httpService.getRequest(API.getBigScreenData, params);
  }

  // 获取蓝色水滴图配置
  getBlueLiquidFillOption(value: number): any {
    if (value < 0) {
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
          data: [value, -value * (0.55 / 0.6), -value * (0.55 / 0.6)]
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
          data: [value, value * (0.45 / 0.6)]
          // 0.6/0.45
        }]
      };
    }
  }

  // 获取橘色水滴图配置
  getOrangeLiquidFillOption(value: number): any {
    if (value < 0) {
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
            value: value,
            itemStyle: {
              color: 'rgb(132, 52, 36)',
            },
          },
          {
            value: -value * (0.55 / 0.6),
            itemStyle: {
              color: 'rgba(255, 78, 0,0.8)',
            }
          },
          {
            value: -value * (0.45 / 0.6),
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
            value: value,
            itemStyle: {
              color: 'rgb(132, 52, 36)',
            },
          },
          {
            value: value * (0.45 / 0.6),
            itemStyle: {
              color: 'rgba(255, 78, 0,0.8)',
            }
          }]
        }]
      };

    }
  }

  // 获取执法统计南丁格尔图配置
  getAffairPieOption(completed: number, processing: number, outOfDate: number): any {
    return {
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
          center: ['40%', '50%'],
          roseType: 'radius',
          selectedMode: 'single',
          data: [
            {
              value: completed,
              name: '已完成',
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
              value: processing,
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
              value: outOfDate,
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
  }

  // 获取地图配置
  getMapOption(mins: number, zoom: number, roam: boolean, center: number[], data: { name: string, regionId: number, value: number }[]) {
    return {
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          if (typeof (params.value)[2] === 'undefined') {
            return params.name + '未处理案件数量 : ' + params.value;
          } else {
            return params.name + '未处理案件数量 : ' + params.value[2];
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
      series: [
        // type: 'scatter',图例
        {
          name: '预警',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: this.convertData(data),
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
          data: data
        },
        // type: 'scatter',点
        {
          name: '点',
          type: 'scatter',
          coordinateSystem: 'geo',
          symbol: 'pin',
          symbolSize: (val) => {
            const size = 0.5 * val[2] + 40
            return size > 80 ? 80 : size;
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
          data: this.convertData(data),
        },
      ],
    }
  }

  // 地图数据处理函数
  convertData(regionData: { name: string, regionId: number, value: number }[]): { name: string, value: number }[] {
    let res = [];
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

  // 获取温州市各区县的中心坐标
  getRegionCenter(regionName: string): number[] {
    return this.geoCoordMap[regionName];
  }

  // 转换地图数据属性名
  transform(data: { regionName: string, regionId: number, caseCount: number }[]): { name: string, value: number, regionId: number }[] {
    return data.map(event => {
      return {
        name: event.regionName,
        value: event.caseCount,
        regionId: event.regionId
      };
    });
  }
}

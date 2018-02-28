import { UserStateService } from './../../../../../core/userState.service';
import { StatisticCylinderService } from './../../statistic-cylinder.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { CommonRequestService } from './../../../../../core/common-request.service';
import { SelectItem } from 'primeng/primeng';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Util } from '../../../../../core/util';
import * as echarts from 'echarts';
import { zh_CN } from './../../../../../common/date-localization';
import * as moment from 'moment';
@Component({
  selector: 'gas-dispatcher-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  providers: [StatisticCylinderService]
})
export class OverviewComponent implements OnInit, AfterViewInit {
  zh = zh_CN;
  dropdown: any = {
    timeType: [
      {
        label: '最近一天',
        value: {
          count: 1,
          unit: 'day'
        }
      },
      {
        label: '最近一周',
        value: {
          count: 1,
          unit: 'weeks'
        }
      },
      {
        label: '最近一月',
        value: {
          count: 1,
          unit: 'months'
        }
      },
      {
        label: '最近三月',
        value: {
          count: 3,
          unit: 'months'
        }
      },
      {
        label: '最近半年',
        value: {
          count: 6,
          unit: 'months'
        }
      },
      {
        label: '最近一年',
        value: {
          count: 1,
          unit: 'years'
        }
      },
      {
        label: '自定义时间',
        value: null
      }
    ],
    dutyType: [
      {
        label: '储配站',
        value: 1
      },
      {
        label: '供应站',
        value: 2
      }, {
        label: '用户',
        value: 3
      }, {
        label: '送气工',
        value: 4
      },
    ]
  };
  formModel = {
    timeType: this.dropdown.timeType[2].value,
    startTime: moment().subtract(this.dropdown.timeType[2].value.count, this.dropdown.timeType[2].value.unit)['_d'],
    endTime: moment()['_d'],
    regionId: '',
  };
  pageParams = {
    timeType: this.dropdown.timeType[2].value,
    startTime: moment().subtract(this.dropdown.timeType[2].value.count, this.dropdown.timeType[2].value.unit)['_d'],
    endTime: moment()['_d'],
    regionId: '',
  };
  dataTable = {
    list: [],
    option: [5, 10, 20, 40],
    total: 0,
    first: 0,
    pageSize: 10
  };
  @ViewChild('dispatcherChart') dispatcherChart: ElementRef;

  dispatcherCylinderList = [];
  dispatcherCylinderListFilter = [];

  regionList: SelectItem[] = [];
  selectedRegion = '';
  deliveryDateRange: SelectItem[] = [
    { label: '今年', value: 'year' },
    { label: '本月', value: 'month' },
  ];
  selectedDateRange = this.deliveryDateRange[0].value;

  calculateTotal = this.utilService.calculateTotal;
  loading = false;
  constructor(
    private commonRequestService: CommonRequestService,
    private statisticCylinderService: StatisticCylinderService,
    private messageService: MessageService,
    private userStateService: UserStateService,
    private utilService: Util,
  ) { }

  ngOnInit() {
    this.commonRequestService.getRegions().then(data => {
      if (data.status === 0) {
        this.regionList = data.data.map(item => ({ label: item.regionName, value: item.regionId }));
        // if (this.regionList.length > 1) {
        //   this.regionList.unshift(
        //     { label: this.userStateService.getUser().regionName, value: this.userStateService.getUser().regionId });
        //   this.regionList.unshift(
        //     { label: '温州市', value: '' });
        // }
        this.regionList.unshift({ label: '全部', value: '' });
        this.selectedRegion = this.regionList[0].value;
        this.formModel.regionId = this.regionList[0].value;
        this.onSubmit();
        this.getDeliveryStatistic();
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取区域列表失败', detail: data.msg });
      }
    });

    this.loading = true;
    this.getDispatcherCylinder();
  }
  onDropdownTimeTypeChange() {
    if (this.formModel.timeType) {
      this.formModel.startTime = moment().subtract(this.formModel.timeType.count, this.formModel.timeType.unit)['_d'];
    } else {
      this.formModel.startTime = moment().subtract(1, 'months')['_d'];
    }
    this.formModel.endTime = moment()['_d'];
  }
  onSubmit() {
    this.loading = true;
    this.getDataTableList({
      startTime: moment(this.formModel.startTime).format('YYYY-MM-DD HH:mm:ss'),
      endTime: moment(this.formModel.endTime).format('YYYY-MM-DD HH:mm:ss'),
      regionId: this.formModel.regionId,
    });
    Object.assign(this.pageParams, this.formModel);
    this.dataTable.first = 0;
  }
  onPageChange($event) {
    this.dataTable.list = [];
    this.onPageChange = event => {
      const page = {
        pageSize: event.rows,
        pageNumber: event.first / event.rows + 1
      };
      this.getDataTableList({
        startTime: moment(this.pageParams.startTime).format('YYYY-MM-DD HH:mm:ss'),
        endTime: moment(this.pageParams.endTime).format('YYYY-MM-DD HH:mm:ss'),
        regionId: this.formModel.regionId,
      });
    };
  }
  getDataTableList(params?) {
    this.statisticCylinderService.corpDispatcherSendAndReceiveList(params)
      .then(data => {
        this.loading = false;
        if (data.status === 0) {
          this.dataTable.list = data.data;
          Object.assign(this.formModel, this.pageParams);
        } else {
          this.dataTable.list = [];
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
  ngAfterViewInit() {
    // this.render();
  }

  // 获取配送量统计
  getDeliveryStatistic() {
    this.statisticCylinderService.getDeliveryStatistic({
      regionId: this.selectedRegion,
      range: this.selectedDateRange
    }).then(data => {
      if (data.status === 0) {
        this.render(this.getXAxis(data.data.length), data.data.map(item => item.dispatcherCount));
      } else {
        // this.messageService.add({ severity: 'warn', summary: '获取配送量失败', detail: data.msg });
        this.render([''], [0]);
      }
    });
  }

  getXAxis(length): string[] {

    if (this.selectedDateRange === 'year') {
      const months = [
        '一月',
        '二月',
        '三月',
        '四月',
        '五月',
        '六月',
        '七月',
        '八月',
        '九月',
        '十月',
        '十一月',
        '十二月'
      ];
      return months.slice(0, length);
    } else if (this.selectedDateRange === 'month') {
      const month = moment().month() + 1;
      const weekRange = this.utilService.getWeekRangeOfMonth();
      const weeks = [
        '第一周',
        '第二周',
        '第三周',
        '第四周',
        '第五周',
      ];
      for (let i = 0; i < weekRange.length; i++) {
        weeks[i] = weeks[i] + `（${month}.${weekRange[i][0]} - ${month}.${weekRange[i][1]}）`;
      }
      return weeks.slice(0, length);
    }
  }

  // 获取送气工气瓶统计
  getDispatcherCylinder() {
    this.statisticCylinderService.getDispatcherCylinderCount().then(data => {
      if (data.status === 0) {
        this.dispatcherCylinderList = data.data;
        this.dispatcherCylinderListFilter = data.data;
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取送气工气瓶统计失败', detail: data.msg });
      }
      // this.loading = false;
    });
  }

  render(xAxis: string[], data: number[]) {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(this.dispatcherChart.nativeElement);

    // 指定图表的配置项和数据
    const option = {
      title: {
        text: ''
      },
      tooltip: {},
      xAxis: {
        data: xAxis
      },
      yAxis: {},
      series: [{
        name: '配送量',
        type: 'bar',
        color: '#FC9738',
        data: data
      }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }

  selectStatisticRegion(regionId) {
    if (regionId === '') {
      this.dispatcherCylinderListFilter = this.dispatcherCylinderList;
      return;
    }

    this.dispatcherCylinderListFilter = this.dispatcherCylinderList.filter(item => {
      if (item.regionId === regionId) {
        return true;
      }
      return false;
    });
  }
}

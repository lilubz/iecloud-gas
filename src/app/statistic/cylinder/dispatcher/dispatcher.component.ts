import { UserStateService } from './../../../core/userState.service';
import { StatisticCylinderService } from './../statistic-cylinder.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { CommonRequestService } from './../../../core/common-request.service';
import { SelectItem } from 'primeng/primeng';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { UtilService } from '../../../core/util.service';
import * as echarts from 'echarts';
import { RoleType } from '../../../core/RoleType';

@Component({
  selector: 'gas-dispatcher',
  templateUrl: './dispatcher.component.html',
  styleUrls: ['./dispatcher.component.css']
})
export class DispatcherComponent implements OnInit, AfterViewInit {
  @ViewChild('dispatcherChart') dispatcherChart: ElementRef;
  permissionRoles: RoleType[] = [
    RoleType.Government
  ];

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
    private utilService: UtilService,
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
        this.getDeliveryStatistic();
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取区域列表失败', detail: data.msg });
      }
    });

    this.loading = true;
    this.getDispatcherCylinder();
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
        this.messageService.add({ severity: 'warn', summary: '获取配送量失败', detail: data.msg });
        this.render([], []);
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
      const weeks = [
        '第一周',
        '第二周',
        '第三周',
        '第四周',
      ];
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
      this.loading = false;
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

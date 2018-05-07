import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { IndustryAnalyzeService } from './industry-analyze.service';
import * as echarts from 'echarts';

@Component({
  selector: 'gas-industry-analyze',
  templateUrl: './industry-analyze.component.html',
  styleUrls: ['./industry-analyze.component.scss'],
  providers: [IndustryAnalyzeService]
})
export class IndustryAnalyzeComponent implements OnInit {
  hidden = true;
  charts = {
    option: null,
    element: null,
    instance: null
  };
  dropdown = {
    region: [
      {
        label: '全部',
        value: ''
      }
    ],
    corp: [
      {
        label: '全部',
        value: ''
      }
    ],
    range: [
      {
        label: '今年',
        value: 'year'
      },
      {
        label: '本月',
        value: 'month'
      }
    ],
    default: [
      {
        label: '全部',
        value: ''
      }
    ],
  };
  formModel = {
    regionId: '',
    corpId: '',
    range: 'year'
  };
  constructor(
    private _service: IndustryAnalyzeService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.getDropdownRegion();
    this.getDropdownForCorpInfoInRegion({ regionId: ''});
    this.charts.element = document.getElementById('charts');
    this.charts.instance = echarts.init(this.charts.element);
    this.drawingCharts([], []);
  }
  onSubmit() {
    this.hidden = false;
    this.charts.instance.showLoading();
    this.getChartsData({
      regionId: this.formModel.regionId,
      enterpriseNumber: this.formModel.corpId,
      range: this.formModel.range
    });
  }
  drawingCharts(xData, yData) {
    this.charts.option = {
      title: {
        text: '行业运行分析图'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: xData
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '充装量（瓶）',
          nameLocation: 'end'
        }
      ],
      series: [
        {
          name: '充装量',
          type: 'line',
          stack: '总量',
          areaStyle: { normal: {} },
          data: yData
        }
      ]
    };
    this.charts.instance.setOption(this.charts.option);
    this.hidden = xData.length <= 0;
  }
  onChangeAreaID(event) {
    this.dropdown.corp = this.dropdown.default;
    this.formModel.corpId = '';
    this.getDropdownForCorpInfoInRegion({ regionId: event.value });
  }
  getDropdownForCorpInfoInRegion(params?) {
    this._service.getDropdownForCorpInfoInRegion(params).then(data => {
      if (data.status === 0) {
        this.dropdown.corp = this.dropdown.default.concat(data.data.map((item) => ({
          label: item.enterpriseName,
          value: item.enterpriseNumber,
        })));
      } else {
        this.dropdown.corp = this.dropdown.default;
        this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
      }
    });
  }

  getDropdownRegion() {
    this._service.listRegionInfo({}).then(data => {
      if (data.status === 0) {
        this.dropdown.region = this.dropdown.default.concat(data.data.map((item) => ({
          label: item.regionName,
          value: item.regionId
        })));
      } else {
        this.dropdown.region = this.dropdown.default;
        this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
      }
    });
  }

  getChartsData(params?) {
    this._service.fillingFluctuations(params).then(data => {
      if (data.status === 0) {
        const xData = [];
        const yData = [];
        const ordinalArr = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
        if (this.formModel.range === 'year') { // 查询的是年
          const currentMonth = new Date().getMonth() + 1;
          for (let i = 1; i <= currentMonth; i++) {
            const target = data.data.find((item, index) => item.number === (i + ''));
            if (target) {
              xData.push(ordinalArr[i] + '月');
              yData.push(target.fillingCount);
            }
          }
        } else if (this.formModel.range === 'month') { // 查询的是月
          data.data.forEach((item, i) => {
            xData.push('第' + ordinalArr[i + 1] + '周');
            yData.push(item.fillingCount);
          });
        }
        this.drawingCharts(xData, yData);
      } else {
        this.drawingCharts([], []);
        this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
      }
      this.charts.instance.hideLoading();
    });
  }
}

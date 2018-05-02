import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { AnalysisService } from './analysis.service';
import { Util } from '../../../core/util';
import { RoleType } from '../../../common/RoleType';
import * as moment from 'moment';

@Component({
  selector: 'gas-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss'],
  providers: [AnalysisService]
})
export class AnalysisComponent implements OnInit {
  RoleType = RoleType;
  visible = false;
  dropdown = {
    year: [],
    month: [],
    week: []
  };
  config = { // 每种报表所调用的节口
    '1': 'loadTaskList',
    '2': 'loadNewPipelineGasUsers',
    '3': 'loadRegulatoryStatistics',
    '4': 'loadInformationSupervisionStatisticsByWeek'
  };
  formModel = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    week: moment().weeks(),
    type: 0
  };
  constructor(
    private messageService: MessageService,
    private _service: AnalysisService,
    private utilService: Util,
  ) { }

  ngOnInit() {
    this.fillRange();
  }

  openDialog(type) {
    this.formModel.type = type;
    this.visible = true;
  }
  fillRange() {
    const minYear = 2010,
      maxYear = 2050,
      ordinalArr = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];

    for (let i = minYear; i <= maxYear; i++) { // 填充年的下拉选项
      this.dropdown.year.push({
        label: i + '年',
        value: i
      });
    }

    for (let j = 1; j <= 12; j++) { // 填充月的下拉选项
      this.dropdown.month.push({
        label: ordinalArr[j] + '月',
        value: j
      });
    }

    for (let k = 1; k <= 55; k++) { // 填充周的下拉选项
      this.dropdown.week.push({
        label: '第' + k + '周',
        value: k
      });
    }

  }

  // onYearChange() { // 填充周的下拉选项， 有Bug。
  //   const year = moment([this.formModel.year]),
  //     firstWeekStart = year,
  //     result = [],
  //     transform = (start, end, i) => {
  //       return {
  //         label: `第${i}周（${start.format('M月D日')}--${end.format('M月D日')}）`,
  //         value: i
  //       };
  //     };
  //   let firstWeekEnd = moment([this.formModel.year]);
  //   while (firstWeekEnd.weekday() !== 0) {
  //     firstWeekEnd = firstWeekEnd.add(1, 'days');
  //   }
  //   let week = 1,
  //     startTime = year,
  //     endTime = firstWeekEnd;
  //   while (endTime.year() === this.formModel.year) {
  //     result.push(transform(startTime, endTime, week));
  //     startTime = moment(startTime.add(7, 'days')['_d']);
  //     endTime = moment(endTime.add(7, 'days')['_d']);
  //     week += 1;
  //   }
  //   this.dropdown.week = result;
  //   this.formModel.week = moment().weeks();
  // }

  getUrl() {
    const params = {
      year: this.formModel.year,
      month: this.formModel.month,
    };
    if (this.formModel.type === 4) {
      delete params.month;
      params['week'] = this.formModel.week;
    }
    this._service.getUrl(params, this.config[this.formModel.type])
      .then(data => {
        if (data.status === 0) {
          window.location.href = data.data;
          this.visible = false;
        } else {
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { zh_CN } from './../../../../common/date-localization';
import { StatisticCylinderService } from './../../statistic-cylinder.service';
import * as moment from 'moment';
import { Util } from '../../../../core/util';

@Component({
  selector: 'gas-dispatcher-details',
  templateUrl: './dispatcher-details.component.html',
  styleUrls: ['./dispatcher-details.component.css'],
  providers: [StatisticCylinderService]
})
export class DispatcherDetailsComponent implements OnInit {

  loading = false;
  id: any;
  changeEndTime = false;
  zh = zh_CN;
  currentDate: Date = new Date();
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
  dataTable = {
    list: [],
    option: [10, 20, 40, 80],
    total: 0,
    first: 0,
    pageSize: 40
  };
  formModel = {
    dutyType: 1,
    timeType: this.dropdown.timeType[2].value,
    startTime: moment().subtract(this.dropdown.timeType[2].value.count, this.dropdown.timeType[2].value.unit)['_d'],
    endTime: moment()['_d'],
  };
  pageParams = {
    dutyType: 1,
    timeType: this.dropdown.timeType[2].value,
    startTime: moment().subtract(this.dropdown.timeType[2].value.count, this.dropdown.timeType[2].value.unit)['_d'],
    endTime: moment()['_d'],
  };
  constructor(
    private routerInfo: ActivatedRoute,
    private router: Router,
    private _service: StatisticCylinderService,
    public messageService: MessageService,
    private util: Util
  ) { }
  ngOnInit() {
    if (this.routerInfo.queryParams['value'].id) {
      this.id = this.routerInfo.queryParams['value'].id;
      this.onSubmit();
    }
  }

  onDropdownTimeTypeChange() {
    if (this.formModel.timeType) {
      this.changeEndTime = false;
      this.formModel.startTime = moment().subtract(this.formModel.timeType.count, this.formModel.timeType.unit)['_d'];
    } else {
      this.formModel.startTime = moment().subtract(1, 'months')['_d'];
    }
    this.formModel.endTime = moment()['_d'];
  }
  onSubmit() {
    this.loading = true;
    if (this.changeEndTime) {
      this.getDataTableList({
        startTime: this.util.formatTime(this.formModel.startTime),
        endTime: this.util.formatTime(this.formModel.endTime, 'end'),
        enterpriseNumber: this.id,
      });
    } else {
      this.getDataTableList({
        startTime: this.util.formatTime(this.formModel.startTime),
        endTime: this.util.formatTime(this.formModel.endTime),
        enterpriseNumber: this.id,
      });
    }
    Object.assign(this.pageParams, this.formModel);
  }
  onPageChange($event) {
    this.dataTable.list = [];
    this.onPageChange = event => {
      const page = {
        pageSize: event.rows,
        pageNumber: event.first / event.rows + 1
      };
      this.getDataTableList({
        startTime: this.util.formatTime(this.pageParams.startTime, 'start'),
        endTime: this.util.formatTime(this.pageParams.endTime, 'end'),
      });
    };
  }
  link(rowData, type) {
    if (rowData.status === 0) { // 状态正常
      const queryParams = {
        liabilitySubjectType: 3,
        beginTime: this.formModel.startTime.getTime(),
        endTime: this.formModel.endTime.getTime(),
        liabilityName: rowData.stationName,
        liabilityNumber: rowData.stationId,
        type,
      };
      this.router.navigate(
        ['/delivery/cylinder-trace/cylinder-record/3'],
        { relativeTo: this.routerInfo, queryParams }
      );
      return false;
    } else if (rowData.status === 3) { // 在黑名单中
      this.messageService.add({ severity: 'warn', summary: '', detail: '黑名单的送气工，无法查看流转信息' });
    }
  }
  getDataTableList(params?) {
    this._service.dispatcherSendAndReceiveCount(params)
      .then(data => {
        this.loading = false;
        if (data.status === 0) {
          this.dataTable.list = data.data;
          Object.assign(this.formModel, this.pageParams);
        } else {
          this.dataTable.list = [];
          this.dataTable.total = 0;
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }

  exportDispathcerStatistic = () => {
    this._service.dispatcherSendAndReceiveCount({
      startTime: this.util.formatTime(this.formModel.startTime, 'start'),
      endTime: this.util.formatTime(this.formModel.endTime, 'end'),
      enterpriseNumber: this.id,
      resultType: 'excel'
    }).then(data => {
      if (data.status === 0) {
        this.util.downloadFile(data.data);
      } else {
        this.messageService.add({ severity: 'warn', summary: '', detail: data.msg });
      }
    });
  }
}

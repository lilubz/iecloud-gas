import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoryWarningService } from './history-warning.service';
import { zh_CN } from './../../common/date-localization';
import { MessageService } from 'primeng/components/common/messageservice';
import * as moment from 'moment';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'gas-history-warning',
  templateUrl: './history-warning.component.html',
  styleUrls: ['./history-warning.component.css'],
  providers: [HistoryWarningService]
})
export class HistoryWarningComponent implements OnInit {
  type;
  loading = false;
  firstFlag = true;
  visible = false;
  zh = zh_CN;
  dropdown = {
    default: [
      {
        label: '全部',
        value: ''
      }
    ],
    region: [
      {
        label: '全部',
        value: ''
      }
    ],
    state: [
      {
        label: '全部',
        value: '2'
      },
      {
        label: '空瓶',
        value: '0'
      },
      {
        label: '重瓶',
        value: '1'
      },
    ]
  };
  dataTableOverview = {
    list: [],
    option: [10, 20, 40, 80],
    total: 0,
    first: 0,
    pageSize: 40,
    pageNumber: 1
  };
  dataTableDetail = {
    list: [],
    option: [5],
    total: 0,
    first: 0,
    pageSize: 40,
    pageNumber: 1,
    liabilityId: '', // 责任类型ID
    boolIsFull: 0  // 0空瓶预警，1重瓶预警，2不限
  };
  formModel = {
    state: '2',
    region: '',
    startTime: moment().subtract(365, 'day')['_d'],
    endTime: moment()['_d'],
  };
  pageParams = {
    state: '2',
    region: '',
    startTime: moment().subtract(365, 'day')['_d'],
    endTime: moment()['_d'],
  };
  constructor(
    private routerInfo: ActivatedRoute,
    private _service: HistoryWarningService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.getDropdownRegion();
    this.routerInfo.paramMap.switchMap((params) => {
      return Promise.resolve(params);
    }).subscribe((params) => {
      this.type = parseInt(params.get('type'), 10);
      this.firstFlag = true;
      this.dataTableOverview.list = [];
      this.dataTableOverview.first = 0;
      this.dataTableOverview.total = 0;
    });
  }

  onSubmit() {
    this.dataTableOverview.pageNumber = 1;
    this.dataTableOverview.first = 0;
    Object.assign(this.pageParams, this.formModel);
    this.loading = true;
    this.getDataTableOverviewList({
      boolIsFull: this.formModel.state,
      liabilityTypeId: this.type,
      regionId: this.formModel.region,
      startTime: moment(this.formModel.startTime).format('YYYY-MM-DD') + ' 00:00:00',
      endTime: moment(this.formModel.endTime).format('YYYY-MM-DD') + ' 23:59:59',
      pageNumber: this.dataTableOverview.pageNumber,
      pageSize: this.dataTableOverview.pageSize
    });
  }
  onOpenDialogDetail(rowData) {
    this.dataTableDetail.pageNumber = 1;
    this.dataTableDetail.first = 0;
    this.dataTableDetail.liabilityId = rowData.liabilityId;
    this.dataTableDetail.boolIsFull = rowData.boolIsFull ? 1 : 0;
    this.getDataTableDetailList({
      boolIsFull: this.dataTableDetail.boolIsFull ,
      liabilityId: this.dataTableDetail.liabilityId,
      liabilityTypeId: this.type,
      pageNumber: this.dataTableDetail.pageNumber,
      pageSize: this.dataTableDetail.pageSize,
      startTime: moment(this.pageParams.startTime).format('YYYY-MM-DD') + ' 00:00:00',
      endTime: moment(this.pageParams.endTime).format('YYYY-MM-DD') + ' 23:59:59',
    });
  }

  onPageChangeOverview(event) {
    if (this.firstFlag) {
      this.dataTableOverview.list = [];
      this.firstFlag = false;
    } else {
      this.loading = true;
      this.dataTableOverview.pageNumber = event.first / event.rows + 1;
      this.dataTableOverview.pageSize = event.rows;
      this.getDataTableOverviewList({
        boolIsFull: this.formModel.state,
        liabilityTypeId: this.type,
        regionId: this.pageParams.region,
        startTime: moment(this.pageParams.startTime).format('YYYY-MM-DD') + ' 00:00:00',
        endTime: moment(this.pageParams.endTime).format('YYYY-MM-DD') + ' 23:59:59',
        pageNumber: this.dataTableOverview.pageNumber,
        pageSize: this.dataTableOverview.pageSize
      });
    }
  }
  onPageChangeDetail($event) {
    this.dataTableDetail.list = [];
    this.onPageChangeDetail = event => {
      this.dataTableDetail.pageNumber = event.first / event.rows + 1;
      this.dataTableDetail.pageSize = event.rows;
      this.getDataTableDetailList({
        boolIsFull: this.dataTableDetail.boolIsFull,
        liabilityId: this.dataTableDetail.liabilityId,
        liabilityTypeId: this.type,
        pageNumber: this.dataTableDetail.pageNumber,
        pageSize: this.dataTableDetail.pageSize,
        startTime: moment(this.pageParams.startTime).format('YYYY-MM-DD') + ' 00:00:00',
        endTime: moment(this.pageParams.endTime).format('YYYY-MM-DD') + ' 23:59:59',
      });
    };
  }

  // http请求
  getDataTableOverviewList(params?) {
    this._service.listGcThresholdHistoryWarning(params)
      .then(data => {
        this.loading = false;
        if (data.status === 0) {
          Object.assign(this.formModel, this.pageParams);
          this.dataTableOverview.list = data.data.list;
          this.dataTableOverview.total = data.data.total;
        } else {
          this.dataTableOverview.list = [];
          this.dataTableOverview.total = 0;
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }

  getDataTableDetailList(params?) {
    this._service.listGcThresholdHistoryWarningDetail(params)
      .then(data => {
        if (data.status === 0) {
          this.dataTableDetail.list = data.data.list;
          this.dataTableDetail.total = data.data.total;
          this.visible = true;
        } else {
          this.dataTableDetail.list = [];
          this.dataTableDetail.total = 0;
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }

  getDropdownRegion(params?) {
    this._service.listRegionInfo(params)
      .then(data => {
        if (data.status === 0) {
          this.dropdown.region = this.dropdown.default.concat(data.data.map(item => ({
            label: item.regionName,
            value: item.regionId
          })));
          this.formModel.region = this.dropdown.region[0].value;
        } else {
          this.dropdown.region = this.dropdown.default.concat([]);
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
}

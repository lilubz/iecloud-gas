import { Component, OnInit } from '@angular/core';
import { EnterpriseService, } from '../enterprise.service';
import { CommonRequestService } from '../../../core/common-request.service';
import { zh_CN } from '../../../common/date-localization';
import { MessageService } from 'primeng/components/common/messageservice';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { Util } from '../../../core/util';

@Component({
  selector: 'gas-enterprise',
  templateUrl: './enterprise-list.component.html',
  styleUrls: ['./enterprise-list.component.scss']
})
export class EnterpriseListComponent implements OnInit {
  loading = false;
  zh = zh_CN;
  dropdown: any = {
    default: [
      {
        label: '全部',
        value: '',
      }
    ],
    region: []
  };
  enterpriseList: any[] = [];
  dataTable = {
    list: [],
    option: [10, 20, 40, 80],
    total: 0,
    first: 0,
    pageSize: 40,
    pageNumber: 1
  };
  formModel = {
    regionId: '',
    enterpriseName: '',
    person: '',
    // phone: '',
    startTime: moment('2012-01-01')['_d'],
    endTime: moment()['_d'],
  };
  pageParams = {
    regionId: '',
    enterpriseName: '',
    person: '',
    // phone: '',
    startTime: moment('2012-01-01')['_d'],
    endTime: moment()['_d'],
  };

  constructor(
    private _service: EnterpriseService,
    private commonRequestService: CommonRequestService,
    private messageService: MessageService,
    private router: Router,
    private util: Util,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getDropdownRegion();
    const queryParams = this.activatedRoute.queryParams['value'];
    if (JSON.stringify(queryParams) !== '{}') {
      this.formModel.enterpriseName = queryParams.enterpriseName || '';
      this.formModel.regionId = queryParams.regionId || '';
      this.formModel.startTime = new Date(0);
    }
    this.onSubmit();
  }
  onSubmit() {
    this.dataTable.pageNumber = 1;
    this.dataTable.first = 0;
    Object.assign(this.pageParams, this.formModel);
    this.getDataTableList();
  }
  onPageChange($event) {
    this.dataTable.list = [];
    this.onPageChange = event => {
      this.dataTable.pageSize = event.rows;
      this.dataTable.pageNumber = event.first / event.rows + 1;
      this.getDataTableList();
    };
  }
  /**
   * 获取区域
  */
  getDropdownRegion() {
    this.commonRequestService.getRegions().then(data => {
      if (data.status === 0) {
        this.dropdown.region = this.dropdown.default.concat(data.data.map(item => ({
          label: item.regionName,
          value: item.regionId
        })));
      } else {
        this.dropdown.region = this.dropdown.default.concat([]);
      }
    });
  }
  /**
   * 查询
  */
  getDataTableList() {
    this.loading = true;
    this._service.listCorp({
      regionId: this.pageParams.regionId,
      corpName: this.pageParams.enterpriseName,
      legalRepresentative: this.pageParams.person,
      releaseTimeStart: this.util.formatTime(this.pageParams.startTime, 'start'),
      releaseTimeEnd: this.util.formatTime(this.pageParams.endTime, 'end'),
      // serviceLine: this.pageParams.phone,
      pageSize: this.dataTable.pageSize,
      pageNumber: this.dataTable.pageNumber
    }).then(data => {
      this.loading = false;
      Object.assign(this.formModel, this.pageParams);
      if (data.status === 0) {
        this.dataTable.list = data.data.list;
        this.dataTable.total = data.data.total;
      } else {
        this.dataTable.list = [];
        this.dataTable.total = 0;
        this.messageService.add({ severity: 'warn', summary: '提示信息', detail: data.msg });
      }
    });
  }
}

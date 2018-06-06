import { Component, OnInit } from '@angular/core';
import { EnterpriseDetailService, } from './enterprise-detail.service';
import { CommonRequestService } from '../../../core/common-request.service';
import { zh_CN } from '../../../common/date-localization';
import { MessageService } from 'primeng/components/common/messageservice';
import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router';
import { Util } from '../../../core/util';

@Component({
  selector: 'gas-enterprise',
  templateUrl: './enterprise-detail.component.html',
  styleUrls: ['./enterprise-detail.component.scss']
})
export class EnterpriseDetailComponent implements OnInit {
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
    startTime: moment().subtract(3, 'years')['_d'],
    endTime: moment()['_d'],
  };
  pageParams = {
    regionId: '',
    enterpriseName: '',
    person: '',
    // phone: '',
    startTime: moment().subtract(3, 'years')['_d'],
    endTime: moment()['_d'],
  };

  constructor(
    private _service: EnterpriseDetailService,
    private commonRequestService: CommonRequestService,
    private messageService: MessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private util: Util
  ) { }

  ngOnInit() {
    if (this.activatedRoute.queryParams['value']) {
      this.pageParams.regionId = this.activatedRoute.queryParams['value'].regionId;
      this.getDataTableList();
    }
    this.getDropdownRegion();
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

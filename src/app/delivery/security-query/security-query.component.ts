import { Component, OnInit } from '@angular/core';
import { zh_CN } from '../../common/date-localization';
import { MessageService } from 'primeng/components/common/messageservice';
import { CommonRequestService } from '../../core/common-request.service';

import * as moment from 'moment';
import { SecurityQueryService } from './security-query.service';
import { Util } from '../../core/util';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gas-security-query',
  templateUrl: './security-query.component.html',
  styleUrls: ['./security-query.component.scss'],
  providers: [SecurityQueryService, CommonRequestService]
})
export class SecurityQueryComponent implements OnInit {
  visible = false;
  imgArray: object[] = [{}];
  currentImgUrl = '';
  loading = false;
  zh = zh_CN;
  dropdown: any = {
    default: [
      {
        label: '全部',
        value: '',
      }
    ],
    region: [],
    enterprise: [],
    enclosures: [
      {
        label: '全部',
        value: '',
      },
      {
        label: '有附件',
        value: '1'
      },
      {
        label: '无附件',
        value: '0'
      }
    ],
    checkState: [
      {
        label: '全部',
        value: '',
      },
      {
        label: '正常',
        value: '1'
      },
      {
        label: '异常',
        value: '0'
      }
    ]
  };
  dataTable = {
    list: [],
    option: [10, 20, 40, 80],
    total: 0,
    first: 0,
    pageSize: 40,
    pageNumber: 1
  };
  formModel = {
    region: '',
    enterprise: '',
    enclosures: '',
    checkState: '',
    userNumber: '',
    startTime: moment().subtract(1, 'years')['_d'],
    endTime: moment()['_d'],
  };
  pageParams = {
    region: '',
    enterprise: '',
    enclosures: '',
    checkState: '',
    startTime: moment().subtract(3, 'years')['_d'],
    endTime: moment()['_d'],
  };
  constructor(
    private _service: SecurityQueryService,
    private commonRequestService: CommonRequestService,
    private messageService: MessageService,
    private util: Util,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getDropdownRegion();
    this.getDropdownEnterprise();
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      if (JSON.stringify(queryParams) !== '{}') {
        this.formModel.region=queryParams.regionId || '';
        const data = {
          userNumber: queryParams.userNumber || '',
        }
        this.onSubmit(data);
      }
    });
  }

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

  getDropdownEnterprise() {
    this.commonRequestService.listCorpInfoInRegion({ regionId: this.formModel.region }).then(data => {
      if (data.status === 0) {
        this.dropdown.enterprise = this.dropdown.default.concat(data.data.map(item => ({
          label: item.enterpriseName,
          value: item.enterpriseNumber
        })));
      } else {
        this.dropdown.enterprise = this.dropdown.default.concat([]);
      }
    });
  }

  onSubmit(param = {}) {
    this.dataTable.pageNumber = 1;
    this.dataTable.first = 0;
    Object.assign(this.pageParams, this.formModel);
    this.getDataTableList(Object.assign(this.formModel, param));
  }

  onRegionChange() {
    this.dropdown.enterprise = this.dropdown.enterprise.concat(this.dropdown.default);
    this.formModel.enterprise = '';
    this.getDropdownEnterprise();
  }

  onPageChange($event) {
    this.dataTable.list = [];
    this.onPageChange = event => {
      this.dataTable.pageSize = event.rows;
      this.dataTable.pageNumber = event.first / event.rows + 1;
      this.getDataTableList();
    };
  }

  showImg(imageUrl) {
    this.visible = true;
    this.imgArray = imageUrl.split(',');
    this.imgArray = this.imgArray.map(item => ({
      url: item
    }));
  }

  getDataTableList(param?) {
    this.loading = true;
    this._service.securityCheckInquiries({
      regionId: this.pageParams.region,
      enterpriseNumber: this.pageParams.enterprise,
      haveEnclosures: this.pageParams.enclosures,
      securityCheckState: this.pageParams.checkState,
      beginTime: this.util.formatTime(this.pageParams.startTime, 'start'),
      endTime: this.util.formatTime(this.pageParams.endTime, 'end'),
      userNumber: param.userNumber,
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

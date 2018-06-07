import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { CylinderListService } from './cylinder-list.service';
import { MessageService } from 'primeng/components/common/messageservice';
@Component({
  selector: 'gas-cylinder-list',
  templateUrl: './cylinder-list.component.html',
  styleUrls: ['./cylinder-list.component.scss'],
  providers: [CylinderListService]
})

export class CylinderListComponent implements OnInit {
  loading = false;
  dropdown = {
    region: [],
    company: [
      {
        label: '全部 ',
        value: ''
      }
    ],
    make: [
      {
        label: '全部 ',
        value: ''
      }
    ],
    status: [
      {
        label: '全部 ',
        value: ''
      },
      {
        label: '正常 ',
        value: 0
      },
      {
        label: '过期 ',
        value: 1
      },
      {
        label: '报废 ',
        value: 2
      },
      {
        label: '标签异常 ',
        value: 3
      }
    ],
    default: [
      {
        label: '全部',
        value: ''
      }
    ],
  };
  dataTable = {
    list: [],
    option: [10, 20, 40, 80],
    total: 0,
    first: 0
  };
  formModel: any = this.fb.group({
    regionId: '',
    enterpriseNumber: '',
    productionUnit: '',
    state: '',
    cylinderCode: '',
    serialNumber: '',
    ownNumber: '',
  });
  pageParams = {
    regionId: '',
    enterpriseNumber: '',
    productionUnit: '',
    state: '',
    cylinderCode: '',
    serialNumber: '',
    ownNumber: '',
    pageSize: this.dataTable.option[2],
    pageNumber: 1,
    liabilitySubjectType: '',
    liabilitySubjectId: '',
    boolIsFull: ''
  };

  constructor(
    private routerInfo: ActivatedRoute,
    private _service: CylinderListService,
    private messageService: MessageService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getDropdownRegion();
    this.getCylinderSearchOpt();
    this.routerInfo.queryParams.subscribe((queryParams) => {
      if (JSON.stringify(queryParams) !== '{}') {
        this.formModel.patchValue({
          enterpriseNumber: queryParams.enterpriseID || '',
          regionId: queryParams.regionId || '',
          state: queryParams.state || ''
        });
        this.pageParams.liabilitySubjectType = queryParams.liabilitySubjectType || '';
        this.pageParams.liabilitySubjectId = queryParams.liabilitySubjectId || '';
        this.pageParams.boolIsFull = queryParams.boolIsFull || '';
        Object.assign(this.pageParams, this.formModel.value);
        this.getCylinders();
      }
    });
  }

  onSearch() {
    let params = {};
    if (this.formModel.valid) { // 通过了验证
      params = Object.assign({ pageNumber: 1, pageSize: this.pageParams.pageSize }, this.formModel.value);
      this.dataTable.first = 0;
      Object.assign(this.pageParams, params);
      this.pageParams.liabilitySubjectType = '';
      this.pageParams.liabilitySubjectId = '';
      this.pageParams.boolIsFull = '';
      this.getCylinders();
    } else { // 没有通过验证
      for (const key in this.formModel.controls) {
        if (this.formModel.controls[key].errors) {
          const msg = this.formModel.controls[key].errors.msg;
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: msg });
          return;
        }
      }
    }
  }

  onChangeRegionID(event) {
    this.getDropdownCompany({ regionId: event.value });
  }

  getDropdownCompany(params?) {
    this._service.getDropdownForCorpInfoInRegion(params).then(data => {
      if (data.status === 0) {
        this.dropdown.company = this.dropdown.default.concat(data.data.map((item) => ({
          label: item.enterpriseName,
          value: item.enterpriseNumber,
        })));
      } else {
        this.dropdown.company = this.dropdown.default.concat([]);
        this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
      }
      this.formModel.patchValue({
        enterpriseNumber: this.dropdown.company[0] ? this.dropdown.company[0].value : ''
      });
    });
  }

  getDropdownRegion() {
    this._service.getDropdownForRegionSysUser({}).then(data => {
      if (data.status === 0) {
        this.dropdown.region = this.dropdown.default.concat(data.data.map((item) => ({
          label: item.regionName,
          value: item.regionId
        })));
      } else {
        this.dropdown.region = this.dropdown.default.concat([]);
        this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
      }
    });
  }

  onPageChange($event) {
    this.dataTable.list = [];
    this.onPageChange = (event) => {
      this.pageParams.pageSize = event.rows;
      this.pageParams.pageNumber = event.first / event.rows + 1;
      this.getCylinders();
    };
  }


  getCylinderSearchOpt() {
    this._service.getCylinderSearchOpt({}).then(data => {
      if (data.status === 0) {
        this.dropdown.company = this.dropdown.default.concat(data.data.enterpriseName);
        this.dropdown.make = this.dropdown.default.concat(data.data.productionUnit.map((item) => ({
          label: item.name,
          value: item.manufactureOrg
        })));
      } else {
        this.dropdown.company = this.dropdown.default;
        this.dropdown.make = this.dropdown.default;
        this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
      }
    });
  }

  getCylinders() {
    this.loading = true;
    this._service.getCylinders(this.pageParams)
      .then(data => {
        this.loading = false;
        if (data.status === 0) {
          this.dataTable.list = data.data.list;
          this.dataTable.total = data.data.total;
        } else {
          this.dataTable.list = [];
          this.dataTable.total = 0;
          this.dataTable.first = 0;
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
}

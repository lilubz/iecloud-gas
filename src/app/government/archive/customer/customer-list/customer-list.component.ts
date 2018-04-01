import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


import { CustomerListService } from './customer-list.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'gas-customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.scss'],
  providers: [CustomerListService]
})

export class CustomerListComponent implements OnInit {
  constructor(private routerInfo: ActivatedRoute, private customerListService: CustomerListService,
    private messageService: MessageService, private fb: FormBuilder) { }
  dropdown = {
    userNature: [
      {
        label: '全部',
        value: ''
      }
    ],
    userType: [
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
    corp: [
      {
        label: '全部',
        value: ''
      }
    ],
    default: [
      {
        label: '全部',
        value: ''
      }
    ],
  };
  dataTable: {
    list: Array<{
      index?: number;
      barCode?: string;
      borough?: string;
      dispatcherName?: string;
      company?: string;
      cylinderType?: string;
      fillingMedium?: string;
      status?: string;
      makeDate?: string;
      finalDate?: string;
      nextDate?: string;
      factoryNumber?: string;
      ownNumber?: string;
      electronicCode?: string;
      registerDate?: string;
      makeUnits?: string;
    }>,
    option: Array<number>,
    total: number,
    first: number
  } = {
      list: [],
      option: [10, 20, 40, 80],
      total: 0,
      first: 0
    };
  formModel: any = this.fb.group({
    regionId: '',
    enterpriseNumber: '',
    haveContract: false,
    userName: '',
    address: '',
    userTypeId: '',
    userNatureId: ''
  });
  pageParams: {
    regionId?: string;
    enterpriseNumber?: string;
    haveContract?: boolean;
    userName?: string;
    address?: string;
    userTypeId?: string;
    userNatureId?: string;
    pageSize: number,
    pageNumber: number
  } = {
      regionId: '',
      enterpriseNumber: '',
      haveContract: false,
      userName: '',
      address: '',
      userTypeId: '',
      userNatureId: '',
      pageSize: this.dataTable.option[2],
      pageNumber: 1
    };

  ngOnInit() {
    this.getDropdownForUserType();
    this.getDropdownForRegionSysUser();
    this.getDropdownForCorpInfoInRegion({
      regionId: ''
    });
    const enterpriseNumber = this.routerInfo.snapshot.params['enterpriseID'];
    if (typeof enterpriseNumber !== 'undefined') {
      this.formModel.patchValue({
        enterpriseNumber: enterpriseNumber
      });
      this.formModel.enterpriseNumber = enterpriseNumber;
      this.onSearch();
    }
  }

  onSearch() {
    let params = {};
    if (this.formModel.valid) { // 通过了验证
      params = Object.assign({ pageNumber: 1, pageSize: this.pageParams.pageSize }, this.formModel.value);
      this.dataTable.first = 0;
      Object.assign(this.pageParams, params);
      this.getCustomerList(params);
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

  onChangeAreaID(event) {
    this.dropdown.corp = this.dropdown.default;
    this.formModel.patchValue({
      enterpriseNumber: ''
    });
    this.getDropdownForCorpInfoInRegion({ regionId: event.value });
  }

  onPageChange($event) {
    this.dataTable.list = [];
    this.onPageChange = (event) => {
      const page = {
        pageSize: event.rows,
        pageNumber: event.first / event.rows + 1
      };
      this.pageParams.pageSize = page.pageSize;
      this.getCustomerList(Object.assign({}, this.pageParams, page));
    };
  }

  getCustomerList(params?) {
    this.customerListService.getCustomerList(params)
      .then(data => {
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

  getDropdownForCorpInfoInRegion(params?) {
    this.customerListService.getDropdownForCorpInfoInRegion(params).then(data => {
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

  getDropdownForUserType() {
    this.customerListService.getDropdownForUserType({}).then(data => {
      if (data.status === 0) {
        this.dropdown.userType = this.dropdown.default.concat(data.data.map((item) => ({
          value: item.userTypeId,
          label: item.name
        })));
      } else {
        this.dropdown.userType = this.dropdown.default;
        this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
      }
    });
  }

  getDropdownForRegionSysUser() {
    this.customerListService.getDropdownForRegionSysUser({}).then(data => {
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
}

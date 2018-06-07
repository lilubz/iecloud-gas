import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


import { CustomerListService } from './customer-list.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/primeng';
import { CommonRequestService } from '../../../core/common-request.service';
import { RoleType } from '../../../common/RoleType';

@Component({
  selector: 'gas-customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.scss'],
  providers: [CustomerListService, CommonRequestService]
})

export class CustomerListComponent implements OnInit {
  @ViewChild('contractPhotoFile') contractPhotoFile: ElementRef;
  RoleType = RoleType;
  loading = false;
  deliveryRegionId;
  dispatcherSuggestions: {
    dispatcherNumber: number,
    employeeName: string,
    phoneNumber: string
  }[] = [];
  displayEditDialog = false;
  displayDeleteDialog = false;
  selectedCustomer: {
    userNumber?: string,
    userName?: string,
    deliveryAddress?: string,
    phone?: string,
    userIdentityCardNumber?: string,
    dispatcherNumber?: string
  } = {
      userNumber: '',
      userName: '',
      deliveryAddress: '',
      phone: '',
      userIdentityCardNumber: '',
      dispatcherNumber: ''
    };
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
      pageNumber: 1,
    };
  willDeleteCustomer;
  willEditCustomer = {
    certificateName: '',
    userNumber: '',
    userName: '',
    deliveryAddress: '',
    phone: '',
    userIdentityCardNumber: '',
    dispatcherNumber: '',
    userIdentityCardNumberIsEmpty: false
  };
  selectedEditDispatcher: {
    dispatcherNumber: number,
    employeeName: string,
    phoneNumber?: string
  };
  // 提示消息
  msgs: Message[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private customerListService: CustomerListService,
    private commonRequestService: CommonRequestService,
    private messageService: MessageService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getDropdownForUserType();
    this.getDropdownForRegionSysUser();
    this.getDropdownForCorpInfoInRegion({
      regionId: ''
    });
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      if (JSON.stringify(queryParams) !== '{}') {
        this.formModel.patchValue({
          enterpriseNumber: queryParams.enterpriseID || '',
          regionId: queryParams.regionId || ''
        });
        const data = {
          boolIsChecked: queryParams.boolIsChecked || '',
          jobNumber: queryParams.jobNumber || ''
        }
        this.onSearch(data);
      }
    });
  }

  getSuggestions(event?) {
    this.customerListService.listTheCorpDispatcherInfoByTheNameOfTheCorpDispatcher({
      employeeName: event.query
    })
      .then(data => {
        if (data.status === 0) {
          this.dispatcherSuggestions = data.data;
        } else {
          this.dispatcherSuggestions = [];
        }
      });
  }

  onSearch(data={}) {
    let params = {};
    if (this.formModel.valid) { // 通过了验证
      params = Object.assign({ pageNumber: 1, pageSize: this.pageParams.pageSize }, this.formModel.value);
      this.dataTable.first = 0;
      Object.assign(this.pageParams, params);
      this.getCustomerList(Object.assign(params,data));
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

  onDelete(rowData) {
    this.displayDeleteDialog = true;
    this.willDeleteCustomer = Object.assign({}, rowData);
  }

  deleteCustomer() {
    this.customerListService.deleteCustomer({
      userNumber: this.willDeleteCustomer.userNumber
    }).then(data => {
      if (data.status === 0) {
        this.messageService.add({ severity: 'success', summary: '响应消息', detail: data.msg });
        this.displayDeleteDialog = false;
        this.onSearch();
      } else {
        this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.status });
        // this.delete = false;
        // this.onSearch();
      }
    });
  }
  onEdit(rowData) {
    this.contractPhotoFile.nativeElement.value = null;
    this.displayEditDialog = true;
    this.willEditCustomer = Object.assign({}, rowData);
    // 选中的用户是否 有用户卡编号
    this.willEditCustomer.userIdentityCardNumberIsEmpty = !this.willEditCustomer.userIdentityCardNumber;
    this.selectedEditDispatcher = {
      employeeName: rowData.dispatcherName,
      dispatcherNumber: rowData.dispatcherNumber
    };
    this.deliveryRegionId = rowData.deliveryRegionId;
  }

  editCustomer() {
    if (this.willEditCustomer.userName.trim() === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请输入修改的燃气用户' });
      return false;
    } else if (this.willEditCustomer.phone.trim() === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请输入修改的联系电话' });
      return false;
    } else if (this.willEditCustomer.userIdentityCardNumber === null && !this.willEditCustomer['userIdentityCardNumberIsEmpty']) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请输入修改的用户卡编号' });
      return false;
      // } else if (!this.selectedEditDispatcher || !this.selectedEditDispatcher.dispatcherNumber) {
      //   this.messageService.add({ severity: 'warn', summary: '', detail: '请输入修改的默认送气工' });
      //   return false;
    } else if (!this.deliveryRegionId) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请选择配送区域' });
      return false;
    } else if (this.willEditCustomer.deliveryAddress.trim() === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请输入修改的派送地址' });
      return false;
    }
    const formData = new FormData();
    formData.append('userNumber', this.willEditCustomer.userNumber);
    formData.append('userName', this.willEditCustomer.userName.trim());
    formData.append('deliveryAddress', this.willEditCustomer.deliveryAddress.trim());
    formData.append('phone', this.willEditCustomer.phone.trim());
    formData.append('userIdentityCardNumber', this.willEditCustomer.userIdentityCardNumber ? this.willEditCustomer.userIdentityCardNumber : '');
    formData.append('dispatcherNumber', this.selectedEditDispatcher ? this.selectedEditDispatcher.dispatcherNumber ? this.selectedEditDispatcher.dispatcherNumber.toString() : '' : '');
    formData.append('deliveryRegionId', this.deliveryRegionId);
    formData.append('contractPhoto', this.contractPhotoFile.nativeElement.files[0] || '');

    this.customerListService.editCustomer(formData).then(data => {
      if (data.status === 0) {
        this.messageService.add({ severity: 'success', summary: '响应消息', detail: data.msg });
        this.displayEditDialog = false;
        this.onSearch();
      } else {
        this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        // this.displayEditDialog= false;
        // this.onSearch();
      }
    });
  }

  onCancel() {
    this.displayEditDialog = false;
    this.displayDeleteDialog = false;
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
    this.loading = true;
    this.customerListService.getCustomerList(params)
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

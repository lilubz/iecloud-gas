import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';

import {
  CustomerListService
} from './customer-list.service';
import {
  MessageService
} from 'primeng/components/common/messageservice';
@Component({
  selector: 'gas-customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.scss'],
  providers: [CustomerListService]
})

export class CustomerListComponent implements OnInit {
  constructor(private routerInfo: ActivatedRoute, private customerListService: CustomerListService,
      private messageService: MessageService) { }
  customerList: Array<{
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
  }>;
  searchParams: {
    regionId?: string;
    enterpriseNumber?: string;
    haveContract?: boolean;
    userName?: string;
    address?: string;
    userTypeId?: string;
    userNatureId?: string;
  } = {
    regionId: '',
    enterpriseNumber: '',
    haveContract: false,
    userName: '',
    address: '',
    userTypeId: '',
    userNatureId: '',
  };
  pageParams: {
    regionId?: string;
    enterpriseNumber?: string;
    haveContract?: boolean;
    userName?: string;
    address?: string;
    userTypeId?: string;
    userNatureId?: string;
    pageNumber?: number;
    pageSize?: number;
    pageOption?: Array<number>;
    total?: number;
    first?: number;
  } = {
    regionId: '',
    enterpriseNumber: '',
    haveContract: false,
    userName: '',
    address: '',
    userTypeId: '',
    userNatureId: '',
    pageNumber: 1,
    pageSize: 20,
    pageOption: [10, 20, 30, 40],
    total: 400,
    first: 0,
  };
  config = {
    default: [
      {
        label: '全部',
        value: ''
      }
    ]
  };

  dropdownOpt = {
    company: this.config.default,
    region: this.config.default,
    userNature: this.config.default,
    userType: this.config.default,
  };

  ngOnInit() {
    this.getDropdownForUserNature();
    this.getDropdownForUserType();
    this.getDropdownForRegionSysUser();
    this.getDropdownForCorpInfoInRegion({
      regionId: ''
    });
    const enterpriseID = this.routerInfo.snapshot.params['enterpriseID'];
    if (typeof enterpriseID !== 'undefined') {
      this.searchParams.enterpriseNumber = enterpriseID;
      this.onSearch();
    }
  }

  onSearch(page?) {
    const params = {};
    if (page) {
      // tslint:disable-next-line:forin
      for (const key in this.searchParams) {
        params[key] = this.pageParams[key];
      }
      params['pageNumber'] = page.pageNumber;
      params['pageSize'] = page.pageSize;
    } else {
      // tslint:disable-next-line:forin
      for (const key in this.searchParams) {
        params[key] = this.searchParams[key];
        this.pageParams[key] = this.searchParams[key];
      }
      params['pageNumber'] = 1;
      params['pageSize'] = this.pageParams.pageSize;
      this.pageParams.first = 0;
    }
    this.getCustomerList(params);
  }

  onChangeAreaID(event) {
    const params = {
      regionId: event.value
    };
    this.dropdownOpt.company = this.config.default;
    this.searchParams.enterpriseNumber = '';
    this.getDropdownForCorpInfoInRegion(params);
  }

  onPageChange(pageInfo) {
    const page: {
      pageSize: number,
      pageNumber: number
    } = {
        pageSize: pageInfo.rows,
        pageNumber: pageInfo.first / pageInfo.rows + 1
      };
    this.onSearch(page);
  }

  setMessages(type, title, msg) {
    this.messageService.add({
      severity: type,
      summary: title,
      detail: msg,
    });
  }
  getCustomerList(params?) {
    this.customerListService.getCustomerList(params).then((data) => {
      if (data.status === 0) {
        this.customerList = data.data.list;
        this.pageParams.total = data.data.total;
      } else {
        this.customerList = [];
        this.pageParams.total = 0;
        this.pageParams.first = 0;
        this.setMessages('warn', '查询结果', '响应：' + data.msg);
      }
    }, (error) => {
      this.customerList = [];
      this.pageParams.total = 0;
      this.pageParams.first = 0;
      this.setMessages('error', '查询失败', '错误消息：' + error);
    });
  }
  getDropdownForCorpInfoInRegion(params?) {
    this.customerListService.getDropdownForCorpInfoInRegion(params).then(data => {
      if (data.status === 0) {
        this.dropdownOpt.company = data.data.list;
        const list = data.data.map((item) => {
          return {
            label: item.enterpriseName,
            value: item.enterpriseNumber,
          };
        });
        this.dropdownOpt.company = this.config.default.concat(list);
      } else {

      }
    });
  }
  getDropdownForUserNature() {
    this.customerListService.getDropdownForUserNature({}).then(data => {
      if (data.status === 0) {
        const list = data.data.map((item) => {
          return {
            label: item.name,
            value: item.value,
          };
        });
        this.dropdownOpt.userNature = this.config.default.concat(list);
      } else {

      }
    });
  }
  getDropdownForUserType() {
    this.customerListService.getDropdownForUserType({}).then(data => {
      if (data.status === 0) {
        const list = data.data.map((item) => {
          return {
            value: item.userTypeId,
            label: item.name
          };
        });
        this.dropdownOpt.userType = this.config.default.concat(list);
      } else {

      }
    });
  }
  getDropdownForRegionSysUser() {
    this.customerListService.getDropdownForRegionSysUser({}).then(data => {
      if (data.status === 0) {
        const list = data.data.map((item) => {
          return {
            label: item.regionName,
            value: item.regionId
          };
        });
        this.dropdownOpt.region = this.config.default.concat(list);
      } else {

      }
    });
  }
}

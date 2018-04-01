import { Component, OnInit, OnDestroy, } from '@angular/core';
import { AccountDetailService, } from './account-detail.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import { forEach } from '@angular/router/src/utils/collection';
import { CommonRequestService } from '../../../../core/common-request.service';
import { MessageService } from 'primeng/components/common/messageservice';


@Component({
  selector: 'gas-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit, OnDestroy {

  areaDrop: SelectItem[] = [
    {
      label: '全部',
      value: '',
    }
  ];
  accountList: any[] = [];
  pages: {
    pageNumber?: number;
    pageSize?: number;
    pageOption?: Array<Number>;
    total?: number;
    first?: number;
  } = {
      pageNumber: 1,
      pageSize: 40,
      pageOption: [10, 20, 40, 80],
      total: 0,
      first: 0,
    };
  searchParams: {
    regionId: number;
    licese: string;
    enterpriseName: string;
  } = {
      regionId: null,
      licese: '',
      enterpriseName: '',
    };
  changeStatusPage: any;
  constructor(
    private _service: AccountDetailService,
    private commonRequestService: CommonRequestService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.getDropdown();
    // this.copy();
  }
  getDropdown() {
    this.commonRequestService.getRegions().then(data => {
      if (data.status === 0) {
        const list = data.data.map((item) => {
          return {
            label: item.regionName,
            value: item.regionId
          };
        });
        this.areaDrop = this.areaDrop.concat(list);
      } else {
        this.messageService.add({ severity: 'warn', summary: '错误提示', detail: data.msg });
      }
    }).catch(error => {
      this.messageService.add({ severity: 'error', summary: '服务器错误,错误码:', detail: error.status });
    });
  }

  onPageChange(event) {
    const page: {
      pageSize: Number,
      pageNumber: Number
    } = {
        pageSize: event.rows,
        pageNumber: event.first / event.rows + 1
      };

    // TODO
    this.searchAccount(page);
    this.changeStatusPage = page;
  }
  // TODO
  searchAccount(page?) {
    const params = {
      regionId: this.searchParams.regionId || '',
      dangerousLicense: this.searchParams.licese || '',
      enterpriseName: this.searchParams.enterpriseName || '',
      pageNumber: 1,
      pageSize: 40,
    };
    if (page) {
      params.pageNumber = page.pageNumber;
      params.pageSize = page.pageSize;
    } else {
      this.pages.first = 0;
    }
    this._service.searchAccount(params).then(data => {
      if (data.status === 0) {
        this.accountList = data.data.list;
        this.pages.total = data.data.total;
      } else {
        this.accountList = [];
        this.pages.total = 0;
        this.messageService.add({ severity: 'warn', summary: '提示信息', detail: data.msg });
      }

    }).catch(error => {
      this.accountList = [];
      this.pages.total = 0;
      this.messageService.add({ severity: 'error', summary: '服务器错误,错误码:', detail: error.status });
    });
  }
  changeStatus(status) {
    this._service.changeFreeze({ userid: status.userId }).then(data => {
      if (data.status === 0) {
        if (!status.isfreezed) {
          this.messageService.add({ severity: 'success', summary: '提示信息', detail: '冻结账号成功' });
          this.searchAccount(this.changeStatusPage);
        } else {
          this.messageService.add({ severity: 'success', summary: '提示信息', detail: '启用账号成功' });
          this.searchAccount(this.changeStatusPage);
        }
      } else {
        this.messageService.add({ severity: 'warn', summary: '提示信息', detail: data.msg });
      }
    }).catch(error => {
      this.messageService.add({ severity: 'error', summary: '服务器错误,错误码:', detail: error.status });
    });
  }


  ngOnDestroy() {
  }
}

import { Component, OnInit, OnDestroy, } from '@angular/core';
import { GasHolderService, } from './gasHolder.service';
import { MessageService } from 'primeng/components/common/messageservice';


@Component({
  selector: 'gas-gasHolder',
  templateUrl: './gasHolder.component.html',
  styleUrls: ['./gasHolder.component.scss']
})
export class GasHolderComponent implements OnInit, OnDestroy {
  searchParams: {
    enterpriseNumber: string,
    inflatableStationNumber: string,
    balanceNumber: string,
  } = {
      enterpriseNumber: '',
      inflatableStationNumber: '',
      balanceNumber: '',
    }
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
  fillingBalanceList = [];
  dropdown = {
    enterprise: [
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
  loading = false;
  constructor(private _service: GasHolderService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.getEnterprises();
  }
  onPageChange(event) {
    this.fillingBalanceList = [];
    this.onPageChange = (event) => {
      const page: {
        pageSize: Number,
        pageNumber: Number
      } = {
          pageSize: event.rows,
          pageNumber: event.first / event.rows + 1
        };
      this.getDataList(page);
    }
  }
  getEnterprises() {
    this._service.getenterprise({}).then(data => {
      if (data.status === 0) {
        this.dropdown.enterprise = this.dropdown.enterprise.concat(data.data.enterpriseName);
      } else {
        this.dropdown.enterprise = this.dropdown.enterprise.concat(this.dropdown.default);
        this.messageService.add({ severity: 'warn', summary: '错误提示', detail: data.msg });
      }
    })
  }

  getDataList(page?) {
    this.loading = true;
    const params = {
      enterpriseNumber: this.searchParams.enterpriseNumber,
      // organizationId: this.searchParams.organization,
      // roleId: this.searchParams.role,
      pageNumber: 1,
      pageSize: 40
    };
    if (page) {
      params.pageNumber = page.pageNumber;
      params.pageSize = page.pageSize;
    } else {
      this.pages.first = 0;
    }
    this._service.getGasHolder(params).then(data => {
      this.loading = false;
      if (data.status === 0) {
        this.fillingBalanceList = data.data.list;
        this.pages.total = data.data.total;
      } else {
        this.fillingBalanceList = [];
        this.pages.total = 0;
        this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
      }
    })
  }
  ngOnDestroy() {
  }
}

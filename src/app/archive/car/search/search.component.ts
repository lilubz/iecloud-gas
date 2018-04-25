import { Component, OnInit} from '@angular/core';

import { SearchService } from './search.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'gas-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss'],
  providers: [SearchService]
})

export class SearchComponent implements OnInit {
  suggestions = [];
  dropdown = {
    default: [
      {
        label: '全部',
        value: ''
      }
    ],
    company: [
      {
        label: '企业名1',
        value: ''
      }
    ],
    carType: [
      {
        label: '车辆类型1',
        value: ''
      }
    ]
  };
  dataTable = {
    list: [],
    option: [10, 20, 40, 80],
    total: 0,
    first: 0,
    pageSize: 40
  };
  formModel = {
    company: '',
    carType: '',
    carNumber: null,
  };
  pageParams = {
    company: '',
    carType: '',
    carNumber: null,
  };
  constructor(
    private _service: SearchService,
    private messageService: MessageService,
  ) { }
  ngOnInit() {
    this.getDropdownCompany({ regionId: ''});
    this.getDropdownCarType();
  }
  onSubmit() {
    this.getDataTableList({
      enterpriseNumber: this.formModel.company,
      carNumber: this.formModel.carNumber ? this.formModel.carNumber.carNumber : '',
      carType: this.formModel.carType,
      pageNumber: 1,
      pageSize: this.dataTable.pageSize,
    });
    Object.assign(this.pageParams, this.formModel);
    this.dataTable.first = 0;
  }
  onPageChange($event) {
    this.dataTable.list = [];
    this.onPageChange = event => {
      const page = {
        pageSize: event.rows,
        pageNumber: event.first / event.rows + 1
      };
      this.dataTable.pageSize = page.pageSize;
      this.getDataTableList({
        enterpriseNumber: this.pageParams.company,
        carNumber: this.pageParams.carNumber ? this.pageParams.carNumber.carNumber : '',
        carType: this.pageParams.carType,
        pageNumber: page.pageNumber,
        pageSize: page.pageSize,
      });
    };
  }
  onBlurAutoComplete() {
    if (typeof this.formModel.carNumber === 'string') {
      if (this.suggestions.length === 1 && this.suggestions[0]['carNumber'] === this.formModel.carNumber) {
        this.formModel.carNumber = this.suggestions[0];
      } else {
        this.formModel.carNumber = null;
      }
    }
  }
  getSuggestions(event) {
    this._service.getCarNumberList({
      carNumber: event.query
    })
      .then(data => {
        if (data.status === 0) {
          this.suggestions = data.data;
        } else {
          this.suggestions = [];
        }
      });
  }
  getDropdownCompany(params?) {
    this._service.listCorpInfoInRegion(params)
      .then(data => {
        if (data.status === 0) {
          this.dropdown.company = this.dropdown.default.concat(data.data.map((item) => ({
            label: item.enterpriseName,
            value: item.enterpriseNumber
          })));
        } else {
          this.dropdown.company = this.dropdown.carType.concat([]);
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
  getDropdownCarType(params?) {
    this._service.getCarType(params)
      .then(data => {
        if (data.status === 0) {
          this.dropdown.carType = this.dropdown.default.concat(data.data.map((item) => ({
            label: item,
            value: item
          })));
        } else {
          this.dropdown.carType = this.dropdown.carType.concat([]);
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
  getDataTableList(params?) {
    this._service.getCarList(params)
      .then(data => {
        if (data.status === 0) {
          this.dataTable.list = data.data.list;
          this.dataTable.total = data.data.total;
          Object.assign(this.formModel, this.pageParams);
        } else {
          this.dataTable.list = [];
          this.dataTable.total = 0;
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
}

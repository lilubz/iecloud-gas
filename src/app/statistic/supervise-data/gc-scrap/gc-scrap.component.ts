import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { SuperviseDataService } from '../supervise-data.service';

@Component({
  selector: 'gas-gc-scrap',
  templateUrl: './gc-scrap.component.html',
  styleUrls: ['./gc-scrap.component.scss'],
  providers: [SuperviseDataService]
})
export class GcScrapComponent implements OnInit {
  loading = false;
  dropdown = {
    default: [
      {
        label: '全部',
        value: ''
      }
    ],
    company: [
      {
        label: '全部',
        value: ''
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
    company: '',
  };
  pageParams = {
    company: '',
  };
  constructor(
    private _service: SuperviseDataService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.getDropdownCompany();
  }
  onSubmit() {
    this.dataTable.pageNumber = 1;
    this.dataTable.first = 0;
    Object.assign(this.pageParams, this.formModel);
    this.getDataTableList({
      enterpriseNumber: this.formModel.company,
      pageSize: this.dataTable.pageSize,
      pageNumber: this.dataTable.pageNumber
    });
  }
  onPageChange($event) {
    this.dataTable.list = [];
    this.onPageChange = event => {
      this.dataTable.pageNumber = event.first / event.rows + 1;
      this.dataTable.pageSize = event.rows;
      this.getDataTableList({
        enterpriseNumber: this.pageParams.company,
        pageNumber: this.dataTable.pageNumber,
        pageSize: this.dataTable.pageSize,
      });
    };
  }

  getDropdownCompany(params?) {
    this._service.cylinderSelectOpt({}).then(data => {
      if (data.status === 0) {
        this.dropdown.company = this.dropdown.default.concat(data.data.enterpriseName);
      } else {
        this.dropdown.company = this.dropdown.default;
      }
    });
  }

  getDataTableList(params?) {
    this.loading = true;
    this._service.listGasScrap(params)
      .then(data => {
        this.loading = false;
        if (data.status === 0) {
          Object.assign(this.formModel, this.pageParams);
          this.dataTable.list = data.data.list;
          this.dataTable.total = data.data.total;
        } else {
          this.dataTable.list = [];
          this.dataTable.total = 0;
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
}

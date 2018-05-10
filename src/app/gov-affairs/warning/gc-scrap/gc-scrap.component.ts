import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { WarningService } from '../warning.service';

@Component({
  selector: 'gas-gc-scrap',
  templateUrl: './gc-scrap.component.html',
  styleUrls: ['./gc-scrap.component.scss']
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
    company: []
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
    private _service: WarningService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.getDropdownCompany();
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
      this.dataTable.pageNumber = event.first / event.rows + 1;
      this.dataTable.pageSize = event.rows;
      this.getDataTableList();
    };
  }

  getDropdownCompany(params?) {
    this._service.cylinderSelectOpt({}).then(data => {
      if (data.status === 0) {
        this.dropdown.company = this.dropdown.default.concat(data.data.enterpriseName);
      } else {
        this.dropdown.company = this.dropdown.default.concat([]);
      }
    });
  }

  getDataTableList() {
    this.loading = true;
    this._service.listGasScrap({
      enterpriseNumber: this.pageParams.company,
      pageNumber: this.dataTable.pageNumber,
      pageSize: this.dataTable.pageSize,
    })
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

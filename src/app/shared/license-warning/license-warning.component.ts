import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { WarningService } from '../../gov-affairs/warning/warning.service';

@Component({
  selector: 'gas-license-warning',
  templateUrl: './license-warning.component.html',
  providers: [WarningService]
})
export class LicenseWarningComponent implements OnInit {
  loading = false;
  dropdown = {
    default: [
      {
        label: '全部',
        value: ''
      }
    ],
    region: []
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
  };
  pageParams = {
    region: '',
  };
  constructor(
    private _service: WarningService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.getDropdownRegion();
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
  getDropdownRegion(params?) {
    this._service.listRegionInfo(params)
      .then(data => {
        if (data.status === 0) {
          this.dropdown.region = this.dropdown.default.concat(data.data.map(item => ({
            label: item.regionName,
            value: item.regionId
          })));
        } else {
          this.dropdown.region = this.dropdown.default.concat([]);
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
  getDataTableList() {
    this.loading = true;
    this._service.listLicenseExpire({
      regionId: this.pageParams.region,
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

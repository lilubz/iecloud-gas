import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { SuperviseDataService } from '../supervise-data.service';

@Component({
  selector: 'gas-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.scss'],
  providers: [SuperviseDataService]
})
export class LicenseComponent implements OnInit {
  loading = false;
  dropdown = {
    default: [
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
    region: '',
  };
  pageParams = {
    region: '',
  };
  constructor(
    private _service: SuperviseDataService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.getDropdownRegion();
  }
  onSubmit() {
    this.dataTable.pageNumber = 1;
    this.dataTable.first = 0;
    Object.assign(this.pageParams, this.formModel);
    this.getDataTableList({
      regionId: this.formModel.region,
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
        regionId: this.pageParams.region,
        pageNumber: this.dataTable.pageNumber,
        pageSize: this.dataTable.pageSize,
      });
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
          this.formModel.region = this.dropdown.region[0].value;
        } else {
          this.dropdown.region = this.dropdown.default.concat([]);
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
  getDataTableList(params?) {
    this.loading = true;
    this._service.listLicenseExpire(params)
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

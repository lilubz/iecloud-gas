import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { WarningService } from '../../gov-affairs/warning/warning.service';

@Component({
  selector: 'gas-warning-record-public',
  templateUrl: './warning-record-public.component.html',
  styleUrls: ['./warning-record-public.component.scss'],
  providers: [WarningService]
})
export class WarningRecordPublicComponent implements OnInit {

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
    ],
    supplyStation: [
      {
        label: '全部',
        value: ''
      }
    ],
    company: [],
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
    region: '',
    supplyStationId: '',
  };
  pageParams = {
    company: '',
    region: '',
    supplyStationId: '',
  };
  constructor(
    private _service: WarningService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.getDropdownCompany();
    this.getDropdownRegion();
    this.getDropdownSupplyStation();
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
  getDropdownSupplyStation() {
    this._service.listCorpSupplyStation()
      .then(data => {
        if (data.status === 0) {
          this.dropdown.supplyStation = this.dropdown.default.concat(data.data.map((item) => ({
            label: item.supplyStationName,
            value: item.supplyStationNumber
          })));
        } else {
          this.dropdown.supplyStation = this.dropdown.default.concat([]);
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }

  getDataTableList() {
    this.loading = true;
    this._service.listSecurityCheckWarning({
      enterpriseNumber: this.pageParams.company,
      regionId: this.pageParams.region,
      supplyStationNumber: this.pageParams.supplyStationId,
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

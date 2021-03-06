import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { WarningService } from '../warning.service';

@Component({
  selector: 'gas-gc-excess',
  templateUrl: './gc-excess.component.html',
  styleUrls: ['./gc-excess.component.scss']
})
export class GcExcessComponent implements OnInit {

  loading = true;
  dropdown = {
    default: [
      {
        label: '全部',
        value: ''
      }
    ],
    type: [
      {
        label: '全部',
        value: ''
      },
      {
        label: '储配站',
        value: '1'
      },
      {
        label: '供应站',
        value: '2'
      },
      {
        label: '送气工',
        value: '3'
      },
      {
        label: '燃气用户',
        value: '4'
      },
      {
        label: '直销车',
        value: '5'
      },
    ],
    region: [
      {
        label: '全部',
        value: ''
      }
    ],
    state: [
      {
        label: '全部',
        value: ''
      },
      {
        label: '空瓶',
        value: '0'
      },
      {
        label: '重瓶',
        value: '1'
      },
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
    type: '',
    region: '',
    state: ''
  };
  pageParams = {
    type: '',
    region: '',
    state: ''
  };
  constructor(
    private _service: WarningService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.getDropdownRegion();
  }
  onSubmit() {
    this.loading = true;
    this.dataTable.pageNumber = 1;
    this.dataTable.first = 0;
    Object.assign(this.pageParams, this.formModel);
    this.getDataTableList();
  }
  onPageChange(event) {
    this.loading = true;
    this.dataTable.pageNumber = event.first / event.rows + 1;
    this.dataTable.pageSize = event.rows;
    this.getDataTableList();
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
  getDataTableList() {
    this._service.listGcThresholdCurrentWarning({
      boolIsFull: this.pageParams.state,
      liabilityTypeId: this.pageParams.type,
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

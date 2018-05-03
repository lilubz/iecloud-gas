import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { CylinderWarningService } from './cylinder-warning.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'gas-cylinder-warning',
  templateUrl: './cylinder-warning.component.html',
  styleUrls: ['./cylinder-warning.component.scss'],
  providers: [CylinderWarningService]
})
export class CylinderWarningComponent implements OnInit {
  type;
  loading = false;
  visible = false;
  firstFlag = true;
  selectedRowData;
  dropdown = {
    region: [
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
    ]
  };
  dataTable = {
    list: [],
    option: [10, 20, 40, 80],
    total: 0,
    first: 0,
    pageNumber: 1,
    pageSize: 40
  };
  formModelSearch = {
    regionId: ''
  };
  pageParams = {
    regionId: ''
  };
  formModelSet = {
    emptyCount: 0,
    fullCount: 0,
    describe: ''
  };
  constructor(
    private routerInfo: ActivatedRoute,
    private _service: CylinderWarningService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.getDropdownRegion();
    this.routerInfo.paramMap.switchMap((params) => {
      return Promise.resolve(params);
    }).subscribe((params) => {
      this.type = parseInt(params.get('type'), 10);
      this.firstFlag = true;
      this.dataTable.list = [];
      this.dataTable.first = 0;
      this.dataTable.total = 0;
    });
  }
  onSearch() {
    this.dataTable.pageNumber = 1;
    this.dataTable.first = 0;
    Object.assign(this.pageParams, this.formModelSearch);
    this.getDataTableList({
      regionId: this.formModelSearch.regionId,
      liabilityTypeId: this.type,
      pageSize: this.dataTable.pageSize,
      pageNumber: this.dataTable.pageNumber
    });
  }
  onPageChange(event) {
    if (this.firstFlag) {
      this.dataTable.list = [];
      this.firstFlag = false;
    } else {
      this.dataTable.pageNumber = event.first / event.rows + 1;
      this.dataTable.pageSize = event.rows;
      this.getDataTableList({
        regionId: this.pageParams.regionId,
        liabilityTypeId: this.type,
        pageNumber: this.dataTable.pageNumber,
        pageSize: this.dataTable.pageSize,
      });
    }
  }
  onSubmit() {
    if (this.checkForm()) {
      this.sendFormModelSet({
        settingId: this.selectedRowData.settingId,
        gcThresholdEmpty: this.formModelSet.emptyCount,
        gcThresholdFull: this.formModelSet.fullCount,
        settingReason: this.formModelSet.describe
      });
    }
  }
  onCancel() {

  }
  checkForm() {
    if (!/^\d*$/.test(this.formModelSet.emptyCount + '') || this.formModelSet.emptyCount < 0 || this.formModelSet.emptyCount > 100000) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请输入0-100000的空瓶阈值' });
      return false;
    } else if (!/^\d*$/.test(this.formModelSet.fullCount + '') || this.formModelSet.fullCount < 0 || this.formModelSet.fullCount > 100000) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请输入0-100000的重瓶阈值' });
      return false;
    } else if (!this.formModelSet.describe.trim() || this.formModelSet.describe.length > 50) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请输入1-50字的设置依据' });
      return false;
    }
    return true;
  }
  onOpenDialog(rowData) {
    this.selectedRowData = rowData;
    this.visible = true;
    this.formModelSet.fullCount = this.selectedRowData.gcThresholdFull;
    this.formModelSet.emptyCount = this.selectedRowData.gcThresholdEmpty;
    this.formModelSet.describe = this.selectedRowData.settingReason || '';
  }
  getDataTableList(params?) {
    this.loading = true;
    this._service.listGcThreshold(params)
      .then(data => {
        this.loading = false;
        if (data.status === 0) {
          Object.assign(this.formModelSearch, this.pageParams);
          this.dataTable.list = data.data.list;
          this.dataTable.total = data.data.total;
        } else {
          this.dataTable.list = [];
          this.dataTable.total = 0;
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
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
          this.formModelSearch.regionId = this.dropdown.region[0].value;
        } else {
          this.dropdown.region = this.dropdown.default.concat([]);
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
  sendFormModelSet(params) {
    this._service.addGcThreshold(params)
      .then(data => {
        if (data.status === 0) {
          this.visible = false;
          this.messageService.add({ severity: 'success', summary: '操作成功', detail: data.msg });
          this.getDataTableList({
            regionId: this.pageParams.regionId,
            liabilityTypeId: this.type,
            pageNumber: this.dataTable.pageNumber,
            pageSize: this.dataTable.pageSize,
          });
        } else {
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
}

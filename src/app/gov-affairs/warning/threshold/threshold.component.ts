import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WarningService } from '../warning.service';
import { MessageService } from 'primeng/components/common/messageservice';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'gas-threshold',
  templateUrl: './threshold.component.html',
  styleUrls: ['./threshold.component.scss']
})
export class ThresholdComponent implements OnInit {
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
    type: [
      {
        label: '储配站',
        value:  1
      },
      {
        label: '供应站',
        value:  2
      },
      {
        label: '送气工',
        value:  3
      },
      {
        label: '燃气用户',
        value:  4
      },
      {
        label: '直销车',
        value:  5
      },
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
    regionId: '',
    type: 1,
  };
  formModelSet = {
    emptyCount: 0,
    fullCount: 0,
    describe: ''
  };
  constructor(
    private routerInfo: ActivatedRoute,
    private _service: WarningService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.getDropdownRegion();
    this.onSearch();
  }

  onSearch() {
    this.dataTable.pageNumber = 1;
    this.dataTable.first = 0;
    this.dataTable.list = [];
    this.dataTable.total = 0;
    this.getDataTableList();
  }

  onPageChange(event) {
    if (this.firstFlag) {
      this.dataTable.list = [];
      this.firstFlag = false;
    } else {
      this.dataTable.pageNumber = event.first / event.rows + 1;
      this.dataTable.pageSize = event.rows;
      this.getDataTableList();
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

  getDataTableList() {
    this.loading = true;
    this._service.listGcThreshold({
      regionId: this.formModelSearch.regionId,
      liabilityTypeId: this.formModelSearch.type,
      pageSize: this.dataTable.pageSize,
      pageNumber: this.dataTable.pageNumber
    })
      .then(data => {
        this.loading = false;
        if (data.status === 0) {
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
          this.getDataTableList();
        } else {
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }

}

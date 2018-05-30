import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { SafetyCheckService } from './safety-check.service';
import * as moment from 'moment';
import { zh_CN } from './../../common/date-localization';
import { Util } from '../../core/util';
@Component({
  selector: 'gas-safety-check',
  templateUrl: './safety-check.component.html',
  styleUrls: ['./safety-check.component.scss'],
  providers: [SafetyCheckService]
})
export class SafetyCheckComponent implements OnInit {
  zh = zh_CN;
  result: any = {
    dropdown: {
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
      ],
    },
    formModel: {
      regionId: '',
      startTime: moment().subtract(365, 'days')['_d'],
      endTime: moment()['_d']
    },
    dataTable: {
      list: [],
      loading: false,
    },
    dialog: {
      list: [],
      visible: false
    }
  };
  attr: any = {
    dropdown: {
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
      ],
    },
    formModel: {
      regionId: '',
      startTime: moment().subtract(365, 'days')['_d'],
      endTime: moment()['_d']
    },
    dataTable: {
      list: [],
      loading: false
    },
    dialog: {
      list: [],
      visible: false
    }
  };
  constructor(
    private _service: SafetyCheckService,
    private messageService: MessageService,
    private util: Util
  ) { }

  ngOnInit() {
    this.getDropdownRegion();
    this.onResultSubmit();
    this.onAttrSubmit();
  }
  onResultSubmit() {
    this.getDataTableList({
      type: 1,
      regionId: this.result.formModel.regionId,
      startTime: this.util.formatTime(this.result.formModel.startTime, 'start'),
      endTime: this.util.formatTime(this.result.formModel.endTime, 'end'),
    });
  }
  onAttrSubmit() {
    this.getDataTableList({
      type: 3,
      regionId: this.attr.formModel.regionId,
      startTime: this.util.formatTime(this.attr.formModel.startTime, 'start'),
      endTime: this.util.formatTime(this.attr.formModel.endTime, 'end'),
    });
  }
  onOpenResultDialog(rowData) {
    this.getDataTableList({
      type: 2,
      regionId: rowData.regionId,
      startTime: this.util.formatTime(this.result.formModel.startTime, 'start'),
      endTime: this.util.formatTime(this.result.formModel.endTime, 'end'),
    });
  }
  onOpenAttrDialog(rowData) {
    this.getDataTableList({
      type: 4,
      regionId: rowData.regionId,
      startTime: this.util.formatTime(this.attr.formModel.startTime, 'start'),
      endTime: this.util.formatTime(this.attr.formModel.endTime, 'end'),
    });
  }
  getDropdownRegion() {
    this._service.listRegionInfo({}).then(data => {
      if (data.status === 0) {
        this.result.dropdown.region = this.result.dropdown.default.concat(data.data.map((item) => ({
          label: item.regionName,
          value: item.regionId
        })));
        this.attr.dropdown.region = this.result.dropdown.region;
      } else {
        this.result.dropdown.region = this.result.dropdown.default;
        this.attr.dropdown.region = this.result.dropdown.default;
        this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
      }
    });
  }
  getDataTableList(params) {
    let target: any;
    switch (params.type) {
      case 1:
        target = this.result.dataTable;
        break;
      case 2:
        target = this.result.dialog;
        break;
      case 3:
        target = this.attr.dataTable;
        break;
      case 4:
        target = this.attr.dialog;
        break;
      default:
        break;
    }
    if (typeof target.loading === 'boolean') {
      target.loading = true;
    }
    this._service.checkResults(params)
      .then(data => {
        if (typeof target.loading === 'boolean') {
          target.loading = false;
        }
        if (data.status === 0) {
          target.list = data.data;
          if (typeof target.visible === 'boolean') {
            target.visible = true;
          }
        } else {
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
}

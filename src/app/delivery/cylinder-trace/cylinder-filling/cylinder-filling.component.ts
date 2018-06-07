import { MessageService } from 'primeng/components/common/messageservice';
import { zh_CN } from './../../../common/date-localization';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CylinderTraceService } from '../cylinder-trace.service';
import { Util } from '../../../core/util';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gas-cylinder-filling',
  templateUrl: './cylinder-filling.component.html',
  styleUrls: ['./cylinder-filling.component.scss']
})
export class CylinderFillingComponent implements OnInit {
  zh = zh_CN;
  pageSize = 40;
  pageNumber = 1;
  total = 0;
  pageFirst = 0;

  cylinderFillingHistoryList: Array<any> = [];

  inflator = '';
  cylinderNumber = '';
  stationName = '';
  beginTime = moment().set('date', 1).toDate();
  endTime = moment().toDate();
  today = moment().toDate();

  constructor(
    private cylinderTraceService: CylinderTraceService,
    private messageService: MessageService,
    public util: Util,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    if (JSON.stringify(this.activatedRoute.queryParams['value']) !== '{}') {
      this.cylinderNumber = this.activatedRoute.queryParams['value'].cylinderNumber || ''
    }
  }

  onFillingHistoryPageChange(event) {
    this.pageNumber = event.first / event.rows + 1;
    this.pageSize = event.rows;
    this.listFillingInfo();
  }

  listFillingInfo() {
    this.cylinderTraceService.listFillingInfo({
      name: this.inflator,
      cylinderNumber: this.cylinderNumber,
      stationName: this.stationName,
      beginTime: this.util.formatTime(this.beginTime, 'start'),
      endTime: this.util.formatTime(this.endTime, 'end'),
      pageNumber: this.pageNumber,
      pageSize: this.pageSize,
    }).then(data => {
      if (data.status === 0) {
        this.cylinderFillingHistoryList = data.data.list;
        this.total = data.data.total;
      } else {
        this.messageService.add({ severity: 'warn', summary: '查询充装记录失败', detail: data.msg });
        this.pageFirst = 0;
        this.total = 0;
        this.cylinderFillingHistoryList = [];
      }
    });
  }

  search() {
    this.pageNumber = 1;
    this.pageFirst = 0;
    this.listFillingInfo();
  }
}

import { Util } from './../../../core/util';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { MessageService } from 'primeng/components/common/messageservice';
import { CommonRequestService } from '../../../core/common-request.service';
import { CylinderTraceService } from '../cylinder-trace.service';
import { zh_CN } from '../../../common/date-localization';
import { SortMeta } from 'primeng/primeng';

@Component({
  selector: 'gas-cylinder-history',
  templateUrl: './cylinder-history.component.html',
  styleUrls: ['./cylinder-history.component.css']
})
export class CylinderHistoryComponent implements OnInit {
  loading = false;
  zh = zh_CN;
  cylinderHistoryList: Array<{
    createTime?: number,
    gcStatusTypeName?: string,
    boolIsDispatch?: boolean,
    beforeLiabilityTypeName?: string,
    beforeLiabilityName?: string,
    beforeLiabilityTypeId?: number,
    beforeLiabilityNumber?: number,
    beforeLiabilityContact?: string,
    beforeLiabilityAddress?: string,
    afterLiabilityTypeName?: string,
    afterLiabilityName?: string,
    afterLiabilityTypeId?: number,
    afterLiabilityNumber?: number,
    afterLiabilityContact?: string,
    afterLiabilityAddress?: string,
    gasLabelNumber?: string,
    statusTransformId?: number
  }> = [];
  cylinderFillingHistoryList: Array<any> = [];

  pageSizeHistory = 40;
  pageNumberHistory = 1;
  totalHistory = 0;
  historyFirst = 0;

  today = new Date();
  beginTime: Date = new Date((new Date().getTime() - 30 * 24 * 60 * 60 * 1000));
  endTime: Date = new Date();
  cylinderNumber = '';
  firstTime = true;
  multiSortMeta: SortMeta[] = [
    { field: 'createTime', order: -1 },
    { field: 'statusTransformId', order: -1 },
  ];
  routerUrl;
  constructor(
    private commonRequestService: CommonRequestService,
    private cylinderTraceService: CylinderTraceService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private util: Util,
  ) { }

  ngOnInit() {
    this.cylinderNumber = this.route.snapshot.params['gasLabelNumber'] || '';
    const queryParams = this.route.queryParams['value'];
    if (JSON.stringify(queryParams) !== '{}') {
      this.loading = true;
      this.cylinderNumber = queryParams.cylinderNumber;
      this.beginTime = queryParams.beginTime ? new Date(parseInt(queryParams.beginTime, 10)) : this.beginTime;
      this.endTime = queryParams.endTime ? new Date(parseInt(queryParams.endTime, 10)) : this.endTime;
      this.getCylinderHistoryStatus();
    }

  }


  getCylinderHistoryStatus() {
    // if (this.firstTime) {
    //   this.firstTime = false;
    //   this.cylinderHistoryList = [];
    //   return;
    // }
    if (!this.cylinderNumber) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请输入气瓶条码' });
      this.cylinderHistoryList = [];
      return;
    }

    this.cylinderTraceService.getCylinderHistoryStatus({
      pageSize: this.pageSizeHistory,
      pageNumber: this.pageNumberHistory,
      gasLabelNumber: this.cylinderNumber,
      beginTime: this.util.formatTime(this.beginTime, 'start'),
      endTime: this.util.formatTime(this.endTime, 'end')
    }).then(data => {
      if (data.status === 0) {
        this.loading = false;
        if (data.data.length === 0) {
          this.messageService.add({ severity: 'warn', summary: '获取气瓶状态历史为空', detail: '' });
        }
        this.cylinderHistoryList = data.data;
        this.totalHistory = data.data.length;
      } else {
        this.loading = false;
        this.cylinderHistoryList = [];
        this.totalHistory = 0;
        this.messageService.add({ severity: 'warn', summary: '获取气瓶状态历史失败', detail: data.msg });
      }
    }).catch(error => {
      this.loading = false;
      this.cylinderHistoryList = [];
      this.totalHistory = 0;
      this.messageService.add({ severity: 'warn', summary: '获取气瓶状态历史失败', detail: error });
    });
  }

  link(rowData, status) {
    const typeId = rowData[status + 'LiabilityTypeId'];
    const queryParams = {
      beginTime: this.beginTime.getTime(),
      endTime: this.endTime.getTime(),
      hash: Math.random(),
      liabilityNumber: '',
      liabilitySubjectType: typeId
    };
    switch (typeId) {
      case 1:
        queryParams.liabilityNumber = rowData[status + 'LiabilityNumber'];
        this.router.navigate(['../cylinder-record/1'], { relativeTo: this.route, queryParams });
        break;
      case 2:
        queryParams.liabilityNumber = rowData[status + 'LiabilityNumber'];
        this.router.navigate(['../cylinder-record/2'], { relativeTo: this.route, queryParams });
        break;
      case 3:
        queryParams.liabilityNumber = rowData[status + 'LiabilityNumber'];
        queryParams['liabilityName'] = rowData[status + 'LiabilityName'];
        this.router.navigate(['../cylinder-record/3'], { relativeTo: this.route, queryParams });
        break;
      case 4:
        queryParams.liabilityNumber = rowData[status + 'LiabilityNumber'];
        queryParams['liabilityName'] = rowData[status + 'LiabilityName'];
        this.router.navigate(['../cylinder-record/4'], { relativeTo: this.route, queryParams });
        break;
      default:
        break;
    }
  }

  searchCylinderHistory() {
    // this.cylinderHistoryList = [];
    this.pageNumberHistory = 1;
    this.totalHistory = 0;
    this.historyFirst = 0;
    this.getCylinderHistoryStatus();
  }
}

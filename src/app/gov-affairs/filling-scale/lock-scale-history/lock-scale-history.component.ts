import { MessageService } from 'primeng/components/common/messageservice';
import { FillingScaleService } from './../filling-scale.service';
import { zh_CN } from './../../../common/date-localization';
import { LockScaleVO } from './LockScaleVO.model';
import { Component, OnInit, NgZone } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import * as moment from 'moment'
import { CommonRequestService } from '../../../core/common-request.service';
import { Util } from '../../../core/util';
@Component({
  selector: 'gas-lock-scale-history',
  templateUrl: './lock-scale-history.component.html',
  styleUrls: ['./lock-scale-history.component.scss']
})
export class LockScaleHistoryComponent implements OnInit {
  zh = zh_CN;
  pageSize = 40;
  pageNumber = 1;
  first = 0;
  total = 0;
  loading = false;
  recordList: LockScaleVO[] = [];
  enterpriseList: SelectItem[] = [{ label: '全部', value: '' }];
  enterpriseNumber = '';
  balanceNumber = '';
  beginTime = moment().set('date', 1).toDate();
  endTime = moment().toDate();
  today = moment().toDate();
  constructor(
    private commonRequestService: CommonRequestService,
    private fillingScaleService: FillingScaleService,
    private messageService: MessageService,
    private util: Util
  ) { }

  ngOnInit() {
    this.commonRequestService.listCorpInfoInRegion().then(data => {
      if (data.status === 0) {
        this.enterpriseList = data.data.map(item => ({ label: item.enterpriseName, value: item.enterpriseNumber }));
        this.enterpriseList.unshift({ label: '全部', value: '' });
      }
    });

    // this.recordList = [{
    //   lockBalanceId: '',
    //   fillingId: '',
    //   balanceId: '',
    //   balanceNumber: '11',
    //   enterpriseName: '',
    //   enterpriseNumber: '24414124',
    //   remark: '',
    //   createTime: '',
    //   lockBalanceTime: '',
    //   unlockBalanceTime: ''
    // }]
  }

  onPageChange($event) {
    this.onPageChange = (event) => {
      this.pageSize = event.rows;
      this.pageNumber = event.first / event.rows + 1;
      setTimeout(() => {
        this.listBalanceLockRecord();
      }, 0);
    };
  }

  search() {
    this.pageNumber = 1;
    this.first = 0;
    this.listBalanceLockRecord();
  }

  listBalanceLockRecord() {
    if (this.checkForm()) {
      this.loading = true;
      this.fillingScaleService.listBalanceLockRecord({
        pageSize: this.pageSize,
        pageNumber: this.pageNumber,
        enterpriseNumber: this.enterpriseNumber,
        balanceNumber: this.balanceNumber,
        startDate: this.util.formatTime(this.beginTime, 'start'),
        endDate: this.util.formatTime(this.endTime, 'end'),
      }).then(data => {
        this.loading = false;
        if (data.status === 0) {
          this.recordList = data.data.list;
          this.total = data.data.total;
        } else {
          this.recordList = [];
          this.total = 0;
          this.messageService.add({ severity: 'warn', summary: '', detail: data.msg });
        }
      });
    }
  }

  checkForm(): boolean {
    if (this.balanceNumber && !this.enterpriseNumber) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请选择一个企业！' });
      return false;
    }
    return true;
  }
}

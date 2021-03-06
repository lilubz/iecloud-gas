import { MessageService } from 'primeng/components/common/messageservice';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../input/user-info/Customer.model';
import { calcBindingFlags } from '@angular/core/src/view/util';
import { AddCustomerStatisticService } from '../add-customer.service';
import { Util } from '../../../core/util';

@Component({
  selector: 'gas-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [AddCustomerStatisticService]
})
export class DetailComponent implements OnInit {
  recordPageSize = 40;
  recordPageNumber = 1;
  recordTotal = 0;
  selectedEnterpriseId;
  regionId;
  beginTime: any;
  endTime: any;
  // 某企业某日的用户登记记录
  customerRegisterRecords: Customer[] = [];
  loading = false;
  constructor(
    private route: ActivatedRoute,
    private messageService: MessageService,
    private addCustomerService: AddCustomerStatisticService,
    private util: Util
  ) { }

  ngOnInit() {
    const queryParams = this.route.queryParams['value'];
    if (JSON.stringify(queryParams) !== '{}') {
      this.selectedEnterpriseId = queryParams.enterpriseId || '';
      this.regionId = queryParams.regionId || '';
      this.beginTime = queryParams.circulationBeginTime || '';
      this.endTime = queryParams.circulationEndTime || '';
      this.getEnterpriseRegisterDetail();
    }
  }

  onRecordPageChange(event) {
    this.onRecordPageChange = (event) => {
      this.recordPageNumber = event.first / event.rows + 1;
      this.recordPageSize = event.rows;
      this.getEnterpriseRegisterDetail();
    }
  }

  getEnterpriseRegisterDetail() {
    this.loading = true;
    this.addCustomerService.listUserInfoRecentlyRegister({
      enterpriseId: this.selectedEnterpriseId,
      regionId: this.regionId,
      pageNumber: this.recordPageNumber,
      pageSize: this.recordPageSize,
      beginTime: this.beginTime || '',
      endTime: this.endTime || ''
    }).then(data => {
      this.loading = false;
      if (data.status === 0) {
        this.customerRegisterRecords = data.data.list;
        this.recordTotal = data.data.total;
      } else {
        this.customerRegisterRecords = [];
        this.recordTotal = 0;
        this.messageService.add({ severity: 'warn', summary: '获取详情信息失败', detail: data.msg });
      }
    });
  }
}

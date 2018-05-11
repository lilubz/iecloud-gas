import { Component, OnInit } from '@angular/core';
import { CommonRequestService } from '../../core/common-request.service';
import { AddCustomerStatisticService } from './add-customer.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { Customer } from '../../input/user-info/Customer.model';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'gas-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
  providers: [AddCustomerStatisticService]
})
export class AddCustomerComponent implements OnInit {
  // 企业统计分页参数
  statisticPageSize = 40;
  statisticPageNumber = 1;
  statisticTotal = 0;
  statisticFirst = 0;
  // 用户登记记录分页参数
  loading = false;

  // 区域下拉列表
  regions: SelectItem[] = [];
  selectedRegionId = '';
  selectedEnterpriseId = '';

  // 企业登记用户统计
  enterpriseRegisterStatistic: {
    regionId: string,
    regionName: string,
    enterpriseName: string,
    enterpriseNumber: string,
    count: string,
  }[] = [];

  constructor(
    private commonRequestService: CommonRequestService,
    private addCustomerService: AddCustomerStatisticService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.getEnterpriseStatistic();
    this.commonRequestService.getRegions().then(data => {
      if (data.status === 0) {
        this.regions = data.data.map(item => ({ label: item.regionName, value: item.regionId }));
        this.regions.unshift({ label: '全部', value: '' });
      } else {
        this.messageService.add({ severity: 'warning', summary: '', detail: '获取区域信息失败' });
      }
    });
  }
  onStatisticPageChange(event) {
    this.statisticPageNumber = event.first / event.rows + 1;
    this.statisticPageSize = event.rows;
    this.getEnterpriseStatistic();
  }

  getEnterpriseStatistic() {
    this.loading = true;
    this.addCustomerService.getUserCountRecentlyRegister({
      regionId: this.selectedRegionId,
      pageNumber: this.statisticPageNumber,
      pageSize: this.statisticPageSize
    }).then(data => {
      this.loading = false;
      if (data.status === 0) {
        this.enterpriseRegisterStatistic = data.data.list;
        this.statisticTotal = data.data.total;
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取登记统计信息失败', detail: data.msg });
        this.enterpriseRegisterStatistic = [];
        this.statisticTotal = 0;
      }
    });
  }

  search() {
    this.statisticFirst = 0;
    this.statisticPageNumber = 1;
    this.getEnterpriseStatistic();
  }
}
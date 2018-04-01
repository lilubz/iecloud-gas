import { MessageService } from 'primeng/components/common/messageservice';
import { CustomerService } from './customer.service';
import { CommonRequestService } from './../../../core/common-request.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../enterprise/input/user-info/Customer.model';

@Component({
  selector: 'gas-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  // 企业统计分页参数
  statisticPageSize = 40;
  statisticPageNumber = 1;
  statisticTotal = 0;
  statisticFirst = 0;
  // 用户登记记录分页参数
  recordPageSize = 10;
  recordPageNumber = 1;
  recordTotal = 0;

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

  enterpriseRegisterCustomer: Customer = new Customer();

  // 某企业某日的用户登记记录
  customerRegisterRecords: Customer[] = [];

  detailVisible = false;
  constructor(
    private commonRequestService: CommonRequestService,
    private customerService: CustomerService,
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
  onRecordPageChange(event) {
    this.recordPageNumber = event.first / event.rows + 1;
    this.recordPageSize = event.rows;
    this.getEnterpriseRegisterDetail();
  }
  getEnterpriseStatistic() {
    this.customerService.getUserCountRecentlyRegister({
      regionId: this.selectedRegionId,
      pageNumber: this.statisticPageNumber,
      pageSize: this.statisticPageSize
    }).then(data => {
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

  getEnterpriseRegisterDetail() {
    if (!this.selectedEnterpriseId) {
      return false;
    }
    this.customerService.listUserInfoRecentlyRegister({
      enterpriseId: this.selectedEnterpriseId,
      pageNumber: this.recordPageNumber,
      pageSize: this.recordPageSize
    }).then(data => {
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

  showDetail(record) {
    this.detailVisible = true;
    this.selectedEnterpriseId = record.enterpriseNumber;
    this.getEnterpriseRegisterDetail();
  }

  search() {
    this.statisticFirst = 0;
    this.statisticPageNumber = 1;
    this.getEnterpriseStatistic();
  }
}

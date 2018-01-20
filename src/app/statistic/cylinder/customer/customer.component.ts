import { Component, OnInit } from '@angular/core';
import { StatisticCylinderService } from '../statistic-cylinder.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { UtilService } from '../../../core/util.service';

@Component({
  selector: 'gas-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  loading = false;
  customerStatistics = [];

  calculateTotal = this.utilService.calculateTotal;
  constructor(
    private statisticCylinderService: StatisticCylinderService,
    private messageService: MessageService,
    private utilService: UtilService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.getCustomerCylinder();
  }

  getCustomerCylinder() {
    this.statisticCylinderService.getCustomerCylinderCount().then(data => {
      if (data.status === 0) {
        this.customerStatistics = data.data;
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取用户气瓶统计失败', detail: data.msg });
      }
      this.loading = false;
    });
  }

}

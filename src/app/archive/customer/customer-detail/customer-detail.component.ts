import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { CustomerDetailService } from './customer-detail.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { usingCylinderModel } from './using-cylinder.model';
@Component({
  selector: 'gas-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss'],
  providers: [CustomerDetailService]
})

export class CustomerDetailComponent implements OnInit {
  detailList: usingCylinderModel[] = [];

  detailLists: any;
  loading: any;
  typeList = '';
  certificateAppendixImages: {
    source: string,
    thumbnail: string,
    title: string,
  }[] = [];
  contractAppendixImages: {
    source: string,
    thumbnail: string,
    title: string,
  }[] = [];

  constructor(
    private route: ActivatedRoute,
    private CustomerDetailService: CustomerDetailService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.queryDetail();
    this.detailLists = {};
    this.loading = '';
  }

  /**
  * 查询用户详情信息
  */
  queryDetail() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.typeList = params.get('type');
        return this.CustomerDetailService.querySingle(
          { 'type': params.get('type'), 'typeNumber': params.get('typeNumber') });
      }).subscribe((data) => {
        this.loading = data.status;
        if (data.status === 0) {
          this.detailList = data.data;
          this.ondetail(0);
          for (let i = 0; i < this.detailList.length; i++) {
            if (this.detailList[i].gender === '0') {
              this.detailList[i].gender = '男';
            } else if (this.detailList[i].gender === '1') {
              this.detailList[i].gender = '女';
            } else {
              this.detailList[i].gender = '';
            }
          }
        } else {
          if (this.typeList === 'idNumber') {
            this.messageService.add({ severity: 'warn', summary: '查询结果', detail: '未查询到证件编号信息' });
          } else if (this.typeList === 'userCardNumber') {
            this.messageService.add({ severity: 'warn', summary: '查询结果', detail: '未查询到用户卡号信息' });
          } else if (this.typeList === 'phone') {
            this.messageService.add({ severity: 'warn', summary: '查询结果', detail: '未查询到联系电话信息' });
          } else if (this.typeList === 'userNumber') {
            this.messageService.add({ severity: 'warn', summary: '查询结果', detail: '未查询到用户ID信息' });
          }

        }
      }, error => {
        this.messageService.add({ severity: 'error', summary: '获取信息异常', detail: error });
      });
  }
  /**
   * 查询结果点击切换详情的，用于特殊情况出现多条数据暂未看到
   */
  ondetail(data) {
    this.detailLists = this.detailList[data];
    this.certificateAppendixImages = this.detailLists.certificateAppendixUrl ? this.detailLists.certificateAppendixUrl
      .split(',').map(item => ({ source: item, thumbnail: item, title: '' })) : [];
    this.contractAppendixImages = this.detailLists.contractAppendixUrl ? this.detailLists.contractAppendixUrl.split(',')
      .map(item => ({ source: item, thumbnail: item, title: '' })) : [];
  }

  showUsedCylinderDetail(id) {
    let navigationExtras: NavigationExtras = {
      queryParams: { 'userNumber': this.detailLists.userNumber },
      relativeTo: this.route
    };

    // Navigate to the login page with extras
    this.router.navigate(['../usingCylinder'], navigationExtras);
    // this.searchUserCy();
  }
}

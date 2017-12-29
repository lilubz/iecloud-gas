import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { CustomerDetailService } from './customer-detail.service';
import { MessageService } from 'primeng/components/common/messageservice';
@Component({
  selector: 'gas-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss'],
  providers: [CustomerDetailService]
})

export class CustomerDetailComponent implements OnInit {
  detailList: Array<{
    userName: string,
    gender: string,
    certificateName: string,
    certificateId: string,
    certificateAddress: string,
    userTypeName: string,
    principal: string,
    linkman: string,
    phone: string,
    deliveryAddress: string,
    dispatcherName: string,
    registrationTime: string,
    registrant: string,
    certificateAppendixUrl: string,
    contractAppendixUrl: string,
    regionName: string,
    corpName: string,
    stationName: string,
    status: string,
    userNumber: string,
    gcCount: string,
  }> = [{
    userName: '',
    gender: '',
    certificateName: '',
    certificateId: '',
    certificateAddress: '',
    userTypeName: '',
    principal: '',
    linkman: '',
    phone: '',
    deliveryAddress: '',
    dispatcherName: '',
    registrationTime: '',
    registrant: '',
    certificateAppendixUrl: '',
    contractAppendixUrl: '',
    regionName: '',
    corpName: '',
    stationName: '',
    status: '',
    userNumber: '',
    gcCount: '',
  }];
  detailLists: any;
  loading: any;
  typeList = '';
  // photoList: Array<{
  //   pictureUrl: string;
  // }>;
  constructor(
    private route: ActivatedRoute,
    private CustomerDetailService: CustomerDetailService,
    private router: Router,
    private messageService: MessageService
  ) { }

  initDetailList() {
    this.detailList = [
      {
        userName: '',
        gender: '',
        certificateName: '',
        certificateId: '',
        certificateAddress: '',
        userTypeName: '',
        principal: '',
        linkman: '',
        phone: '',
        deliveryAddress: '',
        dispatcherName: '',
        registrationTime: '',
        registrant: '',
        certificateAppendixUrl: '',
        contractAppendixUrl: '',
        regionName: '',
        corpName: '',
        stationName: '',
        status: '',
        userNumber: '',
        gcCount: '',
      }
    ];
    this.detailLists = {};
  }
  queryDetail() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.typeList = params.get('type');
        return this.CustomerDetailService.querySingle(
          { 'regionId': params.get('city'), 'type': params.get('type'), 'typeNumber': params.get('typeNumber') });
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
            this.messageService.add({
              severity: 'warn',
              summary: '查询结果',
              detail: '未查询到证件编码信息'
            });
          } else if (this.typeList === 'userCardNumber') {
            this.messageService.add({
              severity: 'warn',
              summary: '查询结果',
              detail: '未查询到用户卡信息'
            });
          } else {
            this.messageService.add({
              severity: 'warn',
              summary: '查询结果',
              detail: '未查询到联系电话信息'
            });
          }

        }
      }, error => {
        this.messageService.add({
          severity: 'error',
          summary: '获取信息异常',
          detail: error
        });
      });
  }
  ondetail(aa) {
    this.detailLists = this.detailList[aa];
  }

  ngOnInit() {
    this.queryDetail();
    this.initDetailList();
    this.loading = '';
  }

}

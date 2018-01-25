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

  cylinderVisible = false;
  dataTablelist: any[] = [];
  pageNumber = 1;
  pageSize = 10;
  pageOption = [5, 10, 20, 30, 40];
  total = 3;
  first = 0;
  pageData = {};
  firstStatus = false;
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
    this.initDetailList();
    this.loading = '';
  }
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
  /**
  * 查询用户详情信息
  */
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
  /**
   * 查询结果点击切换详情的，用于特殊情况出现多条数据暂未看到
   */
  ondetail(data) {
    this.detailLists = this.detailList[data];
    this.certificateAppendixImages = this.detailLists.certificateAppendixUrl ? this.detailLists.certificateAppendixUrl
      .split(',').map(item => ({ source: item, thumbnail: item, title: '' })) : '';
    this.contractAppendixImages = this.detailLists.contractAppendixUrl ? this.detailLists.contractAppendixUrl.split(',')
      .map(item => ({ source: item, thumbnail: item, title: '' })) : '';
  }
  /**
   * 弹出框
   */
  showDialog(id) {
    this.cylinderVisible = true;
    this.searchUserCy();
  }

  onPageChange(event) {
    const page: {
      pageSize: number,
      pageNumber: number
    } = {
        pageSize: event.rows,
        pageNumber: event.first / event.rows + 1
      };
    this.pageData = page;
    this.searchUserCy(this.pageData);
    // console.log(event);
  }

  /**
  * 查询用户在用气瓶详情
  */
  searchUserCy(page?) {
    const params = {
      userNumber: this.detailLists.userNumber || '',
      pageNumber: 1,
      pageSize: 10,
    };
    if (page) {
      params['pageNumber'] = page.pageNumber;
      params['pageSize'] = page.pageNumber;
    } else {
      this.first = 0;
    }
    // 第一次 page查询时调接口
    if (!this.firstStatus) {
      this.firstStatus = true;
    } else {
      this.CustomerDetailService.listUserHasGc(params).then(data => {
        if (data.status === 0) {
          this.dataTablelist = data.data.list;
          this.total = data.data.size;
        } else {
          this.dataTablelist = [];
          this.total = 0;
          this.messageService.add({
            severity: 'warn',
            summary: '提示信息',
            detail: data.msg
          });
        }

      }).catch(error => {
        this.dataTablelist = [];
        this.total = 0;
        this.messageService.add({
          severity: 'error', summary: '服务器错误，错误码：', detail: error.status
        });
      });
    }
  }
}

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
  customerDetailList: usingCylinderModel = new usingCylinderModel();

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
  visible = false;
  imgArray = [];
  constructor(
    private route: ActivatedRoute,
    private _service: CustomerDetailService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams) => {
      this.queryDetail(queryParams);
    })
  }

  /**
  * 查询用户详情信息
  */
  queryDetail(queryParams) {
    this.loading = true;
    this._service.queryCustomerDetail(queryParams).then(data => {
      if (data.status === 0) {
        this.customerDetailList = data.data;
        this.customerDetailList['isTrue'] = true;
        if (this.customerDetailList.gender === '0') {
          this.customerDetailList.gender = '男';
        } else if (this.customerDetailList.gender === '1') {
          this.customerDetailList.gender = '女';
        } else {
          this.customerDetailList.gender = '';
        }
      } else {
        this.messageService.add({ severity: 'warn', summary: '响应信息', detail: data.msg });
      }
      this.loading = false;
    });
  }
  showImg(imageUrl) {
    this.visible = true;
    this.imgArray = imageUrl.split(',');
    this.imgArray = this.imgArray.map(item => ({
      url: item
    }));
  }
  /**
   * 查询结果点击切换详情的，用于特殊情况出现多条数据暂未看到
   */
}

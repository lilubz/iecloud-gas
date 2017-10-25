import { Component, OnInit } from '@angular/core';
import { detailList } from './test';

import { CustomerDetailService } from './customer-detail.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'gas-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss'],
  providers: [CustomerDetailService]
})

export class CustomerDetailComponent implements OnInit {
  // searchParams: {
  //   cylinderCode: string;
  // };
  // gasInput: any;
  detailList: Array<{
    borough: string;
    enterpriseName: string;
    serviceCondition: string;
    fillingState: string;
    // borough: string;
    // borough: string;
    // borough: string;
    // borough: string;
    // borough: string;
    // borough: string;
    // borough: string;
    // borough: string;
    // borough: string;

  }>;
  photoList: Array<{
    pictureUrl: string;
  }>;
  // constructor(private CustomerDetailService: CustomerDetailService) { }
  // constructor(private route: ActivatedRoute,
  //   private CustomerDetailService: CustomerDetailService,
  //  private router: Router,
  // ) {}
  getList() {
    this.detailList = detailList;
    console.log(detailList);
    // console.log(this.route.params);
    // this.route.params
    // .subscribe(params => {
    //   this.gasInput = params['gasInput'];
    //   console.log(this.gasInput);
    // });
  //   const params = {
  //     cylinderCode: this.searchParams.cylinderCode,
  //   };
  //   this.CustomerDetailService.querySingle(params).then(data => {
  //     this.detailList = data.data.list;
  //     this.photoList = data.data.pictureList;
  //   });
  }
  ngOnInit() {
    this.getList();
  }
}

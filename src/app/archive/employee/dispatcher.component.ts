import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, Validators, FormGroup } from '@angular/forms';

import { DispatcherService } from './dispatcher.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { validator } from '../../common/validator';
import { ActivatedRoute } from '@angular/router';
import { CommonRequestService } from '../../core/common-request.service';

@Component({
  selector: 'gas-dispatcher',
  templateUrl: 'dispatcher.component.html',
  styleUrls: ['dispatcher.component.scss'],
  providers: [DispatcherService]
})

export class DispatcherComponent implements OnInit {
  currentImgUrl = '';
  dropdown = {
    companyOpt: [
      {
        label: '全部',
        value: ''
      }
    ],
    supplyStation: [],
    default: [
      {
        label: '全部',
        value: ''
      }
    ]
  };
  dataTable = {
    list: [],
    option: [10, 20, 40, 80],
    total: 0,
    first: 0,
  };
  formModel: any = this.fb.group({
    enterpriseId: '',
    supplyStationId: '',
    name: ['', validator.minLength(2, '姓名')],
    jobNumber: '',
    phone: ['', validator.phone],
    idNumber: ['', validator.idNumber]
  });
  pageParams = {
    enterpriseId: '',
    supplyStationId: '',
    name: '',
    jobNumber: '',
    phone: '',
    idNumber: '',
    regionId: '',
    pageSize: this.dataTable.option[2],
    pageNumber: 1,
    dispatcherNumber : '',
  };
  constructor(
    private dispatcherService: DispatcherService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private routerInfo: ActivatedRoute,
    private commonRequest: CommonRequestService
  ) { }

  ngOnInit() {
    this.cylinderSelectOpt();
    this.getDropdownSupplyStation();

    this.routerInfo.paramMap.switchMap((params) => {
      return Promise.resolve(params);
    }).subscribe((params) => {
      if (params.get('dispatcherNumber')) {
        this.formModel.patchValue({ jobNumber: params.get('dispatcherNumber') });
        this.onSearch();
      }
    });

    const queryParams = this.routerInfo.queryParams['value'];
    if (JSON.stringify(queryParams) !== '{}') {
      this.formModel.patchValue({
        jobNumber: queryParams.dispatcherNumber || '',
        idNumber: queryParams.idNumber || '',
        name: queryParams.employee || '',
        supplyStationId: queryParams.supplyStationNumber || '',
        enterpriseId: queryParams.enterpriseNumber || '',
      });
      this.pageParams.regionId = queryParams.regionId || '';
      this.pageParams.dispatcherNumber = queryParams.liabilityNumber || '';
    }
    Object.assign(this.pageParams, this.formModel.value);
    this.getDispatcherInfo();
  }

  showImg(event, url, overlaypanel) {
    this.currentImgUrl = '';
    overlaypanel.toggle(event);
    const el = overlaypanel.container;
    setTimeout(() => {
      this.currentImgUrl = url;
      el.style.top = parseFloat(el.style.top) - 120 + 'px';
      el.style.left = parseFloat(el.style.left) - 120 + 'px';
      el.style.maxWidth = '300px';
    }, 0);
  }
  onSearch() {
    if (this.formModel.valid) { // 通过了验证
      this.pageParams.pageNumber = 1;
      this.dataTable.first = 0;
      Object.assign(this.pageParams, this.formModel.value);
      this.pageParams.regionId = '';
      this.pageParams.dispatcherNumber = '';
      this.getDispatcherInfo();
    } else { // 没有通过验证
      for (const key in this.formModel.controls) {
        if (this.formModel.controls[key].errors) {
          const msg = this.formModel.controls[key].errors.msg;
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: msg });
          return;
        }
      }
    }
  }

  onPageChange($event) {
    this.onPageChange = (event) => {
      this.pageParams.pageSize = event.rows;
      this.pageParams.pageNumber = event.first / event.rows + 1;
      this.getDispatcherInfo();
    };
  }

  getDispatcherInfo(params?) {
    this.dispatcherService.getDispatcherInfo({
      enterpriseNumber: this.pageParams.enterpriseId,
      supplyStationNumber: this.pageParams.supplyStationId,
      name: this.pageParams.name,
      jobNumber: this.pageParams.jobNumber,
      phone: this.pageParams.phone,
      idNumber: this.pageParams.idNumber,
      pageSize: this.pageParams.pageSize,
      pageNumber: this.pageParams.pageNumber,
      regionId : this.pageParams.regionId,
      dispatcherNumber : this.pageParams.dispatcherNumber,
    })
      .then(data => {
        if (data.status === 0) {
          this.dataTable.list = data.data.list;
          this.dataTable.total = data.data.total;
        } else {
          this.dataTable.list = [];
          this.dataTable.total = 0;
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
        this.formModel.setValue({
          enterpriseId: this.pageParams.enterpriseId,
          supplyStationId: this.pageParams.supplyStationId,
          name: this.pageParams.name,
          jobNumber: this.pageParams.jobNumber,
          phone: this.pageParams.phone,
          idNumber: this.pageParams.idNumber
        });
      });
  }

  cylinderSelectOpt(params?) {
    this.dispatcherService.getDropdownForCorpInfoInRegion(params)
      .then(data => {
        if (data.status === 0) {
          this.dropdown.companyOpt = this.dropdown.default.concat(data.data.map((item) => ({
            label: item.enterpriseName,
            value: item.enterpriseNumber
          })));
        } else {
          this.dropdown.companyOpt = this.dropdown.default;
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }

  getDropdownSupplyStation() {
    this.commonRequest.listCorpSupplyStation()
      .then(data => {
        if (data.status === 0) {
          this.dropdown.supplyStation = this.dropdown.default.concat(data.data.map((item) => ({
            label: item.supplyStationName,
            value: item.supplyStationNumber
          })));
        } else {
          this.dropdown.supplyStation = this.dropdown.default.concat([]);
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
}

import { UserInfoService } from './user-info.service';
import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Customer } from './Customer.model';
import { zh_CN, DATE_LOCALIZATION } from './../../core/date-localization';
import { User } from './../../model/User.model';
import { UserStateService } from './../../core/userState.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Format } from './../../core/format.service';
import { Message } from 'primeng/components/common/api';
@Component({
  selector: 'gas-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  IDTypes: SelectItem[] = [
    { label: '身份证', value: '身份证' },
    { label: '军官证', value: '军官证' },
    { label: '大陆通行证', value: '大陆通行证' },
    { label: '护照', value: '护照' }
  ];
  customerTypes: SelectItem[] = [
    { label: '民用', value: [{ label: '民用', value: '民用', parentValue: '民用' }] },
    { label: '工业', value: [{ label: '企业', value: '企业', parentValue: '工业' }] },
    {
      label: '商业',
      value: [{ label: '餐饮', value: '餐饮', parentValue: '商业' },
      { label: '宾馆', value: '宾馆', parentValue: '商业' },
      { label: '散户', value: '散户', parentValue: '商业' }]
    },
  ];
  parentCustomerType: SelectItem[];
  customer: Customer = new Customer();
  user: User;
  msgs: Message[] = [];

  constructor( @Inject(DATE_LOCALIZATION) public zh, private userStateService: UserStateService,
    private format: Format, private userInfoService: UserInfoService) {
    this.user = this.userStateService.getUser();
    console.dir(this.user);
  }

  ngOnInit() {
    this.parentCustomerType = this.customerTypes[0].value;
    this.customer.IDType = '军官证';
    this.customer.customerType = '民用';
    this.customer.subCustomerType = '民用';
  }

  save(IDImageFiles: File[], OtherImageFiles: File[]) {
    this.customer.IDImage = IDImageFiles;
    this.customer.otherImage = OtherImageFiles;
    if (this.checkForm()) {
      this.userInfoService.addCustomer(this.customer).then((data) => {
        console.log(data);
        if (data.status === 0) {
          this.customer = new Customer();
          this.showMessage('', '', '');
        } else {
          this.showMessage('', '', '');
        }
      }).catch((error) => {

      });
    } else {

    }
  }

  checkForm(): boolean {
    console.log(this.customer);
    if (this.customer.IDImage.length > 3 || this.customer.otherImage.length > 3) {
      this.showMessage('error', '保存失败', '最多上传文件三张图片！');
      return false;
    }
    return true;
  }
  selectIDAddress(event) {
    console.log(event);
  }

  selectResidentialAddress(event) {
    console.log(event);

  }

  selectConstractBeginDate(event) {
    this.customer.contractBeginDate = this.format.dateFormat(event, 'yyyy-MM-dd');
  }

  selectConstractEndDate(event) {
    this.customer.contractEndDate = this.format.dateFormat(event, 'yyyy-MM-dd');
  }

  changeCustomerType(event) {
    this.customer.customerType = event.value[0].parentValue;
    this.customer.subCustomerType = event.value[0].value;
  }

  showMessage(type, title, msg) {
    this.msgs.push({
      severity: type,
      summary: title,
      detail: msg
    });
    setTimeout(() => this.msgs = [], 2000);
  }
}

import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'gas-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  cities: SelectItem[] = [
    { label: '温州市', value: '温州市' }
  ];
  UserID: SelectItem[] = [
    { label: '证件号', value: '证件号' },
    { label: '用户卡号', value: '用户卡号' },
    { label: '手机号', value: '手机号' },
  ];
  selectedCity = this.cities[0].value;
  selectedUserID = this.UserID[0].value;
  constructor() { }

  ngOnInit() {
  }

}

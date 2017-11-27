import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'gas-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  cities: SelectItem[] = [
    { label: '温州市', value: '330300' }
  ];
  UserText: string;
  selectedUserID: string;
  UserID: SelectItem[] = [
    { label: '证件编号', value: 'idNumber' },
    { label: '用户编码', value: 'userCardNumber' },
    { label: '联系电话', value: 'phone' },
  ];
  selectedCity = this.cities[0].value;
  constructor() { }

  ngOnInit() {
  this.selectedUserID = 'idNumber';
  }

}

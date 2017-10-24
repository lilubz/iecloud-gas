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
  selectedCity = this.cities[0].value;
  constructor() { }

  ngOnInit() {
  }

}

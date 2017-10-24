import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';


@Component({
  selector: 'gas-cylinder',
  templateUrl: './cylinder.component.html',
  styleUrls: ['./cylinder.component.css']
})

export class CylinderComponent implements OnInit {
  cities: SelectItem[] = [
    { label: '温州市', value: '温州市' }
  ];
  selectedCity = this.cities[0].value;

  constructor() { }

  ngOnInit() { }
}

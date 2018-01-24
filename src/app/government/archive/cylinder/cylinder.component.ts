import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';


@Component({
  selector: 'gas-cylinder',
  templateUrl: './cylinder.component.html',
  styleUrls: ['./cylinder.component.css'],

})

export class CylinderComponent implements OnInit {
  cities: SelectItem[] = [
    { label: '温州市', value: '温州市' }
  ];
  selectedCity = this.cities[0].value;
  gasInput: any;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log('gov');
    this.gasInput = '';
    // getid(){

    // }
    // this.gasInput = 1;
  }

  onSearch() {
    this.router.navigate(['/archive/cylinder/detail', this.gasInput || '']);
  }
}

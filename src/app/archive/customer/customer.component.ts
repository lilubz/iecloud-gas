import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserStateService } from './../../core/userState.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import { OrganizationType } from '../../common/OrganizationType';

@Component({
  selector: 'gas-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  // cities: SelectItem[] = [
  //   { label: '温州市', value: '330300' }
  // ];
  OrganizationType = OrganizationType;
  organizationType: OrganizationType;
  // selectedCity = this.cities[0].value;
  constructor(
    private router: Router,
    private userStateService: UserStateService,
    private route: ActivatedRoute,
  ) {
    this.organizationType = this.userStateService.getUserOrganizationType();
  }

  ngOnInit() {
  }
}

import { OrganizationType } from './../../common/OrganizationType';
import { UserStateService } from './../../core/userState.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';


@Component({
  selector: 'gas-cylinder',
  templateUrl: './cylinder.component.html',
  styleUrls: ['./cylinder.component.css'],

})

export class CylinderComponent implements OnInit {
  // cities: SelectItem[] = [
  //   { label: '温州市', value: '温州市' }
  // ];
  // selectedCity = this.cities[0].value;
  OrganizationType = OrganizationType;
  organizationType: OrganizationType;
  gasInput: any;
  constructor(
    private router: Router,
    private userStateService: UserStateService,
    private route: ActivatedRoute,
  ) {
    this.organizationType = this.userStateService.getUserOrganizationType();
  }

  ngOnInit() {
    this.gasInput = '';
    // getid(){

    // }
    // this.gasInput = 1;
  }

  onSearch() {
    const queryParams={
      gasLabelNumber:this.gasInput
    }
    this.router.navigate(['/archive/cylinder/detail'],{ relativeTo: this.route, queryParams });
  }
}

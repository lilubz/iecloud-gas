import { Component, OnInit, OnDestroy, Inject, } from '@angular/core';
import { RoleType } from '../../common/RoleType';
@Component({
  selector: 'gas-bottle-library',
  templateUrl: './bottle-library.component.html',
  styleUrls: ['./bottle-library.component.scss']
})
export class BottleLibraryComponent implements OnInit, OnDestroy {
  RoleType=RoleType;
  ngOnInit() {
  }
  ngOnDestroy() {
  }
}

import { Util } from '../../core/util';
import { Component, OnInit, Input } from '@angular/core';
import { RoleType } from '../../common/RoleType';
import { CylinderOverviewVO } from './cylinder-overview.model';

@Component({
  selector: 'gas-cylinder-overview-table',
  templateUrl: './cylinder-overview-table.component.html',
  styleUrls: ['./cylinder-overview-table.component.scss']
})
export class CylinderOverviewTableComponent implements OnInit {
  @Input() cylinderStatistics: CylinderOverviewVO[] = [];
  @Input() loading = false;
  @Input() roleType: RoleType = RoleType.Government;
  @Input() isShowRouterLink = true;
  RoleType = RoleType;
  constructor(
    public util: Util
  ) { }

  ngOnInit() {
  }

}

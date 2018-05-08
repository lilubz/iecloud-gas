import { RoleType } from './../../../common/RoleType';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { CylinderOverviewService } from './cylinder-overview.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { UserStateService } from './../../../core/userState.service';
import { Util } from './../../../core/util';
import { CylinderOverviewVO } from '../../../shared/cylinder-overview-table/cylinder-overview.model';

@Component({
  selector: 'gas-cylinder-overview-enterprise',
  templateUrl: './cylinder-overview-enterprise.component.html',
  providers: [CylinderOverviewService]
})
export class CylinderOverviewEnterpriseComponent implements OnInit {
  loading = false;
  RoleType = RoleType;
  enterpriseCylinders: CylinderOverviewVO[] = [];

  constructor(
    private cylinderOverviewService: CylinderOverviewService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private userStateService: UserStateService,
    private util: Util
  ) { }

  ngOnInit() {
    this.loading = true;
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        // 企业管理员的organizationType为1，企业管理员和政府管理员获取企业数据时的接口不同。因为企业只需要获取自己企业的信息，而政府需要获取该区域下所有的企业信息，但这两个接口返回的数据结构是相同的。
        if (this.userStateService.getUser().organizationType === 1) {
          return this.cylinderOverviewService
            .getCylinderEnterpriseOverviewByOrganizationId({ organizationId: params.get('id') });
        } else {
          return this.cylinderOverviewService
            .getCylinderEnterpriseOverviewByAreaId({ regionId: params.get('id') });
        }
      }).subscribe(data => {
        if (data.status === 0) {
          this.enterpriseCylinders = data.data;
        } else {
          this.messageService.add({ severity: 'warn', summary: '获取信息失败', detail: data.msg });
        }
        this.loading = false;
      }, error => {
        this.messageService.add({ severity: 'error', summary: '获取信息异常', detail: error });
        this.loading = false;
      });
  }

}

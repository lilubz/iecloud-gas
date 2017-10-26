import { Observable } from 'rxjs/Observable';
import {Component, OnInit} from '@angular/core';
// import { detailList } from './detail';
import {CylinderDetailService} from './cylinder-detail.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'gas-cylinder-detail',
  templateUrl: './cylinder-detail.component.html',
  styleUrls: ['./cylinder-detail.component.scss'],
  providers: [CylinderDetailService]
})

export class CylinderDetailComponent implements OnInit {
    cylinderCode: any;
    data: any;

  detailList:  {
    regionName: string,
    enterpriseName: string,
    serviceCondition: string,
    fillingState: string,
    transmittingState: string,
    currentLocation: string,
    currentCirculation: string,
    liabilityName: string,
    createTime: string,
    registrationPerson: string,
    registrationDate: string,
    gasLabelNumber: string,
    serialNumber: string,
    enterpriseCylinderCode: string,
    null: string,
    typeId: string,
    manufactureName: string,
    timeManufacture: string,
    nextInspectionTime: string,
    inspectionOrganization: string,
    fillingMedia: string,
    weight: string,
    volume: string,
    designWallThickness: string,
    MPa: string,
    nominalWorkingPressure: string,
    scrapDate: string,
    scrapDisposalSituation: string,
    scrapDisposalDate: string,
  };
  photoList: Array < {
    pictureUrl: string;
  } > ;
  constructor(private CylinderDetailService: CylinderDetailService, private route: ActivatedRoute, private router: Router) {
  }
  initDetail() {
    this.detailList = {
      regionName: '',
      enterpriseName: '',
      serviceCondition: '',
      fillingState: '',
      transmittingState: '',
      currentLocation: '',
      currentCirculation: '',
      liabilityName: '',
      createTime: '',
      registrationPerson: '',
      registrationDate: '',
      gasLabelNumber: '',
      serialNumber: '',
      enterpriseCylinderCode: '',
      null: '',
      typeId: '',
      manufactureName: '',
      timeManufacture: '',
      nextInspectionTime: '',
      inspectionOrganization: '',
      fillingMedia: '',
      weight: '',
      volume: '',
      designWallThickness: '',
      MPa: '',
      nominalWorkingPressure: '',
      scrapDate: '',
      scrapDisposalSituation: '',
      scrapDisposalDate: '',
    };
  }
  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => {
      // console.log(11);
      return this.CylinderDetailService.querySingle({cylinderCode: params.get('id')});
    }).subscribe((data) => {
      // console.log(data);
      if (data.status === 0) {
        this.detailList = data.data;
        console.log(this.detailList);
      }else {
        console.log('查询失败');
      }
    });
    this.initDetail();
  }
}

import { Component, OnInit } from '@angular/core';
import { detailList } from './detail';
import { CylinderDetailService } from './cylinder-detail.service';
@Component({
  selector: 'gas-cylinder-detail',
  templateUrl: './cylinder-detail.component.html',
  styleUrls: ['./cylinder-detail.component.scss'],
  providers: [CylinderDetailService]
})

export class CylinderDetailComponent implements OnInit {
  // searchParams: {
  //   cylinderCode: string;
  // };
  detailList: Array<{
    borough: string;
    enterpriseName: string;
    serviceCondition: string;
    fillingState: string;
    // borough: string;
    // borough: string;
    // borough: string;
    // borough: string;
    // borough: string;
    // borough: string;
    // borough: string;
    // borough: string;
    // borough: string;

  }>;
  photoList: Array<{
    pictureUrl: string;
  }>;
  // constructor(private CylinderDetailService: CylinderDetailService) { }
  getList() {
    this.detailList = detailList;
    console.log(detailList);
  //   const params = {
  //     cylinderCode: this.searchParams.cylinderCode,
  //   };
  //   this.CylinderDetailService.querySingle(params).then(data => {
  //     this.detailList = data.data.list;
  //     this.photoList = data.data.pictureList;
  //   });
  }
  ngOnInit() {
    this.getList();
  }
}

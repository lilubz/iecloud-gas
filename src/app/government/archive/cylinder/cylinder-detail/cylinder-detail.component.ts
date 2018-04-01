import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
// import { detailList } from './detail';
import { MessageService } from 'primeng/components/common/messageservice';
import { CylinderDetailService } from './cylinder-detail.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { CylinderList } from './cylinder.model';

@Component({
  selector: 'gas-cylinder-detail',
  templateUrl: './cylinder-detail.component.html',
  styleUrls: ['./cylinder-detail.component.scss'],
  providers: [CylinderDetailService]
})

export class CylinderDetailComponent implements OnInit {
  cylinderCode: any;
  loading: any;
  // data: any;

  detailList: CylinderList = new CylinderList();
  photoList: Array<{
    pictureUrl: string;
  }>;

  constructor(
    private CylinderDetailService: CylinderDetailService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        return this.CylinderDetailService.querySingle({ cylinderCode: params.get('id') });
      }).subscribe((data) => {
        // console.log(data);
        this.loading = data.status;
        if (data.status === 0) {
          this.detailList = data.data;
          // console.log(this.detailList);
        } else {
          this.messageService.add({
            severity: 'warn',
            summary: '查询结果',
            detail: '请输入正确的气瓶条码'
          });
        }
      }, error => {
        this.messageService.add({
          severity: 'warn',
          summary: '查询结果',
          detail: '请输入正确的气瓶条码'
        });
      });
    this.detailList = new CylinderList();
    this.loading = '';
  }
}

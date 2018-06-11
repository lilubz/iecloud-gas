import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { CylinderDetailService } from './cylinder-detail.service';
import { CylinderList } from './cylinder.model';
import * as $ from 'jquery';

@Component({
  selector: 'gas-cylinder-detail',
  templateUrl: './cylinder-detail.component.html',
  styleUrls: ['./cylinder-detail.component.scss'],
  providers: [CylinderDetailService]
})

export class CylinderDetailComponent implements OnInit {
  loading = false;

  detailList: any = new CylinderList();
  currentImgUrl = '';
  constructor(
    private _service: CylinderDetailService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams) => {
      this.loading = true;
      this._service.queryCylinderDetail({ gasLabelNumber: queryParams.gasLabelNumber }).then(data => {
        if (data.status === 0) {
          this.detailList = data.data;
          this.detailList['isTrue'] = true;
        } else {
          this.loading = true;
          this.detailList = new CylinderList();
        }
        this.loading = false;
      });
    });

  }
  showImg(event, url, overlaypanel) {
    this.currentImgUrl = '';
    overlaypanel.toggle(event);
    const el = overlaypanel.container;
    setTimeout(() => {
      this.currentImgUrl = url;
      const left = $('.main').css('left');
      const top = $('.main').css('top');

      el.style.top = parseFloat(el.style.top) - parseFloat(top) + 'px';
      el.style.left = parseFloat(el.style.left) - parseFloat(left) + 'px';
      el.style.maxWidth = '300px';
    }, 0);
  }
}

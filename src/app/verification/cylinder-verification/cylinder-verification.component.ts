import { Component, OnInit, OnDestroy, } from '@angular/core';


import { SelectItem } from 'primeng/primeng';
import { CylinderVerificationService } from './cylinder-verification.service';
import { element } from 'protractor';
import { Message } from 'primeng/components/common/api';


@Component({
  selector: 'gas-cylinder-verification',
  templateUrl: './cylinder-verification.component.html',
  styleUrls: ['./cylinder-verification.component.scss']
})
export class CylinderVerificationComponent implements OnInit {
  constructor(private _service: CylinderVerificationService) { }
  Area?: SelectItem[] =
    [{ label: '全部', value: '' }];
  selectedArea?: string;
  cylinderInfo: Array<{
    regionId?: string,
    area?: string,
    enterprise?: string,
    number?: Number,
  }>;
  cylinderNumberTotal: any;

  searchParams: {
    regionId?: string,
    pageNumber?: Number,
    pageSize?: Number,
  } = {
      regionId: '',
      pageNumber: 1,
      pageSize: 20,
    };
  pageParams: {};
  cylinderInfoList: Array<{}>;
  cylinderListTotal: any;
  display: boolean;
  msgs: Message[] = [];
  ngOnInit() {
    this.searchParams.regionId = '';
    this.getlistRegionInfo();
  }
  // 区域数据
  getlistRegionInfo() {
    this._service.getListRegionInfo('').then(data => {
      if (data.status === 0) {
        const list = data.data.map((item) => {
          return {
            label: item.regionName,
            value: item.regionId,
          };
        });
        this.Area = this.Area.concat(list);
        console.log(this.Area);
      }
    });
  }
  // 分页
  change(event) {
    this.searchParams.pageSize = event.rows;
    this.searchParams.pageNumber = event.first / event.rows + 1;

    this.onSearch();
    console.log(event.rows);
    console.log(event.first);
  }
  // 企业最近一周的录入数据
  onSearch() {
    const params = {
      regionId: this.searchParams.regionId,
      pageSize: this.searchParams.pageSize,
      pageNumber: this.searchParams.pageNumber,
    };
    this._service.getGcCountRecentlyRegister(params).then(data => {
      if (data.status === 0) {
        // this.showMessage('success', '', '')
      } else {

      }
    }, error => {
      this.showMessage('error', '服务器错误', error);
    });

  }
  // dialog
  searchInformation(cylinder) {
    this.display = true;
    console.log(cylinder);

  }

  showMessage(type, title, msg) {
    this.msgs.push({
      severity: type,
      summary: title,
      detail: msg
    });
    setTimeout(() => this.msgs = [], 2000);
  }
}

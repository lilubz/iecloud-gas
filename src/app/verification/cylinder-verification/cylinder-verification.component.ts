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
    regionId: string,
    regionName: string,
    enterpriseName: string,
    enterpriseNumber: string,
    count: string,
  }> = [];
  cylinderNumberTotal = 0;
  searchParams: {
    regionId?: string,
    pageNumber?: Number,
    pageSize?: Number,
  } = {
      regionId: '',
      pageNumber: 1,
      pageSize: 10,
    };


  selectedEnterpriseId = '';
  cylinderInfoList: Array<{}> = [];
  cylinderListTotal = 0;
  detailPageNumber = 1;
  detailPageSize = 10;
  display: boolean;
  msgs: Message[] = [];
  ngOnInit() {
    this.searchParams.regionId = '';
    this.getlistRegionInfo();
    // this.onSearch();
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
        // console.log(this.Area);
      }
    });
  }
  changearea(event) {
    this.searchParams.regionId = event.value;
    this.onSearch();
  }
  // 分页
  change(event) {
    this.searchParams.pageSize = event.rows;
    this.searchParams.pageNumber = event.first / event.rows + 1;
    this.onSearch();
    // console.log(event.rows);
    // console.log(event.first);
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
        // console.log(data.data);
        this.cylinderInfo = data.data.list;
        this.cylinderListTotal = data.total;
        // this.showMessage('success', '', '')
      } else {
        this.cylinderInfo = [];
        this.showMessage('warn', '查询失败', data.msg);
      }
    }, error => {
      this.cylinderInfo = [];
      this.showMessage('error', '服务器错误', error);
    });

  }
  // dialog
  showdetail(cylinder) {
    this.display = true;
    // console.log(cylinder);
    this.selectedEnterpriseId = cylinder.enterpriseNumber;
    this.searchInformation();
  }
  pageChange(event) {
    this.searchParams.pageSize = event.rows;
    this.searchParams.pageNumber = event.first / event.rows + 1;
    this.searchInformation();
  }
  searchInformation() {
    const params = {
      pageNumber: this.detailPageNumber,
      pageSize: this.detailPageSize,
      enterpriseId: this.selectedEnterpriseId
    };
    this._service.getlistGcInfoRecentlyRegister(params).then(data => {
      if (data.status === 0) {
        // console.log(data.data);
        this.cylinderInfoList = data.data.list;
        this.cylinderNumberTotal = data.total;
      } else {
        this.cylinderInfoList = [];
        this.showMessage('warn', '查询失败', data.msg);
      }
    }, error => {
      this.cylinderInfoList = [];
      this.showMessage('error', '服务器错误', error);
    });
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

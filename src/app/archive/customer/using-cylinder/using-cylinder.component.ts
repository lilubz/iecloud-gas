import { Component, OnInit, OnDestroy, } from '@angular/core';
import { UsingCylinderService, } from './using-cylinder.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 's-using-cylinder',
  templateUrl: './using-cylinder.component.html',
  styleUrls: ['./using-cylinder.component.css'],
  providers: [UsingCylinderService]
})
export class UsingCylinderComponent implements OnInit, OnDestroy {
  dataTablelist: any[] = [];
  pageNumber = 1;
  pageSize = 40;
  pageOption = [1,5, 10, 20, 30, 40];
  total = 0;
  first = 0;
  pageData = {};
  firstStatus = false;
  detailLists: any;
  userNumber: string = '';
  constructor(
    private _service: UsingCylinderService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    if (this.route.queryParams['value'].userNumber) {
      this.userNumber = this.route.queryParams['value'].userNumber;
    }
    this.searchUserCy();
  }
  onPageChange(event) {
    const page: {
      pageSize: number,
      pageNumber: number
    } = {
        pageSize: event.rows,
        pageNumber: event.first / event.rows + 1
      };
    this.pageData = page;
    this.searchUserCy(this.pageData);
    // console.log(event);
  }
  searchUserCy(page?) {
    const params = {
      userNumber: this.userNumber || '',
      pageNumber: 1,
      pageSize: 40,
    };
    if (page) {
      params['pageNumber'] = page.pageNumber;
      params['pageSize'] = page.pageSize;
    } else {
      this.first = 0;
    }
    // 第一次 page查询时调接口
    if (!this.firstStatus) {
      this.firstStatus = true;
    } else {
      this._service.listUserHasGc(params).then(data => {
        if (data.status === 0) {
          this.dataTablelist = data.data.list;
          this.total = data.data.size;
        } else {
          this.dataTablelist = [];
          this.total = 0;
          this.messageService.add({
            severity: 'warn',
            summary: '提示信息',
            detail: data.msg
          });
        }

      }).catch(error => {
        this.dataTablelist = [];
        this.total = 0;
        this.messageService.add({
          severity: 'error', summary: '服务器错误，错误码：', detail: error.status
        });
      });
    }
  }
  ngOnDestroy() {
  }
}

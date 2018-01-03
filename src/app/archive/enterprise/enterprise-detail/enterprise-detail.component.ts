import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { EnterpriseDetailService, } from './enterprise-detail.service';
import { CommonRequestService } from '../../../core/common-request.service';
import { UserStateService } from '../../../core/userState.service';
import { SelectItem } from 'primeng/primeng';
import { DATE_LOCALIZATION } from '../../../core/date-localization';
import { Format } from '../../../core/format.service';
import { MessageService } from 'primeng/components/common/messageservice';
@Component({
  selector: 'gas-enterprise',
  templateUrl: './enterprise-detail.component.html',
  styleUrls: ['./enterprise-detail.component.scss']
})
export class EnterpriseDetailComponent implements OnInit, OnDestroy {

  enterpriseDrop: SelectItem[] = [
    {
      label: '全部',
      value: '',
    }
  ];
  enterpriseList: any[] = [];
  searchParams: {
    regionId?: string,
    enterpriseName?: string,
    person?: string,
    startTime?: string,
    endTime?: string,
    phone?: number,
  } = {
      regionId: '',
      enterpriseName: '',
      person: '',
      startTime: '',
      endTime: '',
      phone: null,
    };
  pages: {
    pageNumber?: number;
    pageSize?: number;
    pageOption?: Array<Number>;
    total?: number;
    first?: number;
  } = {
      pageNumber: 1,
      pageSize: 10,
      pageOption: [10, 20, 30, 50],
      total: 0,
      first: 0,
    };

  constructor(private _service: EnterpriseDetailService,
    private commonRequestService: CommonRequestService,
    @Inject(DATE_LOCALIZATION) public cn,
    private userStateService: UserStateService,
    private format: Format,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.getAreaList();
    this.getEnterPrise();
  }

  getAreaList() {
    this.commonRequestService.getRegions().then(data => {
      if (data.status === 0) {
        const list = data.data.map((item) => {
          return {
            label: item.regionName,
            value: item.regionId
          };
        });
        this.enterpriseDrop = this.enterpriseDrop.concat(list);
      } else {

      }
    });
  }

  getEnterPrise(pages?) {
    const params = {
      regionId: this.searchParams.regionId || '',
      corpName: this.searchParams.enterpriseName || '',
      legalRepresentative: this.searchParams.person || '',
      releaseTimeStart: this.searchParams.startTime || '',
      releaseTimeEnd: this.searchParams.endTime || '',
      serviceLine: this.searchParams.phone || '',
      pageSize: 10,
      pageNumber: 1
    };
    if (pages) {
      params.pageNumber = pages.pageNumber;
      params.pageSize = pages.pageSize;
    } else {
      this.pages.first = 0;
    }
    this._service.getlistCorp(params).then(data => {
      if (data.status === 0) {
        this.enterpriseList = data.data.list;
        this.pages.total = data.data.total;
      } else {
        this.enterpriseList = [];
        this.pages.total = 0;
        this.pages.first = 0;
        this.messageService.add({ severity: 'warn', summary: '提示信息', detail: data.msg });
      }
    }).catch(error => {
      this.enterpriseList = [];
      this.pages.total = 0;
      this.pages.first = 0;
      this.messageService.add({ severity: 'error', summary: '服务器错误', detail: error.status });
    });
  }
  onPageChange(event) {
    const page: {
      pageSize: Number,
      pageNumber: Number
    } = {
        pageSize: event.rows,
        pageNumber: event.first / event.rows + 1
      };
    this.getEnterPrise(page);
  }


  selectedStartTime(event) {
    this.searchParams.startTime = this.format.dateFormat(event, 'yyyy-MM-dd hh:mm:ss');
  }
  selectedEndTime(event) {
    this.searchParams.endTime = this.format.dateFormat(event, 'yyyy-MM-dd hh:mm:ss');
  }
  clearStartTime(event) {
    this.searchParams.startTime = '';
  }
  clearEndTime(event) {
    this.searchParams.endTime = '';
  }
  ngOnDestroy() {
  }
}
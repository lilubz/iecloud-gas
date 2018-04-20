import { CommonRequestService } from './../../core/common-request.service';
import { Component, OnInit, Input } from '@angular/core';
import { ScaleVO } from './ScaleVO.model';
import { SelectItem } from 'primeng/primeng';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { FillingScaleService } from '../../gov-affairs/filling-scale/filling-scale.service';

@Component({
  selector: 'gas-filling-scale-list',
  templateUrl: './filling-scale-list.component.html',
  styleUrls: ['./filling-scale-list.component.scss'],
  providers: [FillingScaleService]
})
export class FillingScaleListComponent implements OnInit {
  @Input() isShowOperation: boolean = true;
  pageSize = 40;
  pageNumber = 1;
  first = 0;
  total = 0;
  loading = false;
  balanceList: ScaleVO[] = [];
  enterpriseList: SelectItem[] = [{ label: '全部', value: '' }];
  enterpriseNumber = '';
  balanceNumber = '';
  settingScaleDialogVisible = false;
  selectedScaleStatus: {
    balanceId: string,
    boolIsSetInterLock: string,
    boolIsSetOuterLock: string,
  };
  constructor(
    private commonRequestService: CommonRequestService,
    private fillingScaleService: FillingScaleService,
    private routerInfo: ActivatedRoute,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.routerInfo.queryParams.subscribe((queryParams) => {
      if (JSON.stringify(queryParams) !== '{}') { // 查询参数不为空
        this.enterpriseNumber = queryParams.enterpriseNumber;
        this.balanceNumber = queryParams.balanceNumber;
        this.getBalanceList();
      }
    });
    this.commonRequestService.listCorpInfoInRegion().then(data => {
      if (data.status === 0) {
        this.enterpriseList = data.data.map(item => ({ label: item.enterpriseName, value: item.enterpriseNumber }));
        this.enterpriseList.unshift({ label: '全部', value: '' });
      }
    });

    // this.balanceList = [{
    //   balanceId: '1',
    //   enterpriseNumber: '11',
    //   enterpriseName: '',
    //   inflatableStationNumber: '',
    //   inflatableName: '',
    //   balanceNumber: '111',
    //   specification: '',
    //   remark: '',
    //   createTime: '',
    //   updateTime: ''
    // }];
  }

  onPageChange(event) {
    this.onPageChange = (event) => {
      this.pageSize = event.rows;
      this.pageNumber = event.first / event.rows + 1;
      setTimeout(() => {
        this.getBalanceList();
      }, 0);
    }
  }

  search() {
    this.pageNumber = 1;
    this.first = 0;
    this.getBalanceList();
  }

  getBalanceList() {
    if (this.checkForm()) {
      this.loading = true;
      this.fillingScaleService.listBalanceInfo({
        enterpriseNumber: this.enterpriseNumber,
        balanceNumber: this.balanceNumber,
        pageSize: this.pageSize,
        pageNumber: this.pageNumber
      }).then(data => {
        this.loading = false;
        if (data.status === 0) {
          this.balanceList = data.data.list;
          this.total = data.data.total;
        } else {
          this.balanceList = [];
          this.total = 0;
          this.messageService.add({ severity: 'warn', summary: '', detail: data.msg })
        }
      });
    }
  }

  showSettingScaleDialog(scale: ScaleVO) {
    this.settingScaleDialogVisible = true;
    this.selectedScaleStatus = null;
    this.fillingScaleService.getBalanceStatus({
      balanceId: scale.balanceId || ''
    }).then(data => {
      if (data.status === 0) {
        this.selectedScaleStatus = data.data;
      } else {
        this.selectedScaleStatus = null;
        this.messageService.add({ severity: 'warn', summary: '', detail: data.msg })
      }
    });
  }

  checkForm(): boolean {
    if (this.balanceNumber && !this.enterpriseNumber) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请选择一个企业！' });
      return false;
    }
    return true;
  }
}

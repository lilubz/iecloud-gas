import { RoleType } from './../../common/RoleType';
import { Component, OnInit, OnDestroy, Inject, } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { GsaHolderStationService } from './gas-holder-station.service';
import { CommonRequestService } from '../../core/common-request.service';
import { SelectItem } from 'primeng/components/common/api';
import { zh_CN } from '../../common/date-localization';
import { AddBottle } from './addBottle.model';
import * as moment from 'moment';
import { Util } from '../../core/util';

@Component({
  selector: 'gas-gas-holder-station',
  templateUrl: './gas-holder-station.component.html',
  styleUrls: ['./gas-holder-station.component.scss'],
  providers: [GsaHolderStationService]
})
export class GasHolderStationComponent implements OnInit, OnDestroy {

  RoleType = RoleType;
  cn = zh_CN;
  bottleLibraryList: any[] = [];
  pages: {
    pageNumber?: number;
    pageSize?: number;
    pageOption?: Array<Number>;
    total?: number;
    first?: number;
  } = {
      pageNumber: 1,
      pageSize: 40,
      pageOption: [10, 20, 40, 80],
      total: 0,
      first: 0,
    };
  searchParams: {
    regionId: string,
    enterpriseName: string,
    supplyName: string,
    person: string,
    supplyLicenseNum: string,
    startTime?: string,
    endTime?: string,
  } = {
      regionId: '',
      enterpriseName: '',
      supplyName: '',
      person: '',
      supplyLicenseNum: '',
      startTime: '',
      endTime: '',
    };
  changeStatusPage: any;
  editBottleVisible = false;
  addBottleVisible = false;
  changeBottleVisible = false;
  change = {
    supplyStationNumber: '',
    supplyStationName: '',
    enterpriseNumber: '',
  };
  showBtn = true;
  areaDrop: SelectItem[] = [
    {
      label: '全部',
      value: '',
    }
  ];
  enterpriseDrop: SelectItem[] = [
    {
      label: '全部',
      value: '',
    }
  ];
  changeEnterpriseDrop: SelectItem[] = [
    {
      label: '请点击选择',
      value: '',
    }
  ];
  area: SelectItem[] = [
    {
      label: '全部',
      value: '',
    }
  ];
  default: any[] = [
    {
      label: '全部',
      value: '',
    }
  ];
  addForm: AddBottle = new AddBottle();
  // editForm: EditBottle = new EditBottle();

  createAccountShow = true;
  today = new Date();
  constructor(
    private _service: GsaHolderStationService,
    private messageService: MessageService,
    private commonRequestService: CommonRequestService,
    private util: Util
  ) { }

  ngOnInit() {
    this.addForm = new AddBottle();
    this.getEnterprises();
    this.getRegions();
    this.getAreaList();
  }

  getRegions() {
    this.commonRequestService.getRegions().then(data => {
      if (data.status === 0) {
        const list = data.data.map((item) => {
          return {
            label: item.regionName,
            value: item.regionId
          };
        });
        this.areaDrop = this.areaDrop.concat(list);
      } else {
        this.areaDrop = this.areaDrop.concat(this.default);
        this.messageService.add({ severity: 'warn', summary: '错误提示', detail: data.msg });
      }
    }).catch(error => {
      this.areaDrop = this.areaDrop.concat(this.default);
      this.messageService.add({ severity: 'error', summary: '服务器错误,错误码:', detail: error.status });
    });
  }
  getEnterprises() {
    this._service.getCylinderSearchOpt({}).then(data => {
      if (data.status === 0) {
        this.enterpriseDrop = this.enterpriseDrop.concat(data.data.enterpriseName);
        this.changeEnterpriseDrop = this.changeEnterpriseDrop.concat(data.data.enterpriseName);
      } else {
        this.enterpriseDrop = this.enterpriseDrop.concat(this.default);
        this.changeEnterpriseDrop = this.changeEnterpriseDrop.concat(this.default);
        this.messageService.add({ severity: 'warn', summary: '错误提示', detail: data.msg });
      }
    }).catch(error => {
      this.enterpriseDrop = this.enterpriseDrop.concat(this.default);
      this.changeEnterpriseDrop = this.changeEnterpriseDrop.concat(this.default);
      this.messageService.add({ severity: 'error', summary: '服务器错误,错误码:', detail: error.status });
    });
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
        this.area = this.area.concat(list);
      } else {

      }
    });
  }
  onChangeAreaID(event) {
    this.enterpriseDrop = [
      {
        label: '全部',
        value: '',
      }
    ];
    this.searchParams.enterpriseName = '';
    if (event.value) {
      this._service.getDropdownForCorpInfoInRegion({
        regionId: event.value
      }).then(
        data => {
          if (data.status === 0) {
            this.enterpriseDrop = this.enterpriseDrop.concat(data.data.map((item) => ({
              label: item.enterpriseName,
              value: item.enterpriseNumber,
            })));
          } else {
            this.enterpriseDrop = this.enterpriseDrop;
            this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
          }
        }
      ).catch(
        data => { }
      );
    } else {
      this.getEnterprises();
    }
  }
  /**
   * 页面变化,初始化会执行一次
   * @param event
   */
  onPageChange(event) {
    const page: {
      pageSize: Number,
      pageNumber: Number
    } = {
        pageSize: event.rows,
        pageNumber: event.first / event.rows + 1
      };
    this.onSearch(page);
    this.changeStatusPage = page;
  }
  /**
   * 查询
   * @param page
   */
  onSearch(page?) {
    const params = {
      regionId: this.searchParams.regionId,
      enterpriseNumber: this.searchParams.enterpriseName,
      inflatableName: this.searchParams.supplyName,
      responsiblePerson: this.searchParams.person,
      licenseNumber: this.searchParams.supplyLicenseNum,
      // releaseTimeStart: this.searchParams.startTime || '',
      // releaseTimeEnd: this.searchParams.endTime || '',
      pageNumber: 1,
      pageSize: 40
    };
    if (page) {
      params.pageNumber = page.pageNumber;
      params.pageSize = page.pageSize;
    } else {
      this.pages.first = 0;
    }
    this._service.onsearch(params).then(data => {
      if (data.status === 0) {
        this.bottleLibraryList = data.data.list;
        this.pages.total = data.data.total;
      } else {
        this.bottleLibraryList = [];
        this.pages.total = 0;
        this.messageService.add({ severity: 'warn', summary: '提示信息', detail: data.msg });
      }
    }).catch(error => {
      this.bottleLibraryList = [];
      this.pages.total = 0;
      this.messageService.add({ severity: 'error', summary: '服务器错误,错误码:', detail: error.status });
    });
  }
  showAddDialog() {
    this.addBottleVisible = true;
    this.addForm = new AddBottle();
    this.enterpriseDrop = [
      {
        label: '全部',
        value: '',
      }
    ];
    this.changeEnterpriseDrop = [
      {
        label: '全部',
        value: '',
      }
    ];
    this.areaDrop = [
      {
        label: '全部',
        value: '',
      }
    ];
    this.getRegions();
    this.getEnterprises();
  }
  closeAddCorpSupplyStation = () => {
    this.addBottleVisible = false;
    this.searchParams = {
      regionId: '',
      enterpriseName: '',
      supplyName: '',
      person: '',
      supplyLicenseNum: '',
      startTime: '',
      endTime: '',
    };
  }
  showChangeDialog = (data) => {
    this.changeBottleVisible = true;
    this.change.supplyStationName = data.inflatableName;
    this.change.supplyStationNumber = data.inflatableStationNumber;
  }
  AddCorpSupplyStation() {
    if (this.checkForm2()) {
      const formData = new FormData();
      for (const key in this.addForm) {
        if (key) {
          if (key === 'releaseTime' || key === 'effectiveTimeStart' || key === 'effectiveTimeEnd') {
            if (this.addForm[key]) {
              const datas = moment(this.addForm[key]).format('YYYY-MM-DD HH:mm:ss');
              formData.append(key, datas);
            } else {
              return false;
            }
          } else {
            if (!this.addForm[key]) {
              this.addForm[key] = '';
              formData.append(key, this.addForm[key]);
            } else {
              formData.append(key, this.addForm[key]);
            }
          }
        }
      }
      this._service.addCorpSupplyStation(formData).then(data => {
        if (data.status === 0) {
          this.addBottleVisible = false;
          this.addForm = new AddBottle();
          this.messageService.add({ severity: 'success', summary: '提示信息', detail: data.msg });
        } else {
          this.messageService.add({ severity: 'warn', summary: '提示信息', detail: data.msg });
        }
      }).catch(error => {
        this.messageService.add({ severity: 'error', summary: '服务器错误,错误码:', detail: error.status });
      });
    } else {

    }
  }
  changeEnterpriseNumber = () => {
    if (this.change.enterpriseNumber) {
      this._service.updateCorpInflatableStation({
        inflatableStationNumber: this.change.supplyStationNumber,
        enterpriseNumber: this.change.enterpriseNumber,
      }).then(
        data => {
          if (data.status === 0) {
            this.changeBottleVisible = false;
            this.onSearch();
            this.messageService.add({ severity: 'success', summary: '提示信息', detail: data.msg });
          } else {
            this.changeBottleVisible = false;
            this.messageService.add({ severity: 'warn', summary: '提示信息', detail: data.msg });
          }
        }
      );
    } else {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '请选择企业' });
    }
  }
  checkForm2(): boolean {
    if (!this.addForm.regionId) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '所属区域不能为空' });
      return false;
    } else if (!this.addForm.enterpriseNumber) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '归属企业不能为空' });
      return false;
    } else if (!this.addForm.inflatableName.trim()) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '站点名称不能为空' });
      return false;
    } else if (!this.addForm.responsiblePerson.trim()) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '负责人不能为空' });
      return false;
    } else if (!this.addForm.licenseNumber.trim()) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '许可证不能为空' });
      return false;
    }
    return true;
  }

  /**
   * 时间转换
  */
  selectedStartTime(event) {
    this.searchParams.startTime = this.util.formatTime(event, 'start');
  }
  selectedEndTime(event) {
    this.searchParams.endTime = this.util.formatTime(event, 'end');
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

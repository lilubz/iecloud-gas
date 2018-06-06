import { RoleType } from './../../common/RoleType';
import { Component, OnInit, OnDestroy, Inject, } from '@angular/core';
import { SupplyStionService, } from './supply-station.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { CommonRequestService } from '../../core/common-request.service';
import { SelectItem } from 'primeng/components/common/api';
import { zh_CN } from '../../common/date-localization';
import { AddBottle } from './addBottle.model';
import { EditBottle } from './editBottle.model';
import * as moment from 'moment';
import { Util } from '../../core/util';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'gas-supply-station',
  templateUrl: './supply-station.component.html',
  styleUrls: ['./supply-station.component.scss'],
  providers: [SupplyStionService]
})
export class SupplyStationComponent implements OnInit, OnDestroy {

  RoleType = RoleType;
  cn = zh_CN;
  bottleLibraryList: any[] = [];
  endTimeinit: Date;
  startTimeinit: Date;
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
    supplyStationName: '',
    enterpriseNumber: '',
    supplyStationNumber: '',
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
  editForm: EditBottle = new EditBottle();

  createAccountShow = true;
  today = new Date();
  constructor(
    private _service: SupplyStionService,
    private messageService: MessageService,
    private commonRequestService: CommonRequestService,
    private util: Util,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.addForm = new AddBottle();
    this.getEnterprises();
    this.getRegions();
    this.getAreaList();
    if (this.activatedRoute.queryParams['value']) {
      const queryParams = {
        regionId: this.activatedRoute.queryParams['value'].regionId || ''
      };
      Object.assign(this.searchParams, queryParams);
      this.onSearch();
    }
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
      supplyName: this.searchParams.supplyName,
      principal: this.searchParams.person,
      supplyLicenseNum: this.searchParams.supplyLicenseNum,
      releaseTimeStart: this.searchParams.startTime || '',
      releaseTimeEnd: this.searchParams.endTime || '',
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
  showEditDialog(data) {
    this.editBottleVisible = true;
    for (const key in this.editForm) {
      if (key) {
        if (data[key]) {
          if (key === 'releaseTime' || key === 'effectiveTimeStart' || key === 'effectiveTimeEnd') {
            this.editForm[key] = new Date(data[key]);
          } else {
            this.editForm[key] = data[key];
          }
        } else {
          this.editForm[key] = null;
        }
      }
    }
  }
  showAddDialog() {
    this.addBottleVisible = true;
  }
  showChangeDialog = (data) => {
    this.changeBottleVisible = true;
    this.change.supplyStationName = data.supplyStationName;
    this.change.supplyStationNumber = data.supplyStationNumber;
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
  editCorpSupplyStation() {
    if (this.checkForm()) {
      const formData = new FormData();
      for (const key in this.editForm) {
        if (key) {
          if (key === 'releaseTime' || key === 'effectiveTimeStart' || key === 'effectiveTimeEnd') {
            if (this.editForm[key]) {
              const datas = moment(this.editForm[key]).format('YYYY-MM-DD HH:mm:ss');
              formData.append(key, datas);
            }
          } else {
            if (!this.editForm[key]) {
              this.editForm[key] = '';
              formData.append(key, this.editForm[key]);
            } else {
              formData.append(key, this.editForm[key]);
            }
          }
        }
      }
      this._service.updateCorpSupplyStation(formData).then(data => {
        if (data.status === 0) {
          this.editBottleVisible = false;
          this.onSearch(this.changeStatusPage);
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
      this._service.updateTheEnterpriseOfCorpSupplyStation({
        supplyStationNumber: this.change.supplyStationNumber,
        enterpriseNumber: this.change.enterpriseNumber,
      }).then(
        data => {
          if (data.status === 0) {
            this.changeBottleVisible = false;
            this.messageService.add({ severity: 'success', summary: '提示信息', detail: data.msg });
            this.onSearch();
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
  /**
   * 分配账号
   */
  // createAccount(param) {
  //   this._service.createAccount({ supplyStationNumber: param.supplyStationNumber }).then(data => {
  //     if (data.status === 0) {
  //       this.onSearch(this.changeStatusPage);
  //       this.messageService.add({ severity: 'success', summary: '提示信息', detail: '分配账号成功' });
  //     } else {
  //       this.messageService.add({ severity: 'warn', summary: '提示信息', detail: data.msg });
  //     }
  //   }).catch(error => {
  //     this.messageService.add({ severity: 'error', summary: '服务器错误,错误码:', detail: error.status });
  //   });
  // }
  /**
   * 账号状态变化
   */
  // changeStatus(status) {
  //   if (!status.isfreezed) {
  //     this._service.freezeAccount({ supplyStationNumber: status.supplyStationNumber }).then(data => {
  //       if (data.status === 0) {
  //         this.messageService.add({ severity: 'success', summary: '提示信息', detail: '冻结账号成功' });
  //         this.onSearch(this.changeStatusPage);
  //       } else {
  //         this.messageService.add({ severity: 'warn', summary: '提示信息', detail: data.msg });
  //       }
  //     }).catch(error => {
  //       this.messageService.add({ severity: 'error', summary: '服务器错误,错误码:', detail: error.status });
  //     });
  //   } else {
  //     this._service.createAccount({ supplyStationNumber: status.supplyStationNumber }).then(data => {
  //       if (data.status === 0) {
  //         this.messageService.add({ severity: 'success', summary: '提示信息', detail: '启用账号成功' });
  //         this.onSearch(this.changeStatusPage);
  //       } else {
  //         this.messageService.add({ severity: 'warn', summary: '提示信息', detail: data.msg });
  //       }
  //     }).catch(error => {
  //       this.messageService.add({ severity: 'error', summary: '服务器错误,错误码:', detail: error.status });
  //     });
  //   }
  // }
  /**
   * 验证信息是否填写
   */

  checkForm(): boolean {
    if (!this.editForm.regionId) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '所属区域不能为空' });
      return false;
    } else if (!this.editForm.enterpriseNumber) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '归属企业不能为空' });
      return false;
    } else if (!this.editForm.supplyStationName.trim()) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '站点名称不能为空' });
      return false;
    } else if (!this.editForm.principal.trim()) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '负责人不能为空' });
      return false;
    } else if (!this.editForm.supplyLicenseNum.trim()) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '许可证编号不能为空' });
      return false;
    } else if (!this.editForm.issuingUnit.trim()) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '核发单位不能为空' });
      return false;
    } else if (!this.editForm.releaseTime) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '发证日期不能为空' });
      return false;
    } else if (!this.editForm.effectiveTimeStart) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '有效期起始时间不能为空' });
      return false;
    } else if (!this.editForm.effectiveTimeEnd) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '有效期结束时间不能为空' });
      return false;
    }
    return true;
  }
  checkForm2(): boolean {
    if (!this.addForm.regionId) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '所属区域不能为空' });
      return false;
    } else if (!this.addForm.enterpriseNumber) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '归属企业不能为空' });
      return false;
    } else if (!this.addForm.supplyStationName.trim()) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '站点名称不能为空' });
      return false;
    } else if (!this.addForm.principal.trim()) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '负责人不能为空' });
      return false;
    } else if (!this.addForm.supplyLicenseNum.trim()) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '许可证编号不能为空' });
      return false;
    } else if (!this.addForm.issuingUnit.trim()) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '核发单位不能为空' });
      return false;
    } else if (!this.addForm.releaseTime) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '发证日期不能为空' });
      return false;
    } else if (!this.addForm.effectiveTimeStart) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '有效期起始时间不能为空' });
      return false;
    } else if (!this.addForm.effectiveTimeEnd) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '有效期结束时间不能为空' });
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

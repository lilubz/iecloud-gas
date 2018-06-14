import { CommonRequestService } from './../../core/common-request.service';
import { Component, OnInit, OnChanges, Input, Output, Inject, EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/primeng';


/**
 * 送气工自动完成组件
 * dispatcherJobNumber -- 根据工号设置初始要选择的送气工
 * dispatcherChange -- 返回选择的送气工对象
 * 2018-02-02 19:04:09
 * @author hzb
 * @export
 * @class DispatcherAutocompleteComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'gas-dispatcher-autocomplete',
  templateUrl: './dispatcher-autocomplate.component.html',
})
export class DispatcherAutocompleteComponent implements OnInit {
  @Input() dropdownStyle;
  @Input() autoCompleteStyle;
  // 输入送气工工号
  @Input() set dispatcherJobNumber(jobNumber) {
    if (jobNumber) {
      this.selectedDispatcherSearchField = 1;
      this.setDefaultDispatcher(jobNumber);
    }
  }
  @Output() dispatcherChange: EventEmitter<any> = new EventEmitter<any>(); // 送气工编号

  dispatcherSearchFields: SelectItem[] = [
    { label: '工号', value: 1 },
    { label: '名称', value: 2 },
  ];
  selectedDispatcherSearchField = this.dispatcherSearchFields[0].value; // 送气工查询条件
  selectedDispatcher; // 选中的送气工
  dispatcherSuggestions = []; // 送气工建议列表

  constructor(
    private commonRequestService: CommonRequestService
  ) {

  }

  ngOnInit(): void {

  }

  search(query) {
    this.searchDispatcher(query).then(data => {
      this.dispatcherSuggestions = data;
    });
  }

  setDefaultDispatcher(jobNumber) {
    this.searchDispatcher(jobNumber).then(data => {
      if (data.length > 0) {
        this.dispatcherSuggestions = data;
        // this.selectedDispatcher = data[0];
        this.dispatcherChange.emit(this.selectedDispatcher);
      }
    });
  }

  searchDispatcher(query): Promise<any[]> {
    return this.commonRequestService.getDispatcherInfo({
      enterpriseNumber: '',
      supplyStationNumber: '',
      name: this.selectedDispatcherSearchField === 2 ? query : '',
      jobNumber: this.selectedDispatcherSearchField === 1 ? query : '',
      phone: '',
      idNumber: '',
      pageSize: 99,
      pageNumber: 1
    }).then(data => {
      if (data.status === 0) {
        return data.data.list;
      } else {
        return [];
        // this.messageService.add({ severity: 'warn', summary: '获取配送工信息失败', detail: data.msg });
      }
    });
  }

  selectDispatcherSearchField(event) {
    this.selectedDispatcher = null;
    this.dispatcherChange.emit(this.selectedDispatcher);
  }

  blurSelectDispatcher() {
    if (!this.selectedDispatcher || !this.selectedDispatcher.dispatcherNumber) {
      this.selectedDispatcher = null;
    }
    this.dispatcherChange.emit(this.selectedDispatcher);
  }
}

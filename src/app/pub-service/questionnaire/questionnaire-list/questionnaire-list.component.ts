import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { SelectItem } from 'primeng/components/common/selectitem';
import { QuestionListService } from './question-list.service';
@Component({
  selector: 'gas-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.scss']
})
export class QuestionnaireListComponent implements OnInit {
  questionnaireList: any[] = [];
  pages: {
    pageNumber?: number;
    pageSize?: number;
    pageOption?: Array<Number>;
    total?: number;
    first?: number;
  } = {
      pageNumber: 1,
      pageSize: 10,
      pageOption: [10, 20, 40, 80],
      total: 0,
      first: 0,
    };
  datas: any = [];
  constructor(
    private messageService: MessageService,
    private _service: QuestionListService,
  ) { }

  ngOnInit() {
  }

  onPageChange(event) {
    this.pages.pageNumber = event.first / event.rows + 1;
    this.pages.pageSize = event.rows;
    this.query();
  }

  query() {
    this._service.listQuestionnaire({
      pageSize: this.pages.pageSize,
      pageNumber: this.pages.pageNumber,
    }).then(data => {
      if (data.status === 0) {
        this.questionnaireList = data.data.list;
        this.pages.total = data.data.total;
      } else {
        this.questionnaireList = [];
        this.pages.total = 0;
        this.pages.first = 0;
        this.messageService.add({ severity: 'warn', summary: '获取信息失败', detail: data.msg });
      }

    })
  }





}

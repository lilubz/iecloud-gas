import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { SelectItem } from 'primeng/components/common/selectitem';
import { QuestionListService } from './question-list.service';
import { ConfirmationService } from 'primeng/primeng';
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
    private confirmationService: ConfirmationService,
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

  confirmDelete(questionnaireId, title) {
    this.confirmationService.confirm({
      message: `确认删除调查问卷 <b>${title}</b> ？`,
      header: '删除问卷',
      accept: () => {
        this.deleteQuestionnaire(questionnaireId);
      },
      reject: () => {

      }
    });
  }

  deleteQuestionnaire(questionnaireId: number) {
    this._service.deleteQuestionnaire({ questionnaireId: questionnaireId }).then(data => {
      if (data.status === 0) {
        this.query();
        this.messageService.add({ severity: 'success', summary: '删除成功', detail: '' });
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取信息失败', detail: data.msg });
      }
    });
  }
}

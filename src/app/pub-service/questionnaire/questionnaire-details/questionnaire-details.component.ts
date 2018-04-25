import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { SelectItem } from 'primeng/components/common/selectitem';
import { QuestionListService } from '../questionnaire-list/question-list.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'gas-questionnaire-details',
  templateUrl: './questionnaire-details.component.html',
  styleUrls: ['./questionnaire-details.component.scss']
})
export class QuestionnaireDetailsComponent implements OnInit {
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
    private route: ActivatedRoute,

  ) { }

  onPageChange(event) {
    this.pages.pageNumber = event.first / event.rows + 1;
    this.pages.pageSize = event.rows;
  }
  ngOnInit() {

    this.route.paramMap
      .switchMap((params: ParamMap) => {

        return Promise.resolve(params.get('id'));
      }).subscribe(id => {
        this._service.listQuestions({ questionnaireId: id }).then(data => {
          if (data.status === 0) {
            this.datas = data.data;
            this.pages.total = data.data.total;
          } else {
            this.datas = [];
            this.pages.total = 0;
            this.pages.first = 0;
            this.messageService.add({ severity: 'warn', summary: '获取信息失败', detail: data.msg });
          }
        })
      });

  }



}

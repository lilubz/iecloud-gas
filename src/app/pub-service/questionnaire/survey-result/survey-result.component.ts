import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { SelectItem } from 'primeng/components/common/selectitem';
import { QuestionListService } from '../questionnaire-list/question-list.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { log } from 'util';
@Component({
  selector: 'gas-survey-result',
  templateUrl: './survey-result.component.html',
  styleUrls: ['./survey-result.component.scss']
})
export class SurveyResultComponent implements OnInit {
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
  questionlist: any = [];
  numberOfParticipant: any;
  questionnaireTitle: string;
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
    let questionnaireId = this.route.snapshot.queryParams['id'];
    this._service.listQuestionnaireResult({ questionnaireId: questionnaireId }).then(data => {
      if (data.status === 0) {
        this.questionnaireTitle = data.data.questionnaireTitle;
        this.numberOfParticipant = data.data.numberOfParticipant;
        if (data.data.questionResultStatisticVOList != null) {
          for (let i = 0; i < data.data.questionResultStatisticVOList.length; i++) {
            let list = data.data.questionResultStatisticVOList[i].countOfChoiceVOList
            for (let j = 0; j < list.length; j++) {
              if (list[j].numberOfAnswer === 1) {
                list[j].numberOfAnswer = '是'
              } else if (list[j].numberOfAnswer === 2) {
                list[j].numberOfAnswer = '否'
              } else {
                list[j].numberOfAnswer = '不确定'
              };
            }

          }
        }
        this.questionlist = data.data.questionResultStatisticVOList;
        this.pages.total = data.data.total;
      } else {
        this.questionlist = [];
        this.pages.total = 0;
        this.pages.first = 0;
        this.messageService.add({ severity: 'warn', summary: '获取信息失败', detail: data.msg });
      }
    });
  }
}

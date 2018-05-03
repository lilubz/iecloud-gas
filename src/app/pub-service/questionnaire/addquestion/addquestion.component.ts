import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { QuestionListService } from '../questionnaire-list/question-list.service';

@Component({
  selector: 'gas-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.scss']
})
export class AddquestionComponent implements OnInit {
  questionlist = [];
  question: any = '';
  questionnaire: any;
  getQuestionnaire: any;
  obj: any;
  objnaire: any;
  constructor(
    private messageService: MessageService,
    private questionlistService: QuestionListService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }
  addQuestionData() {
    if (this.question) {
      const obj = this.question;
      this.questionlist.push(obj);
      this.question = '';
    } else {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请输入题目名称' });
    }
  }
  deleteData(key) {
    this.questionlist.splice(key, 1);
  }
  addQuestionNaireData() {
    this.getQuestionnaire = this.questionnaire;

  }

  release() {
    this.questionlistService.uploadNewQuestionnaire({
      psQuestionnaireVO: JSON.stringify(
        {
          questionnaireTitle: this.getQuestionnaire,
          questionnaireDescription: '',
          psQuestionVOList: this.questionlist.map(item => {
            return {
              questionTitle: item,
              numberOfOptions: 3,
              defaultNumberAnswer: 3,
              optionsDescription: '满意;不满意;无所谓',
            };
          })
        }
      )
    }).then(data => {
      if (data.status === 0) {
        this.messageService.add({ severity: 'success', summary: '', detail: '添加成功！' });
        this.router.navigate(['../questionnaire-list'], { relativeTo: this.route });
      } else {
        this.messageService.add({ severity: 'warn', summary: '', detail: data.msg });
      }
    });
  }

}

import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/http.service';
import { API } from '../../../common/api';

@Injectable()
export class QuestionListService {
  constructor(private HttpService: HttpService) { }

  //获取所有问卷列表
  listQuestionnaire(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listQuestionnaire, params);
  }
  uploadNewQuestionnaire(params?: any): Promise<any> {
    return this.HttpService.withCredentialsPostRequest(API.uploadNewQuestionnaire, params);
  }
  listQuestions(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listQuestions, params);
  }

  listQuestionnaireResult(params?: { questionnaireId: number }): Promise<any> {
    return this.HttpService.getRequest(API.listQuestionnaireResult, params);
  }

}




import { Component, Input } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})
export class QuestionComponent {
    question: any = {};

    constructor(private api: ApiService) {}

    post(question) {
        console.log("Post " + question);
        this.api.postQuestion(question);
    };
}
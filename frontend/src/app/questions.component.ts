import { Component, Input } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html'
})
export class QuestionsComponent {
    question: any = {};
    questions;

    constructor(private api: ApiService) {}

    ngOnInit() {
        this.api.getQuestions().subscribe(res => {
            this.questions = res;
        })
    }

    post(question) {
        console.log("Post " + question);
        this.api.postQuestion(question);
    };
}
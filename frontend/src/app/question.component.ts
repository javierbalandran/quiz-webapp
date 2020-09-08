import { Component, Input } from '@angular/core';

@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})
export class QuestionComponent {
    question: string = '';

    post(question) {
        console.log("Post " + question);
    };
}
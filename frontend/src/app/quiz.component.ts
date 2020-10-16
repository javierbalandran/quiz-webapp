import { Component, Input } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'quiz',
    templateUrl: './quiz.component.html'
})
export class QuizComponent {
    quiz: any = {}; 

    constructor(private api: ApiService) {}

    ngOnInit() {
        this.api.quizSelected.subscribe(res => {
            this.quiz = res;
        })
    }
}

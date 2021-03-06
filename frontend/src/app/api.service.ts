import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class ApiService {
    private selectedQuestion = new Subject<any>();
    private selectedQuiz = new Subject<any>();
    questionSelected = this.selectedQuestion.asObservable();
    quizSelected = this.selectedQuiz.asObservable();

    constructor(private http: HttpClient) {}

    getQuestions(quizId) {
        return this.http.get(`http://localhost:59068/api/questions/${quizId}`);
    }

    postQuestion(question) {
        this.http.post('http://localhost:59068/api/questions', question).subscribe(res => {
            console.log(res);
        })
    }

    putQuestion(question) {
        this.http.put(`http://localhost:59068/api/questions/${question.id}`, question).subscribe(res => {
            console.log(res);
        })
    }

    getQuizzes() {
        return this.http.get('http://localhost:59068/api/Quizzes');
    }

    getAllQuizzes() {
        return this.http.get('http://localhost:59068/api/Quizzes/all');
    }

    postQuiz(quiz) {
        this.http.post('http://localhost:59068/api/Quizzes', quiz).subscribe(res => {
            console.log(res);
        })
    }

    putQuiz(quiz) {
        this.http.put(`http://localhost:59068/api/Quizzes/${quiz.id}`, quiz).subscribe(res => {
            console.log(res);
        })
    }

    selectQuestion(question) {
        this.selectedQuestion.next(question);
    }

    selectQuiz(quiz) {
        this.selectedQuiz.next(quiz);
    }
}
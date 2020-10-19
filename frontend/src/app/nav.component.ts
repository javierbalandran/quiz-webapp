import { Component } from '@angular/core';
import { QuestionComponent } from './question.component';

@Component({
  selector: 'nav',
  template: `
    <mat-toolbar>
        <button mat-button routerLink="/">Quiz</button>
        <span class="toolbar-spacer"></span>
        <button mat-button routerLink="/register">Register</button>
        <button mat-button routerLink="/login">Login</button>
    </mat-toolbar>
  `
})
export class NavComponent {

}

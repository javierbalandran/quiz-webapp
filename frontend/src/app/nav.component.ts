import { Component } from '@angular/core';
import { QuestionComponent } from './question.component';

@Component({
  selector: 'nav',
  template: `
    <mat-toolbar>
        <button mat-button routerLink="/">Quiz</button>
        <span class="toolbar-spacer"></span>
        <button style="position: absolute; right: 0; margin-right: 15px;" mat-button routerLink="/register">Register</button>
    </mat-toolbar>
  `
})
export class NavComponent {

}

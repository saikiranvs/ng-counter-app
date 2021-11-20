import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Counter App';
  count: number = 0;

  increaseCounter = () => {
    this.count = this.count + 1;
  }

  decreaseCounter = () => {
    this.count = this.count - 1;
  }

  resetCounter = () => {
    this.count = 0;
  }
}

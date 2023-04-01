import { Component } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent {
  parentMessage = 'Hello ';
  userInput = '';
  oddWords = '';
  evenWords = '';

  onUserClick() {
    if (this.userInput.length % 2 === 0) {
      this.evenWords = this.evenWords + this.userInput + '\n';
    } else {
      this.oddWords = this.oddWords + this.userInput + '\n';
    }

    this.userInput = '';
    //console.log(this.evenWords);
  }

  onUserInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.userInput = target.value;
    // console.log('hello');
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent {
  parentMessage = 'Hello ';
  userInput = '';
  oddWords: string[] = [];
  evenWords: string[] = [];
  oddCount: number = 0;
  evenCount: number = 0;

  onUserClick(event: Event) {
    event.preventDefault();

    if (this.userInput.length % 2 === 0) {
      this.evenWords.push(this.userInput);
      this.evenCount++;
    } else {
      this.oddWords.push(this.userInput);
      this.oddCount++;
    }

    this.userInput = '';
    //console.log(this.evenWords);
  }

  hasSpaces() {
    return this.userInput.includes(' ');
  }
}

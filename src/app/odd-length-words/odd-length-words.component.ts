import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd-length-words',
  templateUrl: './odd-length-words.component.html',
  styleUrls: ['./odd-length-words.component.css'],
})
export class OddLengthWordsComponent {
  @Input() oddWords: string[] = [];
  @Input() oddCount: number = 0;
}

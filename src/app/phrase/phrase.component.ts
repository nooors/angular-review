import { Component, OnInit } from '@angular/core';
import { PhraseService } from '../services/phrase.service';

@Component({
  selector: 'app-phrase',
  template: `
  <div class="phrase">
    <h2 class="title">Getting sentences</h2>
  </div>
  <div class="buttons">
    <button type="button" (click)="showSentence('spanish')">Spanish sentence</button>
    <button type="button" (click)="showSentence('english')">English sentence</button>
  </div>
  <div class="sentence">{{ sentence }}</div>
  `,
  styleUrls: ['./phrase.component.sass']
})
export class PhraseComponent implements OnInit {
  
  sentence: string = '';

  constructor(private sentenceMaker: PhraseService) { };

  ngOnInit(): void {
  };

  showSentence(language: string){
    let languageSentences: string[] = [];
    switch(language){
      case 'english':
        languageSentences = this.sentenceMaker.phraseEnglish;
        break;
      case 'spanish':
        languageSentences = this.sentenceMaker.phraseSpanish;
        break;
    } ;

    this.sentence = this.sentenceMaker.getPhrase(languageSentences, 6);
  };
  

}

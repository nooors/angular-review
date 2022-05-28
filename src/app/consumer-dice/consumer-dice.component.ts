import { Component, OnInit } from '@angular/core';
import { DiceService } from '../services/dice.service';

@Component({
  selector: 'app-consumer-dice',
  template: `
  <div class="dice">
    <h2 class="title">Dice throws</h2>
    <div class="dice">
      <button type="button" (click)="throwDice()">Throw the dice</button>
      {{ throwResult }}
    </div>
  </div>
  `,
  styleUrls: ['./consumer-dice.component.sass']
})
export class ConsumerDiceComponent implements OnInit {

  throwResult!: number;

  throwDice(){
    this.throwResult = this.diceServ.throwDice();

  }
  constructor(private diceServ: DiceService) { }
  
  ngOnInit(): void {
  }

}

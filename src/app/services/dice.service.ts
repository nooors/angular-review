import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  constructor() { }

  throwDice(){
    return Math.floor(6*Math.random()+1);
  };
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Superhero } from '../hero.model';

@Component({
  selector: 'app-show-superhero',
  template: `
  <hr>
  <div class="super-hero">
    Superhero
  </div>
  <hr>
  
  <div class="name">Name: {{ hero.name }}</div>
  <hr>
  <div class="aka">aka: {{ hero.alterEgo }}</div>
  <hr>
  <div class="superpowers">superpowers: {{ hero.superpowers }}</div>
  <hr>
  <div class="button"><button type="button" (click)="callHero()">Help!!!</button></div>
  <hr><hr><hr>
  `,
  styleUrls: ['./show-superhero.component.sass']
})
export class ShowSuperheroComponent implements OnInit {
 @Input() hero !: Superhero;

 @Output() help = new EventEmitter();

 callHero(){
   this.help.emit(this.hero.name)
 }
  constructor() { }

  ngOnInit(): void {
  }

}

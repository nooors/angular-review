import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PhraseService {
  phraseSpanish: string[] = [
    "El que avisa no es traidor, es avisador",
    "Un hombre no pierde pelo, lo cambia de sitio",
    "La autoridad es rotatoria",
    "Googlear es una habilidad deseable para un coder",
    "Dime con quien andas y si está buena me la mandas",
  ];

  phraseEnglish: string[] = [
    "Go down a rabbit hole",
    "Best thing since sliced bread",
    "Do you want a cookie?",
    "Be a happy camper",
    "Out of the frying pan and into the fire",
  ];
  constructor() {}

  getPhrase(phrases: string[], phrasesLenght: number) {
    return phrases[Math.floor(Math.random() * phrasesLenght - 1)];
  }
}

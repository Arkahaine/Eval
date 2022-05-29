import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  statistiques: Statistique[] = [
    new Statistique("1", "France", "68 125 478"),
    new Statistique("2", "Italie", "54 012 354")];

    constructor(){
      setTimeout(() => {
        this.statistiques.push(new Statistique("3", "Suisse", "24 145 015"));
      }, 3000);
    }
}

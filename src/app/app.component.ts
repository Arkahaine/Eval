import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  statistiques: Statistique[] = [
    new Statistique("1", "Chine", "1 448 471 000"),
    new Statistique("2", "Inde", "1 406 632 000")];

    constructor(){
      setTimeout(() => {
        this.statistiques.push(new Statistique("2", "Etats-Unis", "334 805 000"));
      }, 3000);
    }
}

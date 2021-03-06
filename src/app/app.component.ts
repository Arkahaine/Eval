import { Component } from '@angular/core';
import { Statistique } from './models/statistique';
import { StatistiqueService } from './statistique.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(
      public statistiqueService: StatistiqueService
    ){
      setTimeout(() => {
        this.statistiqueService.statistiques.push(new Statistique("3", "Suisse", "24 145 015"));
      }, 5000);
    }
    removeStatistique(statistique: Statistique){
      let index = this.statistiqueService.statistiques.indexOf(statistique);
      this.statistiqueService.statistiques.splice(index, 1);
    }
}

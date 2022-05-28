import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  statistique1: Statistique = new Statistique("1", "France", "68 125 478");
  statistique2: Statistique = new Statistique("2", "Italie", "54 012 354");
}

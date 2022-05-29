import { Injectable } from '@angular/core';
import { Statistique } from './models/statistique';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  
  statistiques: Statistique[] = [
    new Statistique("1", "France", "68 125 478"),
    new Statistique("2", "Italie", "54 012 354")];

  constructor() { }
}

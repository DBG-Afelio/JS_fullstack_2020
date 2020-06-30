import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
private PersonnesMock: Personne[] = [
  {
    id:1,
    nom: 'Castronovo'
  },
  {
    id:2,
    nom: 'Oshinovo'
  },

]
constructor() { }

}

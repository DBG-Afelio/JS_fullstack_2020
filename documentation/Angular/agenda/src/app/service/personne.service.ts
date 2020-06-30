import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  

    constructor(private http: HttpClient) { }

    getList(): Observable<Personne[]> {
      return this.http.get<Personne[]>('http://localhost:3000/personnes');
    }

    getPersonneById(id: number): Observable<Personne> {
      return this.http.get<Personne>(`http://localhost:3000/personnes/${id}`);
    }

    insertHaroon() {
      return this.http.post<Personne>(`http://localhost:3000/personnes`, {'nom': 'Haroonovo'});
    }

    insertPersonne(personne: Personne) {
      return this.http.post<Personne>(`http://localhost:3000/personnes`, {'nom': personne.nom});
    }
}

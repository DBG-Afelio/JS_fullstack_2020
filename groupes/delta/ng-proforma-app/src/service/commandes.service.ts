import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from "rxjs/operators";
import { Commande } from 'src/model/commande';
import { HttpClient } from '@angular/common/http';
import { CommandeDto } from 'src/model/commandeDto';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {

  constructor(private http: HttpClient) { }

  getCommandeById(id:number): Observable<Commande> {
    return this.http.get<CommandeDto>(`http://localhost:3000/commandes/${id}`).pipe(
      map((commandeDto:CommandeDto) => {
        return Commande.fromDto(commandeDto).setDate(new Date(commandeDto.date));
      })
    )
  }


}

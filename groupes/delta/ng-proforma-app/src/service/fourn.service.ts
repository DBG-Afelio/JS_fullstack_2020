import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FournDto } from 'src/model/fournDto';
import { map } from 'rxjs/operators';
import { Fourn } from 'src/model/fourn';

@Injectable({
  providedIn: 'root'
})
export class FournService {

  constructor(private http : HttpClient) { }



  getFournList():Observable<Fourn[]> {
    return this.http.get<FournDto[]>('http://localhost:3000/fournisseurs').pipe(
      map((fourns:FournDto[]) => {
        return fourns.map((fourn : FournDto)=>Fourn.fromDto(fourn));
      })
    )
  }
  getFournById(id : number):Observable <Fourn>{
    return this.http.get<FournDto>(`http://localhost:3000/fournisseurs/${id}`).pipe(
      map((fourn : FournDto)=>{
        return Fourn.fromDto(fourn);
      })
    )
  }

  getFournByIdWithProduct(id: number): Observable<Fourn[]> {
    return
  }



}



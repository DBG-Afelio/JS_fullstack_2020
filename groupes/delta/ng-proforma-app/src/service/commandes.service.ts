import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from "rxjs/operators";
import { Commande } from 'src/model/commande';
import { HttpClient } from '@angular/common/http';
import { CommandeDto } from 'src/model/commandeDto';
import { UsersService } from './users.service';
import { User } from 'src/model/user';
import { ProductService } from './product.service';
import { Product } from 'src/model/product';
import { Option } from 'src/model/option';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {

  constructor(private http: HttpClient, private usersService:UsersService, private productService:ProductService) { }

  getCommandeById(id:number): Observable<Commande> {
    return this.http.get<CommandeDto>(`http://localhost:3000/commandes/${id}`).pipe(
      map((commandeDto:CommandeDto) => {
        return Commande.fromDto(commandeDto);
      })
    )
  }

  getCommandeByIdWithObject(id:number):Observable<Commande> {
    return this.getCommandeById(id).pipe(
      mergeMap((commande:Commande) => {
        return this.usersService.getUserById(commande.user_id).pipe(
          map((user:User) => {
            return commande.setUser(user);
          })
        )
      }),
      mergeMap((commande:Commande) => {
        return this.productService.getProductById(commande.product_id).pipe(
          map((product:Product) => {
            return commande.setProduct(product);
          })
        )
      }),
      map((commande:Commande) => {
        return commande.setOptions(
          commande.product.options.filter((option:Option) => commande.option_ids.includes(option.id))
        )
      })
    )
  }


}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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
  private pending_command:Commande;
  public pendingCommand$:Subject<Commande> = new Subject<Commande>();

  constructor(private http: HttpClient, private usersService:UsersService, private productService:ProductService) { }

  getCommandeById(id:number): Observable<Commande> {
    return this.http.get<CommandeDto>(`http://localhost:3000/commandes/${id}`).pipe(
      map((commandeDto:CommandeDto) => {
        return Commande.fromDto(commandeDto);
      })
    )
  }

  
  public get PendingCommand() : Commande {
    return this.pending_command;
  }
  
  
  public set PendingCommand(command : Commande) {
    this.pendingCommand$.next(command);
    this.pending_command = command;
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

  getCommandesList(): Observable<Commande[]> {
    return this.http.get<CommandeDto[]>(`http://localhost:3000/commandes`).pipe(
      map((commandesDto:CommandeDto[]) => {
        return commandesDto.map((commandeDto:CommandeDto) => Commande.fromDto(commandeDto))
      })
    )
  }

  getCommandesListWithObject(): Observable<Commande[]> {
    return this.getCommandesList().pipe(
      mergeMap((commandesList:Commande[])=>{
        return this.usersService.getUsers().pipe(
          map((users:User[])=>{
            return commandesList.map((commande)=> commande.setUser(users.find(user => user.Id === commande.user_id)));
          })
        ) 
      }),
      mergeMap((commandesList:Commande[])=>{
        return this.productService.getProductsList().pipe(
          map((produits:Product[])=>{
            return commandesList.map((commande)=>commande.setProduct(produits.find(produit => produit.id===commande.product_id)));
          })
        )
      }),
      map((commandesList:Commande[])=>{
        return commandesList.map((commande)=> commande.setOptions(commande.product.options.filter(option => commande.option_ids.includes(option.id))))
      })
    )
  }
  creatCommand(command:CommandeDto):Observable<Commande>{
    return this.http.post<CommandeDto>(`http://localhost:3000/commandes`,command).pipe(
      map((commandDto:CommandeDto)=>{
        return Commande.fromDto(commandDto);
      }),
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
  updateCommand(command : CommandeDto) :Observable<Commande> {
    return this.http.put<CommandeDto>(`http://localhost:3000/commandes/${command.id}`,command).pipe(
      map((commandDto : CommandeDto)=>{
        return Commande.fromDto(commandDto);
      })
    )
  }
  
  submitPendingCommand():Commande {
    let sendedCommand:Commande;
    this.creatCommand(this.pending_command.toDto()).subscribe((commande:Commande) => sendedCommand = commande);
    return sendedCommand;
  }


}

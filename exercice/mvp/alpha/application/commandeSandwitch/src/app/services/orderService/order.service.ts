import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators'
import { IOrderDto } from './../../models/orderModel/iorder-dto';
import { Order } from 'src/app/models/orderModel/order';
import { User } from 'src/app/models/userModel/user';
import { UserService } from '../userService/user.service';
import { ProductService } from '../productService/product.service';
import { FullOrder } from 'src/app/models/fullOrderModel/fullOrder';
import { Product } from 'src/app/models/productModel/Product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public currentUser: User = null;
  private userOrderLocal: BehaviorSubject<Order> = new BehaviorSubject(null);
  private userOrderServer: BehaviorSubject<Order> = new BehaviorSubject(null);
  private userOrderAsFullOrder: BehaviorSubject<FullOrder> = new BehaviorSubject(null);
  public orderUrl: string = 'http://localhost:3000/commandes';
  private creditMaxAllowed: number = 10;

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private productService: ProductService,
  ) { 
    this.userService.getCurrentUser().subscribe((currentUser) => {
      this.currentUser = currentUser;
      this.updateUserOrder();
      console.log('CURRENT USER: ', currentUser);
      
    });
   }

  public updateUserOrder(): void{
    if (this.currentUser) {
      const localFound: Order = this.findLocalOrder(this.currentUser);
      if (localFound) { //commande trouvee en local
        console.log('COMMANDE TROUVEE EN LOCAL');
        this.setLocalOrder(localFound);
        this.setUserOrderAsFullOrder(localFound);
        this.setServerOrder(null);
        this.findServerOrder(this.currentUser).subscribe((currOrder) => {
          if (currOrder) { // cas qui ne devrait jamais arriver
            this.setServerOrder(currOrder);
            console.error("ce cas ne devrait JAMAIS se produire : commande trouvee a la fois en local et sur le server !!");
          }
        });
      } else { //commande non trouvee en local
        
        this.setLocalOrder(null);
        this.findServerOrder(this.currentUser).subscribe((currOrder) => {
          if (currOrder) {
            this.setServerOrder(currOrder);
            this.setUserOrderAsFullOrder(currOrder);
            console.log('TROUVEE SUR SERVER');
          } else {
            this.setServerOrder(null);
            this.setUserOrderAsFullOrder(null);
            console.log('AUCUNE TROUVEE ');
          }
        });
      }
    } 
      else { //user disconnected <=> unknown visitor
        this.setLocalOrder(null);
        this.setServerOrder(null);
      this.setUserOrderAsFullOrder(null);
      console.log('USER UNKNOWN ');
    }
  }
  
  public getList(): Observable<Order[]> {
    return this.http.get<IOrderDto[]>(this.orderUrl)
      .pipe(
        map((orderDtoList) => {
          return orderDtoList.map((orderDto) => Order.fromDto(orderDto))
        }));
  }
  public getServerOrderById(id: number): Observable<Order> {
    return this.http.get<IOrderDto>(`${this.orderUrl}/${id}`)
      .pipe(
        map((orderDto) => Order.fromDto(orderDto)));
  }
  public findServerOrder(user: User): Observable<Order> {
    return this.getList()
      .pipe(
        map((orders) => orders.find(order => order.userId === user.id)));
  }
  public getServerOrdersAsFullOrderArray(): Observable<FullOrder[]> {
    return forkJoin(
      this.getList(),
      this.userService.getList(),
      this.productService.getList())
      .pipe(
        map(([orders, users, products]) => {
          return orders.map(order => {
            const user = users.find(user => user.id === order.userId);
            const prod = products.find(produit => produit.id === order.productId);
            return new FullOrder(user, order, prod);
          })
        }));
  }

/*--------------------------------------------------------*/
  public setUserOrderAsFullOrder(userOrder: Order): void {
    if (userOrder) {
      this.productService.getProductById(userOrder.productId).subscribe((prod) => {
        this.userOrderAsFullOrder.next(new FullOrder(this.currentUser, userOrder, prod));
        console.log("PROD = ", prod);
      });
    } else {
      this.userOrderAsFullOrder.next(null);
    }
  }

  public getUserOrderAsFullOrder(): Observable<FullOrder>{
    return this.userOrderAsFullOrder.asObservable();
  }
/*----------------getter-setter userOrderServer-----------*/
  public setServerOrder(order:Order): void {
    this.userOrderServer.next(order);
    this.setUserOrderAsFullOrder(order);
  }
  public getServerOrder(): Observable<Order> {
    return this.userOrderServer.asObservable();
  }
/*-------------------------------------------------------*/

/*------local storage related & userOrderLocal variable----*/
  public storeOrderInLocalStorage(order: Order): void {
    localStorage.setItem(order.userId.toString(), JSON.stringify(order));
    this.setLocalOrder(order);
  }
  public findLocalOrder(user:User): Order{
    let foundOrder: Order = null;
    if (user && localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        if (key === user.id.toString()) {
          foundOrder = JSON.parse(localStorage.getItem(key));
          console.log('userOrderLocal trouved: ', foundOrder);
        }
      }
    } else {
      console.log('userOrderLocal introuvable: ', foundOrder);
    }
      return foundOrder;
  }
  public emptyAllLocalStorage(): void{
    localStorage.clear();
  }
  public setLocalOrder(order: Order): void{
    this.userOrderLocal.next(order);
    this.setUserOrderAsFullOrder(order);
  }
  public getLocalOrder(): Observable<Order>{
    return this.userOrderLocal.asObservable(); 
  }
  /*-------------------------------*/


  public getCreditMax(): number{
    return this.creditMaxAllowed;
  }
  public setCreditMax(newCreditMax: number): void{
    this.creditMaxAllowed = newCreditMax;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, forkJoin, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { IOrderDto } from './../../models/orderModel/iorder-dto';
import { Order } from 'src/app/models/orderModel/order';
import { User } from 'src/app/models/userModel/user';
import { UserService } from '../userService/user.service';
import { ProductService } from '../productService/product.service';
import { FullOrder } from 'src/app/models/fullOrderModel/fullOrder';
import { Product } from 'src/app/models/productModel/Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public currentUser: User = null;
  private userOrderLocal: BehaviorSubject<Order> = new BehaviorSubject(null);
  private userOrderServer: BehaviorSubject<Order> = new BehaviorSubject(null);
  private userFullOrder: BehaviorSubject<FullOrder> = new BehaviorSubject(null);
  public orderUrl: string = 'http://localhost:3000/commandes';
  private creditMaxAllowed: number = 10;
  public TODAY = new Date();
  public TODAY_str: string = this.TODAY.getDate().toString() + this.TODAY.getMonth().toString() + this.TODAY.getFullYear().toString();

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
        this.setServerOrder(null);
        this.findTodayServerOrder(this.currentUser).subscribe((currOrder) => {
          if (currOrder) { // 
            console.error("CAS D'ERREUR: il ne peut y avoir une commande en local et sur server");
          }
        });
      } else { //commande non trouvee en local
        this.setLocalOrder(null);
        this.findTodayServerOrder(this.currentUser).subscribe((currOrder) => {
          if (currOrder) {
            this.setServerOrder(currOrder);
            console.log('TROUVEE SUR SERVER');
          } else {
            this.setServerOrder(null);
            console.log('AUCUNE TROUVEE ');
          }
        });
      }
    }
    else { //user disconnected <=> unknown visitor
      this.setLocalOrder(null);
      this.setServerOrder(null);
      console.log('USER UNKNOWN - NONE ORDER COULD BE FOUND');
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
  public findTodayServerOrder(user: User): Observable<Order> {
    return this.getList()
      .pipe(
        map((orders) => orders.find(order => {
          const ORDER_DATE_str: string = order.date.getDate().toString() + order.date.getMonth().toString() + order.date.getFullYear().toString();
          return order.userId === user.id && ORDER_DATE_str === this.TODAY_str;
        })));
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
            return new FullOrder(user, order, prod, true);
          })
        }));
  }

/*--------------------------------------------------------*/
  public updateFullOrder(): void {

    this.getLocalOrder().subscribe((fromLocalStor) => {
      this.getServerOrder().subscribe((fromServer) => {

        if (!fromLocalStor && !fromServer) {
          console.log('ni fromLocalStor ni fromServer');
          this.userFullOrder.next(null);
        } else {
          let orderConfirmed: boolean = true;
          let order: Order = fromServer;
          if (!fromServer) {
            orderConfirmed = false;
            order = fromLocalStor;
          }
          this.productService.getProductById(order.productId).subscribe((prod) => {
            this.userFullOrder.next(new FullOrder(this.currentUser, order, prod, orderConfirmed));
          });
        }
      });
    });
  }

  public getFullOrder(): Observable<FullOrder>{
    return this.userFullOrder.asObservable();
  }
/*----------------getter-setter userOrderServer-----------*/
  public setServerOrder(order:Order): void {
    this.userOrderServer.next(order);
    this.updateFullOrder();
  }
  public getServerOrder(): Observable<Order> {
    return this.userOrderServer.asObservable();
  }
/*-------------------------------------------------------*/

/*------local storage related & userOrderLocal variable----*/
  public storeOrderInLocalStorage(order: Order): void {
    
    let key: string = order.userId.toString() + '_' + this.TODAY_str;
    localStorage.setItem(key, JSON.stringify(order));
    this.setLocalOrder(order);
  }
  public findLocalOrder(user:User): Order{
    let foundOrder: Order = null;
    if (user && localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        if (key.startsWith(user.id.toString())) {
          if (key === user.id.toString() + '_' + this.TODAY_str) { //cle qui correspond a la commande du jour
            foundOrder = JSON.parse(localStorage.getItem(key));
            console.log('userOrderLocal trouved: ', key, foundOrder);
          } else { // cle qui correspond a une commande anterieure pour ce currentUser/ n'a pas lieu de rester stocker en local
            localStorage.removeItem(key);
            console.log('ancienne commande supprimee: ', key);
          }
        }
      }
    } else {
      console.log('OrderLocal introuvable ou Pas de User connected');
    }
      return foundOrder;
  }
 
  public removeTodayLocalOrder(): void {
    const removeItemKey: string = this.currentUser.id.toLocaleString() + '_' + this.TODAY_str;
    localStorage.removeItem(removeItemKey);
    this.setLocalOrder(null);
  }
  public emptyLocalStorage(): void{
    localStorage.clear();
    this.setLocalOrder(null);
  }
  public setLocalOrder(order: Order): void{
    this.userOrderLocal.next(order);
    this.updateFullOrder();
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
  /*-----------------------JSON Server/commandes-----------------------------*/
  public updateOrder(payload: Order): Observable<IOrderDto> { //dans notre appli en l'etat, ne sera pas utilised
    this.setServerOrder(payload);
    return this.http.put<IOrderDto>(`${environment.baseUrl}/commandes/${payload.id}`, payload.toDto())
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
  public deleteOrder(payload: Order): Observable<IOrderDto> {
    this.setServerOrder(null);
    this.updateUserOrder();
    return this.http.delete<IOrderDto>(`${environment.baseUrl}/commandes/${payload.id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
      
  }
  public addOrder(payload: Order): Observable<IOrderDto> {
    this.setServerOrder(payload);
    return this.http.post<IOrderDto>(`${this.orderUrl}`, payload.toDto())
      .pipe(catchError((error: any) => throwError(error.json())));
  }
  /*--------------------------------------------------------------------------*/
}

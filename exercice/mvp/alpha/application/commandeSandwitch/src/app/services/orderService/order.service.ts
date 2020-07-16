import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, forkJoin, throwError } from 'rxjs';
import { map, mergeMap, filter } from 'rxjs/operators'
import { IOrderDto } from './../../models/orderModel/iorder-dto';
import { Order } from 'src/app/models/orderModel/order';
import { User } from 'src/app/models/userModel/user';
import { UserService } from '../userService/user.service';
import { ProductService } from '../productService/product.service';
import { FullOrder } from 'src/app/models/fullOrderModel/fullOrder';
import { Product } from 'src/app/models/productModel/Product';
import { environment } from 'src/environments/environment';
import { Deadline } from 'src/app/models/deadlineModel/deadline';
import { SupplierService } from '../supplierService/supplier.service';
import { Supplier } from 'src/app/models/supplierModel/Supplier';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  //ASSIA = new User("assia", "assia", "rachdi", "assia", 0, 'JSFull', false, false, 4);
  public currentUser: User = null;
  private userFullOrder: BehaviorSubject<FullOrder> = new BehaviorSubject(null);
  public orderUrl: string = 'http://localhost:3000/commandes';
  private creditMaxAllowed: number = 10;
  private deadline: BehaviorSubject<Deadline> = new BehaviorSubject(new Deadline(21, 30, 0));// 12:14 = 51600 sec // <<--- ici pour modifier la deadline pour les tests ( remettre 10, 30, 0 ) une fois terminee.
  private onTime: BehaviorSubject<boolean> = new BehaviorSubject(true);
  public today = new Date();
  public today_str: string = this.today.getDate().toString() + this.today.getMonth().toString() + this.today.getFullYear().toString();

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private productService: ProductService,
    private supplierService: SupplierService,
  ) { 
    this.userService.getCurrentUser().subscribe((currentUser) => {
      this.currentUser = currentUser;
      this.updateFullOrder(); 
    });
  }

  private updateFullOrder(): void{    
    console.log(this.currentUser);
    let found: FullOrder = null;
    if (this.currentUser) { //utilsateur connected
      const orderLS: Order = this.findInLocalStorage(); //je cherche d'abord en local
      if (orderLS) { //trouved en local
        this.supplierService.getProductAndSupplier(orderLS.productId).subscribe(
          ([productFound, supplierFound]) => {
            const orderLSTyped = new Order(orderLS.userId, orderLS.productId, orderLS.optionIds, orderLS.isPayed, orderLS.id, orderLS.date);
            found = new FullOrder(this.currentUser, orderLSTyped, productFound, supplierFound, false);
            console.log('1-local', found);
            this.setFullOrder(found);
          });
        
      } else { //pas trouved en local
        this.findTodayServerOrder().subscribe((orderDB) => {
          if (orderDB) { //trouved sur Server
            this.supplierService.getProductAndSupplier(orderDB.productId).subscribe(
              ([productFound, supplierFound]) => {
            
              found = new FullOrder(this.currentUser, orderDB, productFound, supplierFound, true);
              console.log('1-server', found);
              this.setFullOrder(found);
            });
          } else { // pas trouved ni en local ni sur server
            found = null;
            console.log('1-nulle part', found);
            this.setFullOrder(found);
          }
        });
      }
    } else { //aucun utilisateur connected
      found = null;
      console.log('1-user deconnected <=> pas de recherche d\'order', found);
      this.setFullOrder(found);
    }
    console.log('found', found);
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

  public findTodayServerOrder(): Observable<Order> {
    return this.getList()
      .pipe(
        map((orders) => orders.find(order => {
          const ORDER_DATE_str: string = order.date.getDate().toString() + order.date.getMonth().toString() + order.date.getFullYear().toString();
          return order.userId === this.currentUser.id && ORDER_DATE_str === this.today_str;

        })));
  }
  
  public getAllFullOrders(): Observable<FullOrder[]> {
    return forkJoin(
      this.getList(),
      this.userService.getList(),
      this.productService.getList(),
      this.supplierService.getList())
      .pipe(
        map(([orders, users, products, suppliers]) => {
          return orders.map(order => {
            const user = users.find(user => user.id === order.userId);
            const prod = products.find(produit => produit.id === order.productId);
            const supplier = suppliers.find((supplier) => supplier.id === prod.getSupplierId());
            return new FullOrder(user, order, prod, supplier, true);
          })
        }));
  }

/*----------------------SETTER GETTER FullOrder ----------------------------------*/
  public setFullOrder(fullOrder: FullOrder): void {
    fullOrder ? this.userFullOrder.next(fullOrder) : this.userFullOrder.next(null); 

  }

  public getFullOrder(): Observable<FullOrder>{
    return this.userFullOrder.asObservable();
  }

/*------local storage related & userOrderLocal variable----*/
  public addInLocalStorage(order: Order): void {
    console.log(order); //order correct a ce niveau (userid)
    let key: string = order.userId.toString() + '_' + this.today_str;
    localStorage.setItem(key, JSON.stringify(order));
    this.updateFullOrder();
  }
  public findInLocalStorage(): Order{
    let foundOrder: Order = null;
    if (this.currentUser && localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        if (key.startsWith(this.currentUser.id.toString())) {
          if (key === this.currentUser.id.toString() + '_' + this.today_str) { //cle qui correspond a la commande du jour
            foundOrder = JSON.parse(localStorage.getItem(key));
            
          } else { // cle qui correspond a une commande anterieure pour ce currentUser/ n'a pas lieu de rester stocker en local
            localStorage.removeItem(key);
           
          }
        }
      }
    } else {
      // console.log('User deconnected ou pas de commande locale');
    }
      return foundOrder;
  }
 
  public removeFromLocalStorage(): void {
    const removeItemKey: string = this.currentUser.id.toLocaleString() + '_' + this.today_str;
    localStorage.removeItem(removeItemKey);
    this.updateFullOrder();
  }
  // public emptyLocalStorage(): void{
  //   localStorage.clear();
  // }


  /*-----------------------JSON Server/commandes-----------------------------*/
  // public updateServerOrder(payload: Order): Observable<IOrderDto> { //dans notre appli en l'etat, ne sera pas utilised
  //   this.setServerOrder(payload);
  //   return this.http.put<IOrderDto>(`${environment.baseUrl}/commandes/${payload.id}`, payload.toDto())
  //     .pipe(catchError((error: any) => Observable.throw(error.json())));
  // }
  public updateCredit() {
    
  }
  public deleteOrderFromServer(payload: FullOrder): void {
// marche pas avec ce block gestion credit
    if (!payload.getOrder().isPayed) {
      console.log('credit aavant: ', this.currentUser.credit);
      Math.round((this.currentUser.credit -= payload.getTotalPrice())*100)/100; //pour avoir 2 digits float
      console.log('credit apres: ', this.currentUser.credit);
        this.userService.setCurrentUser(this.currentUser);
      this.userService.updateUser(this.currentUser).subscribe((userDto) => console.log("user after update in Server :", User.fromDto(userDto)));
    }

    console.log('********DELETE REQUEST SERVER **********');
    this.http.delete<IOrderDto>(`${environment.baseUrl}/commandes/${payload.getOrder().id}`).subscribe({
      next: returnedOrder => {
        console.log('commande retiree du Local storage');
        if (returnedOrder) {
          // this.getFullOrder().subscribe((o) => console.log('after delete before update :',o));
          this.updateFullOrder();
        }
        //returnedOrder ? this.updateFullOrder() : console.log('retour requete DELETE ?');
      },
      error: error => console.error('Erreur DELETE order', error)
    });
  }

  public addOrderIntoServer(fullPayload: FullOrder): void {
    fullPayload.getOrder().date = new Date();
    if (!fullPayload.getOrder().isPayed) {
      fullPayload.getUser().credit += fullPayload.getTotalPrice(); 
      this.userService.updateUser(fullPayload.getUser()).subscribe(() => {
        this.userService.setCurrentUser(fullPayload.getUser());
        this.setFullOrder(fullPayload);
      });
    }
    this.http.post<IOrderDto>(`${this.orderUrl}`, fullPayload.getOrder().toDto()).subscribe({
      next: returnedOrder => {
        this.removeFromLocalStorage();
        console.log('commande retiree du Local storage');
        returnedOrder ? this.updateFullOrder() : console.log('retour requete POST ?');
      },
      error: error => console.error('Erreur POST new order', error)
    });
  }

  /*------RELATED TO ORDER TIMING-----------------------------------------------*/
  public getDeadline(): Observable<Deadline>{
    return this.deadline.asObservable();
  }
  public setDeadline(newDeadLine:Deadline): void{ //only Admin can change this subject
    this.deadline.next(newDeadLine);
  }
  public isOnTime(): Observable<boolean>{
    return this.onTime.asObservable();
  }
  public setOrderOutOfTime():void {
    this.onTime.next(false);
  }
  public setOrderOnTime(): void{
    this.onTime.next(true);
  }

  /*-------------------------------*/
  public getCreditMax(): number{
    return this.creditMaxAllowed;
  }
  public setCreditMax(newCreditMax: number): void{
    this.creditMaxAllowed = newCreditMax;
  }
}

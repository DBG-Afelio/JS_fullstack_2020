import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/orderService/order.service';
import { Deadline } from 'src/app/models/deadlineModel/deadline';
import { FullOrder } from 'src/app/models/fullOrderModel/fullOrder';

@Component({
  selector: 'app-time-tracking',
  templateUrl: './time-tracking.component.html',
  styleUrls: ['./time-tracking.component.css']
})
export class TimeTrackingComponent implements OnInit {
  public deadline: Deadline = null;
  public today: Date = new Date();
  public wasOnTime: boolean = null;
  public fullOrder: FullOrder = undefined;
  
  constructor(
    private orderService: OrderService,
  ) { 
    this.orderService.getDeadline().subscribe((deadline) => this.deadline = deadline);
    this.orderService.isOnTime().subscribe((timeStatus) => this.wasOnTime = timeStatus);
    this.orderService.getFullOrder().subscribe((currOrder) => this.fullOrder = currOrder);
    
    setInterval(() => {
      this.today = new Date();
      if (this.isOnTimeNow() !== this.wasOnTime) {
        this.isOnTimeNow() ? this.orderService.setOrderOnTime() : this.orderService.setOrderOutOfTime();
      }
    }, 1);
  }

  ngOnInit(): void {
  }

  public isOnTimeNow(): boolean {
    const deadlineH_s: number = this.deadline.getHours() * 3600; //in seconds
    const deadlineM_s: number = this.deadline.getMinutes() * 60; //in seconds
    const deadlineS_s: number = this.deadline.getSeconds(); //already in seconds
    const deadline_sec: number = deadlineH_s + deadlineM_s + deadlineS_s;

    const nowH_s: number = this.today.getHours() * 3600; //in seconds
    const nowM_s: number = this.today.getMinutes() * 60; //in seconds
    const nowS_s: number = this.today.getSeconds(); //already in seconds
    const now_sec: number = nowH_s + nowM_s + nowS_s;

    return now_sec <= deadline_sec;
  }

  public displayMessage(): string {
    if (this.fullOrder !== undefined) {
      let limit: string = `${this.deadline.getHours()}h${this.deadline.getMinutes()}`;
      this.deadline.getSeconds() === 0 ? limit : limit += `m${this.deadline.getSeconds()}`;
      let msg: string = '';
 
      if (this.wasOnTime) {
        if (!this.fullOrder) {
          msg = `Passez commande avant ${limit} pour etre livré aujourdh'hui avant midi.`;
        } else {
          if (this.fullOrder.isConfirmed()) {
            msg = `Votre commande du jour a ete enregistree. Vous avez la possibilite de la modifier/annuler jusque ${limit} au plus tard.`;
          } else {
            msg = `N'oubliez pas de confirmer votre commande avant ${limit} pour etre livré aujourd'hui. Passé ce delai il ne sera plus possible de commander.`;
          }
        }
      } else {
        if (!this.fullOrder) {
          msg = `Il est malheureusement trop tard pour commander votre repas du jour. Revenez demain avant ${limit} :)`;
        } else {
          if (this.fullOrder.isConfirmed()) {
            msg = `Votre commande est en cours de preparation et sera livree pour midi !`;
          } else {
            msg = `Helas, votre commande n'a pas ete confirmée avant ${limit}. Nous ne pourrons vous livrer aujourd'hui :(`;
          }
        } 
      }
      return msg;
    }
  }
}

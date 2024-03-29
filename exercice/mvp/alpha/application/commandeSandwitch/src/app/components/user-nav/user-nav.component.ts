import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/userModel/user';
import { FullOrder } from 'src/app/models/fullOrderModel/fullOrder';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {
 
  @Input() isOnTime:boolean = null;
  @Input() fullOrder: FullOrder = null;
  @Input() userList: User[] = [];
  @Input() currentUser: User = null;
  public ariaLabelCredit: string = '';
  @Input() creditMax: number = null; 
  @Output() deleteRequest: EventEmitter<any> = new EventEmitter();
  constructor() {
    if (this.currentUser && this.creditMax) {
      if (this.currentUser.credit > 0) {
        this.ariaLabelCredit = 'Pensez à vous acquitter du montant dû aupres de l\'administrateur.';
      } else {
        this.ariaLabelCredit = `Vous êtes à jour sur vos remboursements. Votre credit autorisé est de ${this.creditMax}.`;
      }
    }
  }
    

  ngOnInit(): void {
    
  }

  public deleteOrderRequested(): void{
    if (this.isOnTime && this.isOnTime !== null) {
      if (!this.fullOrder.isConfirmed()) {
        console.log('request to cancel LOCAL-Order from USER-NAV');
        this.deleteRequest.emit();
      } else {
        const msg = `Etes-vous certain de vouloir annuler votre commande ?`;
        if (window.confirm(msg)) {
          console.log('request to cancel SERVER-Order from USER-NAV');
          this.deleteRequest.emit();
        }
      }
    }
    
  }

  public setCreditMessage(): string {
    let message: string = '';
    switch (this.currentUser.credit) {
      case 0: {
        message = `Il vous reste la totalité de votre crédit autorisé d'un montant de € ${this.creditMax}`;
        break;
      }
      case 10: {
        message = `Vous avez épuisé la totalité de votre crédit authorisé ! Pensez à vous acquitter du montant dû auprès de l'administrateur`;
        break;
      }
      default: {
        message = `Vous avez consommé € ${this.currentUser.credit} sur votre crédit autorisé. Pensez à vous acquitter du montant dû aupres de l'administrateur`;
      }
    }
    return message;
  }


  public setOrderMessage(): string {

    let msg: string = '';
    if (this.fullOrder) {
      msg = this.fullOrder.getProduct().getName();
      if (this.fullOrder.getSelectedOptions().length > 0) {
        msg += ' suppl.'
        this.fullOrder.getSelectedOptions().forEach(option => {
          msg += ` ${option.nom}`;
        });
        msg += ` - ${this.fullOrder.getTotalPrice()} €`;
      }
    } else {
      msg = 'Pas de commande à ce jour'
    }
    return msg;
  }
}

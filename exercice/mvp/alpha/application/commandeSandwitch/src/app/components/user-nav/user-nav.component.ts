import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/userModel/user';
import { FullOrder } from 'src/app/models/fullOrderModel/fullOrder';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {
  @Input() fullOrder: FullOrder = null;
  @Input() userList: User[] = [];
  @Input() currentUser: User = null;
  @Input() creditMax: number = null; 
  @Output() deleteRequest: EventEmitter<any> = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
    
  }

  public deleteOrderRequested(): void{
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

  public setCreditMessage(): string {
    let message: string = '';
    switch (this.currentUser.credit) {
      case 0: {
        message = `Il vous reste la totalite de votre credit autorise d'un montant de € ${this.creditMax}`;
        break;
      }
      case 10: {
        message = `Vous avez epuise la totalite de votre credit authorise ! Veuillez vous acquitter du montant du aupres de l'administrateur`;
        break;
      }
      default: {
        message = `Vous avez consommé € ${this.currentUser.credit} sur votre credit autorise. Veuillez vous acquitter du montant du aupres de l'administrateur`;
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
      msg = 'Pas de commande a ce jour'
    }
    return msg;
  }
}

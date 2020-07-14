import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{ ListItemsService } from '../../services/list-items.service';
import { Item } from '../../interfaces/item';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component'
import { ConditionalExpr } from '@angular/compiler';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/interfaces/user.model';

@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrls: ['./display-item.component.css']
})

export class DisplayItemComponent implements OnInit {
  public visible: boolean = false;
  public listProducts: Item[];
  // public currentUser = this.login.getCurrentUserAsObservable().subscribe((data) => data);
  
  @Input() item: Item;
  @Output() selectedProductEvent = new EventEmitter<Item>();
  @Output() emitChangesProduct = new EventEmitter<Item>();
  @Input() sidebar: SidebarComponent;

  currentUser: UserModel;

  constructor(private login: LoginService, private route: Router) {}

  ngOnInit() {
    this.login.getCurrentUserAsObservable().subscribe((user) => this.currentUser = user);
  }
  
  onProductSelection(){

    console.log(this.currentUser);
    
    if(!this.currentUser) {
      this.route.navigate(['/login']);
    }

    this.selectedProductEvent.emit(this.item);
  }
  onDisplayDetails(id){
    console.log(id);
  }
  modifyItem(id){
    console.log(id);
    this.visible = true;
  }
  closeModifyPannel(){
    this.visible = false;
  }

  showSidebar() {
    console.log(this.sidebar);
  }

  updateItem(item){
    this.emitChangesProduct.emit(item);
  }


}

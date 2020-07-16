import { Component, OnInit } from '@angular/core';
import { UserModel }  from 'src/app/interfaces/user.model';
import { UserService } from 'src/app/services/user.service';
import { DisplayUserComponent } from '../display-user/display-user.component';
import { ListTotalOrdersComponent } from '../list-total-orders/list-total-orders.component';
import { HistoryOrdersUserComponent } from '../history-orders-user/history-orders-user.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  arrayUsers: UserModel[] = [];
  currentUserId: number;
  currentUserIndex: number;
  currentUser: UserModel;
  userSearched: UserModel;
  

  constructor(public listusers: UserService) {
    this.listusers.getUsers().subscribe((data) => this.arrayUsers = data)
   }

  ngOnInit() {
    return this.arrayUsers;
  }

  //  Methodes User a completer

  addUser(user: UserModel) {
    return this.listusers.createUser(user).subscribe();
  }

  getUser(value: UserModel) {
    this.currentUser = value;
    return this.currentUser;
  }


  removeUser(user: UserModel) {
      user = this.currentUser;
      let confirmDelete = confirm("Etes-vous sur de vouloir supprimer l'utilisateur ?");
      if(confirmDelete) {
        this.arrayUsers.splice(this.arrayUsers.indexOf(this.currentUser), 1);
        this.listusers.removeUser(user).subscribe();
      }
  }

}

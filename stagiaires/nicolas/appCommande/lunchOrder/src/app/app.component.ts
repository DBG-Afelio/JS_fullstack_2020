import { Component } from '@angular/core';
import { UsersListService } from './services/users-list.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lunchOrder';
  showFiller:boolean = false;
  currentUser:User;

  constructor(private usersListService:UsersListService){

    usersListService.getCurrentUser().subscribe( userFound => this.currentUser = userFound)

  }

}

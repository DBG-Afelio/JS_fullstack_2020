import { Component } from '@angular/core';
import { User } from './models/user/user';
import { UsersService } from './services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'blog';
  currentUser:User;

    constructor(private usersService:UsersService){}

    ngOnInit(): void {
    

      this.loadComponent()
       
    }

    loadComponent(){

      this.usersService.getCurrentUser().subscribe(currentUserFound => this.currentUser = currentUserFound)

    }
    


}

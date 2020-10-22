import { Component } from '@angular/core';
import { User } from './Models/user';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

  currentUser:User;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  loadComponent(){

    this.userService.getCurrentUser().subscribe(userFound =>{
        
      this.currentUser = userFound
      console.log(userFound)
    })

  }

  logoutUser(){

    sessionStorage.removeItem("currentUser")
    console.log(sessionStorage)
    alert("vous vous êtes déconnecté")
    this.loadComponent()

  }
  loginUser(){


  }
}

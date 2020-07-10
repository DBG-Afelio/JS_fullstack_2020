import { Component, OnInit } from '@angular/core';
import { UsersListService } from 'src/app/services/users-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private userListService:UsersListService,private router:Router) { 
    

  }

  ngOnInit(): void {

    this.userListService.getCurrentUser().subscribe(currentUserFound => {

      if(currentUserFound){

        this.router.navigate([""])

      }     

    })

      
    
    
  }
  onButtonConnexionClick(login:string, password:string){
    console.log(login)
    this.userListService.setLoginUser(login, password).subscribe(isTrue=>{
      if(isTrue){
        this.router.navigate([""]);
      }else{
        alert("Mots de passe ou Login invalide");
      }
    });
    
  }
}

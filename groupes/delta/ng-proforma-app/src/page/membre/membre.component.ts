import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user';
import { UsersService } from 'src/service/users.service';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent implements OnInit {

  membre: User;
  login: string;

  constructor(private usersservice: UsersService) { }

  ngOnInit() {
    this.usersservice.getUserByLogin(this.login).subscribe((membre)=>{
      this.membre = membre;
    })
  }

  affichageMembres(membre:string){
    
  }

}

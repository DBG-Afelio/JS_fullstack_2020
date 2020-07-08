import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user';
import { UsersService } from 'src/service/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent implements OnInit {

  membre: User;
  login: string;

  constructor(private usersservice: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.login = params.get('login')
      this.usersservice.getUserByLogin(this.login).subscribe((membre)=>{
        this.membre = membre;
      });
    })

  }

}

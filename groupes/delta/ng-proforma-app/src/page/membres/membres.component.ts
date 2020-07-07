import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user';
import { UsersService } from 'src/service/users.service';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.css']
})
export class MembresComponent implements OnInit {

  membres: User[];

  constructor(private usersservice: UsersService) { }

  ngOnInit() {
    this.usersservice.getUsers().subscribe((membres)=>{
      this.membres = membres;
    })
  }

}

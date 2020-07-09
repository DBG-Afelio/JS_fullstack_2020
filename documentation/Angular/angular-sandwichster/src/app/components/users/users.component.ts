import { Component, OnInit, Input, Output } from '@angular/core';
import { UserModel } from 'src/app/interfaces/user.model';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() listUsers: User[];
  @Output() 

  constructor() { }

  ngOnInit() {
  }

}

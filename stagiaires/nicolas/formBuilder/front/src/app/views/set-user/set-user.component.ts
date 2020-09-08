import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-set-user',
  templateUrl: './set-user.component.html',
  styleUrls: ['./set-user.component.scss']
})
export class SetUserComponent implements OnInit {

  newUser:User;

  constructor() { }

  ngOnInit(): void {
  }

}

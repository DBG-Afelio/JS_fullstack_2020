import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/userModels/User';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public users: User[];
  
  constructor(
    private userService: UserService
  ) { 
    this.userService.getList().subscribe(list => {
      this.users = list;
    });
  }

  ngOnInit(): void {
  }
}

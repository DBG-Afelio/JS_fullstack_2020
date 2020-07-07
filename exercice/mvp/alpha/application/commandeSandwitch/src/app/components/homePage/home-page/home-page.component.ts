import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';
import { User } from 'src/app/models/userModel/user';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public userList: User[];

  constructor(private userService: UserService) {
    this.userService.getList().subscribe((listRecue) => {
      this.userList = listRecue;
    });
   }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/userModel/user';
import { UserService } from 'src/app/services/userService/user.service';
import { Order } from 'src/app/models/orderModel/order';
import { Product } from 'src/app/models/productModel/Product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form-page',
  templateUrl: './user-form-page.component.html',
  styleUrls: ['./user-form-page.component.css']
})
export class UserFormPageComponent implements OnInit {

  public user: User = null;
  public userId: number = 0;
  public userList: User[] = [];

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { 
    this.userService.getList().subscribe((list) => {
      this.userList = list;
    });
    this.activatedRoute.paramMap.subscribe(params => {
      this.userId = Number(params.get('id'));
      if (this.userId !== 0) {
        this.userService.getUserById(this.userId).subscribe((user) => this.user = user);
      } else {
        this.user = new User('', '', '', '', 0, '', false, false, 0);
      }
      
    })
 
  }

  ngOnInit(): void {
  }

  public saveUserChange(
    familyName: string,
    firstName: string,
    course: string,
    login: string,
    pwd: string,
    credit: number
  ): void {
    this.user.login = login;
    this.user.pwd = pwd;
    this.user.familyName = familyName;
    this.user.firstName = firstName;
    this.user.credit = credit;
    this.user.course = course;
    console.log(this.user);
    if (this.user.id === 0) {
      this.userService.addUser(this.user);
    } else {
      this.userService.updateUser(this.user);
    }
    this.router.navigate(['/admin/utilisateur']);
  }
  
}

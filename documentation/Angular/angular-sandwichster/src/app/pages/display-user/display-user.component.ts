import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/interfaces/user.model';
import { UserService } from 'src/app/services/user.service';
// import { ListUsersComponent } from 'src/app/pages/list-users/list-users.component';
@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})

export class DisplayUserComponent implements OnInit {

  public idUser: number;
  public currentUser: UserModel;
  public userUpdated: UserModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userservice: UserService,
    private router: Router 
  ) {

    this.activatedRoute.paramMap.subscribe((params) => {

      this.idUser = Number(params.get('id'));

      if(this.idUser === 0) {

          this.currentUser = new UserModel(

            "",
            "",
            "",
            "",
            0,
            "",
            false,
            false,
            0
        )

      } else {

        this.userservice.getUserByID(this.idUser).subscribe((elt) => {
          this.currentUser = elt;
        });

      }
    })
  }


  createEvent(user: UserModel){
    this.userservice.createUser(user).subscribe(()=>
    this.router.navigate(["list-users"]) 
    );
  }
  updateEvent(user: UserModel){
    this.userservice.updateUser(user).subscribe(()=>
    this.router.navigate(["list-users"])
  );
  }
  removeEvent(user: UserModel){
    this.userservice.removeUser(user).subscribe(()=>
      this.router.navigate(["list-users"])
    );
  }

  isBanned(value: string) {

    if (value === 'oui') {
      this.currentUser.banni = true;
    } else {
      this.currentUser.banni = false;
    }

  }

  isAdmin(value: string) {

    if (value === 'oui') {
      this.currentUser.admin = true;
    } else {
      this.currentUser.admin = false;
    }

  }

  ngOnInit() {
  }

}

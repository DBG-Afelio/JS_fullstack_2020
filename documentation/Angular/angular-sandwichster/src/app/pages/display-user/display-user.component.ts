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

  private pass1: string = "";
  private pass2: string = "";
  private finalPass: string = "";

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
  
  stockpass1(event: any) {
    return this.pass1 = event.target.value;
  }

  stockpass2(event: any) {
    return this.pass2 = event.target.value;
  }

  checkSamePassword() {

    if(this.pass1 === this.pass2) {
      this.finalPass = this.pass1;
    }
    return this.pass1 === this.pass2;
  }

  isBanned(value: string): any {
    return value === 'oui' ? this.currentUser.banni = true : this.currentUser.banni = false;
  }

  isAdmin(value: string): any {
    return value === 'oui' ? this.currentUser.admin = true : this.currentUser.admin = false;
  }

  removeEvent(user: UserModel){
    this.userservice.removeUser(user).subscribe(()=>
      this.router.navigate(["list-users"])
    );
  }


  updateEvent(user: UserModel){

      if (this.checkSamePassword()) {
          let modifyUser = confirm("Acceptez vous les changements ?");
          if (modifyUser) {
              user.password = this.finalPass;
              this.userservice.updateUser(user).subscribe(() =>
              this.router.navigate(["list-users"])
            );
        } 
      } else {
        alert('Veuillez saisir les memes mots de passes');
      }
  }


  ngOnInit() {
    // this.userservice.updateUser(this.currentUser).subscribe();
  }

}

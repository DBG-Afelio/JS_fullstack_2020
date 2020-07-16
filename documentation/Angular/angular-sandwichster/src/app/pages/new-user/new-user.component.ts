import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/interfaces/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

   idUser: number;
   newUser: UserModel;
   listUsers: UserModel[] = [];
   pass1: string;
   pass2: string;
   finalPass: string;

  constructor(private user: UserService, private router: Router) { 
    this.user.getUsers().subscribe((data) => this.listUsers = data);

    this.newUser = new UserModel(
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

  }

  isNewUserBanned(value) {
     value === 'oui' ? this.newUser.banni = true : this.newUser.banni = false;
  } 

  isNewUserAdmin(value) {
   value === 'oui' ? this.newUser.admin = true : this.newUser.admin = false;
  } 

  showNewUser() { // DEBUG
    console.log(this.newUser);
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

  createUser(user: UserModel) {

    if (this.checkSamePassword()) {
      let confirmCreate = confirm("Etes vous sur de créer un nouvel utilisateur ?");
      if (confirmCreate) {
          user.password = this.finalPass;
          this.user.createUser(user).subscribe(() =>
          this.router.navigate(["list-users"])
        );
    } 
  } else {
    alert('Veuillez saisir les memes mots de passes');
  }

  }

  ngOnInit() {
    // this.user.createUser(this.newUser).subscribe();
  }

}

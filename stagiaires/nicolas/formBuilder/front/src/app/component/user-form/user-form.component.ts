import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() newUser:User;

  constructor() { }

  ngOnInit(): void {

    const newUser = new User(0,"Grandjean","ngrdj@hotmail.fr","Belgian","M",["Dev Fullstack"],new Date(),"gfege","Ngrdj21",[new Date()])
    const newUserDto = {

      id:2,
      lastName:"grege",
      email:"gregreg",
      nationality:"gregreg",
      gender:"gregreg",
      skills:["gregreg"],
      birthdayDate:new Date(),
      password:"gregreg",
      login:"gregreg",
      availabilities:[new Date()],

  }
    console.log(User.fromDto(newUserDto))
    console.log(newUser.toDto())

  }

  onFormSubmit(){

    

  }

}

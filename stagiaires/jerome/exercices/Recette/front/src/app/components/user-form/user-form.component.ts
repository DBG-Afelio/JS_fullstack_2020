import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  public userForm:FormGroup;

  constructor(
    private userService:UserService,
    private formBuilder:FormBuilder,

  ) {
    this.userForm=formBuilder.group({
      name:formBuilder.control('',[Validators.required]),
      login:formBuilder.control('',[Validators.required]),
      password:formBuilder.control('',[Validators.required]),
      email:formBuilder.control('',[Validators.required]),
    })
   }

  ngOnInit(): void {
  }

  onSubmitForm(){

  }
}

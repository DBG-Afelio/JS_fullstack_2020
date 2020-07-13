import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from 'src/model/user';
import { UserDto } from 'src/model/userDTO';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  @Input() user : User = new User('','','','','');
  @Output() create : EventEmitter<UserDto> = new EventEmitter<UserDto>();
  checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      nom: new FormControl(this.user.nom, [Validators.minLength(3),Validators.required,Validators.maxLength(18)]),
      prenom: new FormControl(this.user.prenom, [Validators.minLength(3),Validators.required,Validators.maxLength(18)]),
      login: new FormControl(this.user.login ,[Validators.minLength(4),Validators.required ,Validators.maxLength(15)]), 
      password: new FormControl(this.user.password , [Validators.minLength(8), Validators.required , Validators.maxLength(15)]),
      formation: new FormControl(this.user.formation , [Validators.required])
    });
  }

  get nom() { return this.checkoutForm.get('nom'); }

  get prenom() { return this.checkoutForm.get('prenom'); }

  get login() { return this.checkoutForm.get('login'); }

  get password() { return this.checkoutForm.get('password'); }

  get formation() { return this.checkoutForm.get('formation'); }

  ngOnInit() {
  }

  checkInputEmpty($value:string):boolean {
    return !$value.length as boolean;
  }
  createUser(){
    // if(){
    //   this.create.emit(this.user.toDto());
    // }
  }

  submitForm(data:UserDto) {
    this.checkoutForm.reset();
    console.log(data);
  }
}

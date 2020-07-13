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
      prenom: '',
      login: '',
      password: '',
      formation: ''
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

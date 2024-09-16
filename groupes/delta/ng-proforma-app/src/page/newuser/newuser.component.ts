import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from "@angular/forms";
import { User } from 'src/model/user';
import { UserDto } from 'src/model/userDTO';
import { UsersService } from 'src/service/users.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  @Input() user : User = new User('','','','','');
   
  @Output() create : EventEmitter<UserDto> = new EventEmitter<UserDto>();
  @Output() save: EventEmitter<UserDto> = new EventEmitter<UserDto>();
  checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder , private userService :UsersService) {
    this.checkoutForm = this.formBuilder.group({
      nom: new FormControl(this.user.nom, [Validators.minLength(3),Validators.required,Validators.maxLength(18)]),
      prenom: new FormControl(this.user.prenom, [Validators.minLength(3),Validators.required,Validators.maxLength(18)]),
      login: new FormControl(this.user.login ,[Validators.minLength(4),Validators.required ,Validators.maxLength(15)],this.validateLogin.bind(this)), 
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
    this.checkoutForm = this.formBuilder.group({
      nom: new FormControl(this.user.nom, [Validators.minLength(3),Validators.required,Validators.maxLength(18)]),
      prenom: new FormControl(this.user.prenom, [Validators.minLength(3),Validators.required,Validators.maxLength(18)]),
      login: new FormControl(this.user.login ,[Validators.minLength(4),Validators.required ,Validators.maxLength(15)],this.validateLogin.bind(this)), 
      password: new FormControl(this.user.password , [Validators.minLength(6), Validators.required , Validators.maxLength(20)]),
      formation: new FormControl(this.user.formation , [Validators.required])
    });
  }

  checkInputEmpty($value:string):boolean {
    return !$value.length as boolean;
  }
  createUser(){
    // if(){
       //this.create.emit(this.user.toDto());
       //console.log("Name of user is :",this.checkoutForm.get('nom') );
    // }
  }

  submitForm(data:UserDto, update:boolean) {
    if (!this.checkoutForm.errors){
      if(!update){
        this.create.emit(User.fromDto(data).toDto());
        this.checkoutForm.reset();
      } else {
        this.save.emit(this.user.updateFromDto(data));
      }
    }
    
    
    
  }
  validateLogin(contorl : AbstractControl) : Promise<ValidationErrors|null>| Observable<ValidationErrors|null>{
    return this.userService.getUserByLogin(contorl.value).pipe(
      map(existingUser=>
         existingUser && existingUser.Id !== this.user.Id ?{ notUniqueLogin:true}:null
      ),
        
        catchError(()=> of (null))
    );
  }
  

  }
  


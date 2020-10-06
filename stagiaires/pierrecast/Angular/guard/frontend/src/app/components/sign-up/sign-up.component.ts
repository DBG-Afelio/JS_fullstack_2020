import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { User } from 'src/app/models/userModels/User';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public userForm : FormGroup;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder, 
    private router: Router
  ) {
    this.userForm = this.formBuilder.group({
      username: ['', [ Validators.required ]], //[this.loginValidator.validate]
      email: ['', [ Validators.required, Validators.email ]],
      passwordGroup: this.formBuilder.group({
        password: this.formBuilder.control(''),
        repeat: this.formBuilder.control('')
      }, {
        validators : [ Validators.required, comparePassword('password', 'repeat')]
      }),
      
    });
  }

  ngOnInit(): void {
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    let newUser = new User(
      0,
      formValue['username'],
      formValue['email'],
      'USER',
    );

    this.userService.createUser(newUser, formValue['passwordGroup'].password).subscribe(
      (res) => { 
        this.router.navigateByUrl('/');
      }, 
      (error) => {
        
      });
      
    console.log('Données du formulaire : ', this.userForm.value);
    
  }
}

export function comparePassword(field1: string, field2: string): ValidatorFn {
  return (control) => {
    const field1Control = control.get(field1) as FormControl;
    const field2Control = control.get(field2) as FormControl;
       
    // Is not valid. 
    if (!field1Control.value || !field2Control.value) {
      return {
        'required': {
            message: 'Le mot de passe est requis'
        }
      };
    }

    if (field1Control.value !== field2Control.value) {
      return {
          'comparePassword': {
              message: 'Les mots de passe sont différents'
          }
      };
    }
    
    // Is valid.
    return null;
 
   };
 }
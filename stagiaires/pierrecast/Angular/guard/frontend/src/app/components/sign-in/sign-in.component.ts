import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public loginForm : FormGroup;
  constructor(private authService: AuthService, 
    private formBuilder: FormBuilder,
    private router: Router    ) {
      this.loginForm = this.formBuilder.group({
        username: ['', [ Validators.required ] ], 
        password: ['', [ Validators.required ] ], 
      });
     }

  ngOnInit(): void {
  }

  onSubmitForm() {
    const formValue = this.loginForm.value;
    this.authService.login(
      formValue['username'], 
      formValue['password']
    ).subscribe(
      (res) =>  {
        this.router.navigateByUrl('/admin');
      }, 
      (error) => {
        alert('Wrong credentials');
        throw new Error(error.message);
      }
    );
  }
}
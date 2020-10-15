import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {
  public loginForm : FormGroup;
  private subscription : Subscription;

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

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSubmitForm() {
    const formValue = this.loginForm.value;
    this.authService.login(
      formValue['username'], 
      formValue['password']
    ).subscribe(
      () =>  {
        this.router.navigateByUrl('/admin');
      }, 
      (error: Error) => {
        alert('Wrong credentials');
        throw new Error(error.message);
      }
    );
  }

  signInGoogle(): void {
    this.subscription = this.authService.loginByGoogle().subscribe((user) => {
      this.router.navigateByUrl('/admin');
    });
  }
}

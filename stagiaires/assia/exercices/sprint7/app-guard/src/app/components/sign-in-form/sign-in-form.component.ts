import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscribable, Subscription } from 'rxjs';
import { Article } from 'src/app/models/Article/Article.model';
import { Credentials } from 'src/app/models/Credentials/Credentials.model';
import { User } from 'src/app/models/User/User.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css'],
})
export class SignInFormComponent implements OnInit, OnDestroy {
  public credentialsForm: FormGroup;
  // public connectedUserSub: Subscription;
  // public connectedUser: User = null;

  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    public router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.credentialsForm = _formBuilder.group({
      login: _formBuilder.control('', [Validators.required]),
      password: _formBuilder.control('', [Validators.required]),
    });


    let popupListener = window.addEventListener('message', (userJwt) => {
      console.log('userJwt : ', userJwt);
      //save this token in sessionStorage and renav to Private page
    });
  }

  ngOnInit(): void {
    // this.connectedUserSub = this.authService.currentUser.subscribe((value) => {
    //   this.connectedUser = value;
    //   console.log('ngOnInit connected USER : ', value);
    // });
  }

  ngOnDestroy(): void {
    // this.connectedUserSub.unsubscribe();
  }

  public openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  public onSubmitForm(): void {
    if (this.credentialsForm.valid) {
      const cred = new Credentials(
        this.credentialsForm.value.login,
        this.credentialsForm.value.password
      );

      this.authService
        .connectUser(cred)
        .subscribe(
          (u) => this.router.navigate([`/private/${u.id}`])
          // (u) => this.router.navigate([`/`])
        );
    }
  }

  public initGoogleAuth() {
    // this.authService.initGoogleAuth().subscribe();
    // window.location.href = 'http://localhost:3000/auth/google';

    window.open('http://localhost:3000/auth/google', 'mywindow', "location=1,status=1,scrollbars=1, width=800,height=800");

  }


}


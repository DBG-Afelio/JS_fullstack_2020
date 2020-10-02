import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { compareFields } from 'src/app/custom-validators/compareFields';
import { Credentials } from 'src/app/models/Credentials/Credentials.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

    public credentialsForm: FormGroup;

    constructor(
        private _formBuilder: FormBuilder,
        private authService: AuthService,
        public router: Router,
        private _snackBar: MatSnackBar,
    ) { 
        this.credentialsForm = _formBuilder.group({
            login: _formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
            passwordGroup: _formBuilder.group({
                password : _formBuilder.control('', [Validators.required, Validators.minLength(6)]),
                passwordRetyped: _formBuilder.control('', [Validators.required, Validators.minLength(6)]),
                },
                { validators : [compareFields('password', 'passwordRetyped')] }
            ),
        });
    }

    ngOnInit(): void {}

    public onSubmitForm(): void {
        if(this.credentialsForm.valid){
            console.log('credentials submitted for new subscription');
            const cred = new Credentials(
                this.credentialsForm.value.login,
                this.credentialsForm.get('passwordGroup.password').value
            )
            this.authService.registerNewUser(cred).subscribe(
                () => {
                    this.router.navigate(['']);
                },
                (error: HttpErrorResponse) => {
                    console.log('erreur subscription', error.message);
                    // handled by errorInterceptor
                }
            );
        }
    }

    public openSnackBar(message: string, action?: string) {
        this._snackBar.open(message, action, {
            duration: 3000,
        });
    }

}
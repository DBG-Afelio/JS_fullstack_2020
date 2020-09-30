import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/models/Credentials/Credentials.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {
    public credentialsForm: FormGroup;
    public areCredentialsWrong: boolean = false;


    constructor(
        private _formBuilder: FormBuilder,
        private authService: AuthService,
        public router: Router,
        private _snackBar: MatSnackBar,
    ) { 
        this.credentialsForm = _formBuilder.group({
            login: _formBuilder.control('',[Validators.required]),
            password : _formBuilder.control('', [Validators.required]),
        });
    }

    ngOnInit(): void {}

    public openSnackBar(message: string, action?: string) {
        this._snackBar.open(message, action, {
            duration: 3000,
        });
    }

    public onSubmitForm(): void {
        if(this.credentialsForm.valid){
            console.log('credentials submitted for sign-in');

            const cred = new Credentials(
                this.credentialsForm.value.login,
                this.credentialsForm.value.password
            );
            
            this.authService.connectUser(cred).subscribe(
                (res) => {
                    this.areCredentialsWrong = false;
                    this.router.navigate(['/private']);
                    this.openSnackBar(
                        'Connection succeeded !');
                },
                (error: HttpErrorResponse) => {
                    this.areCredentialsWrong = true ;
                    console.log('erreur connection : ', error);
                    this.openSnackBar('Login and/or Password incorrect')
                    // if(error.status === 401) {
                    //     this.openSnackBar(
                    //         'Login and/or Password incorrect');
                    // }
                },
                
            );

        }
    }


}



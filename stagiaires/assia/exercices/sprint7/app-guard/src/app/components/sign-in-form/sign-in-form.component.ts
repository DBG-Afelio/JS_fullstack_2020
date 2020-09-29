import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { compareFields } from 'src/app/custom-validators/compareFields';
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
    ) { 
        this.credentialsForm = _formBuilder.group({
            login: _formBuilder.control('',[Validators.required]),
            password : _formBuilder.control('', [Validators.required]),
        });
    }

    ngOnInit(): void {}

    public onSubmitForm(): void {
        if(this.credentialsForm.valid){
            console.log('credentials submitted for sign-in');
            const cred = new Credentials(
                this.credentialsForm.value.login,
                this.credentialsForm.value.password
            );
            this.authService.connectUser(cred).subscribe(
                () => {
                    this.areCredentialsWrong = false;
                    this.router.navigate(['/private']);
                },
                (error: HttpErrorResponse) => {
                    this.areCredentialsWrong = true ;
                    console.log('erreur connection : ', error.message);
                    if(error.status === 401) {

                    }
                    
                }
            );
        }
    }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

    @Output()
    public registerEv = new EventEmitter<Credentials>();
    public currentUserLogin: string = '';
    public credentialsForm: FormGroup;

    constructor(
        private _formBuilder: FormBuilder,
        private authService: AuthService,
        public router: Router,
    ) { 
        this.authService.userLogin.subscribe((value) => this.currentUserLogin = value);
        this.credentialsForm = _formBuilder.group({
            login: _formBuilder.control(
                '',
                [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
            passwordGroup: _formBuilder.group({
                password : _formBuilder.control(
                    '',
                    // [Validators.required, Validators.minLength(6)]
                ),
                passwordRetyped: _formBuilder.control(
                    '',
                    // [Validators.required, Validators.minLength(6)]
                ),
            },
            {
                validators : [compareFields('password', 'passwordRetyped')]
            }),
        });
    }

    ngOnInit(): void {}

    public onSubmitForm(): void {
        if(this.credentialsForm.valid){
            console.log('credentials submitted for new subscription')
            this.registerEv.emit()
        }
    }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

    public currentUserLogin: string = '';
    constructor(
        private authService: AuthService,
        public router: Router,
    ) { 
        this.authService.userLogin.subscribe((value) => this.currentUserLogin = value)
    }

    ngOnInit(): void {
    }

}

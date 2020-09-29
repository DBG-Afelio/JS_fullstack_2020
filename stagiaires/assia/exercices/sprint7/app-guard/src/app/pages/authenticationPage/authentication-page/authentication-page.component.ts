import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/models/Credentials/Credentials.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.css']
})
export class AuthenticationPageComponent implements OnInit {

        public currentUserLogin: string = '';
        constructor(
            private authService: AuthService,
            public router: Router,
        ) { 
            this.authService.userLogin.subscribe((value) => this.currentUserLogin = value)
        }

    ngOnInit(): void {
    }

    register(credentials: Credentials): void {
        console.log('credentials : ', credentials)
        this.authService.registerNewUser(credentials).subscribe(() => this.router.navigate(['/private']));
    }

    connect(credentials: Credentials): void {
        this.authService.connectUser(credentials).subscribe(
            () => this.router.navigate(['/private']),
            (error: HttpErrorResponse) => console.log(error.message)
        );
    }

}

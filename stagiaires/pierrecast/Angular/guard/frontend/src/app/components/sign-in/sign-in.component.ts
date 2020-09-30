import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public loginForm : FormGroup;
  constructor(private authService: AuthService, 
    private formBuilder: FormBuilder
    ) {
      this.loginForm = this.formBuilder.group({
        username: ['', [ Validators.required ] ], 
        password: ['', [ Validators.required ] ], 
      });
     }

  ngOnInit(): void {
  }

  onSubmitForm() {
    const formValue = this.loginForm.value;
    this.authService.login(formValue['username'], formValue['password']).subscribe(console.log);
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    @Output()
    public loginEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  public sendLogin(login: string): void {
      this.loginEvent.emit(login);
  }
}

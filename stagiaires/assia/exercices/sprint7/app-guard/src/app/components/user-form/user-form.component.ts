import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RolesEnum } from 'src/app/enum/roles.enum';
import { User } from 'src/app/models/User/User.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  @Input()
  user: User = null;
  @Output()
  userInfoChange: EventEmitter<User> = new EventEmitter();
  public userForm: FormGroup;
  public rolesList: any[] = Object.entries(RolesEnum);

  constructor(private _formBuilder: FormBuilder) {
    this.userForm = _formBuilder.group({
      firstName: _formBuilder.control('', [
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      lastName: _formBuilder.control('', [
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      email: _formBuilder.control('', Validators.email),
      login: _formBuilder.control(''),
      isBlocked: _formBuilder.control({ value: '', disabled: true }),
      upgradeRequest: _formBuilder.control(''),
    });
  }

  ngOnInit(): void {
    this._initForm(this.user);
  }

  private _initForm(user: User): void {
    this.userForm.get('firstName').setValue(user?.firstName);
    this.userForm.get('lastName').setValue(user?.familyName);
    this.userForm.get('email').setValue(user?.email);
    this.userForm.get('login').setValue(user?.login);
    this.userForm.get('isBlocked').setValue(user?.isBlocked);
    this.userForm
      .get('upgradeRequest')
      .setValue(user?.authorAccessRightsRequested);
  }

  public submitForm(): void {
    if (this.userForm.valid) {
      console.log('user modif submitted');
      this.user.firstName = this.userForm.value.firstName;
      this.user.familyName = this.userForm.value.lastName;
      this.user.email = this.userForm.value.email;
      this.user.login = this.userForm.value.login;
      this.user.isBlocked = this.userForm.value.isBlocked;
      this.user.authorAccessRightsRequested = this.userForm.value.upgradeRequet;
      console.log('updated user : ', this.user);

      this.userInfoChange.emit(this.user);
    }
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/UserService/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {

  public userList: User[];
  public userSubscription: Subscription;
  public userForm: FormGroup;
  public pwdForm: FormGroup;
  public freeTimeForm : FormGroup;
  

  constructor(
    private userService: UserService,
    private formB: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();

    this.userSubscription = this.userService.userListSubject.subscribe(
      (userListReceived) => this.userList = userListReceived);
  }

  ngOnDestroy(): void{
    this.userSubscription.unsubscribe();
  }

  public initForm(): void{
    this.pwdForm = this.formB.group({
      pwd: '',
      pwdBis: '',
    });
    this.freeTimeForm = this.formB.group({
      freeFrom: '',
      freeUpTo: '',
    })
    this.userForm = this.formB.group({
      lastName: ['', Validators.required, Validators.minLength(1), Validators.maxLength(30)],
      firstName: ['', Validators.minLength(1), Validators.maxLength(30)],
      email: ['', Validators.required, Validators.email],
      nation: ['', Validators.required],
      gender:'',
      job: '',
      dob: '',
      pwdGrp: this.pwdForm,
      login: '',
      freeGrp: this.freeTimeForm,

    })
  }

  public onSubmitForm(): void{
    const userFormValue = this.userForm.value;
    const newUser = new User(
      userFormValue['lastName'],
      userFormValue['email'],
      userFormValue['nation'],
      userFormValue['firstName'],
    );
    this.userService.addUser(newUser);
  }
}

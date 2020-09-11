import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, OnDestroy {

  //   public userList: User[];
  //   public userSubscription: Subscription;
  public currentUser: User = new User('', '', '','',[],new Date(),'','');
  public userForm: FormGroup;
  public nationList: string[] = [
    'Belgique',
    'France',
    'Italie',
    'Espagne'
  ];
  public genderList: string[] = ['Homme', 'Femme', 'Trans', 'Autre'];
  
    constructor(
      // private userService: UserService,
      public formB: FormBuilder,
    ) { }
  
    ngOnInit(): void {
      this.initForm();
  
      // this.userSubscription = this.userService.userListSubject.subscribe(
      //   (userListReceived) => this.userList = userListReceived);
    }
  
    ngOnDestroy(): void{
      // this.userSubscription.unsubscribe();
    }
  
  public initForm(): void {
      
    this.userForm = this.formB.group({

      lastName : new FormControl(
        this.currentUser.lName,
        [Validators.required, Validators.minLength(3), Validators.maxLength(8)],
      ),

      firstName : new FormControl(
        this.currentUser.fName,
        [Validators.minLength(3), Validators.maxLength(8)],
      ),

      email: new FormControl(
        this.currentUser.email,
        [Validators.required, Validators.email],
      ),

      nation: new FormControl(
        this.currentUser.nation,
        [Validators.required],
      ),

      gender: new FormControl(
        this.currentUser.gender,
        [Validators.required],
       ),





      // pwdGrp: this.formB.group({
      //   pwd: this.pwd.control(),
      //   pwdBis: this.pwdBis.control(),
      // }),

      // login: '',

      // freeGrp: this.formB.group({
      //   freeFrom: this.freeFrom.control(),
      //   freeUpTo: this.freeUpTo.control(),
      // }),
        
    });
  }
  
    public onSubmitForm(): void{
      const userFormValue = this.userForm.value;
      console.log(userFormValue);
      // const newUser = new User(
      //   userFormValue['lastName'],
      //   userFormValue['firstName'],
      //   userFormValue['email'],
      //   userFormValue['nation'],
        
      // );
      // this.userService.addUser(newUser);
    }
  }
  

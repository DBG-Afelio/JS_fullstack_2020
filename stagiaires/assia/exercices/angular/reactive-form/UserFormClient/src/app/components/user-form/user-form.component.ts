import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
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
  public loginList: string[] = ['login1', 'LOGIN2', 'LogIN3', '_login-4'];
  public limits = {
    firstNameMin: 3,
    lastNameMin : 3,
    firstNameMax : 10,
    lastNameMax : 10,
    loginMin : 6,
  };
  public strOnlyPattern: string = '[a-zA-Z ]*';
  public jobList: Array<any> = [
    { id: 1, title: 'Developpeur FrontEnd', group: 'A' }, 
    { id: 2, title: 'Developpeur BackEnd', group: 'A' },
    { id: 3, title: 'Integrateur', group: 'A' },
    { id: 4, title: 'UX/UI', group: 'A' }, 
    { id: 5, title: 'Rien de tout cela', group: 'B' },
  ];
   

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
        [
          Validators.required, 
          Validators.minLength(this.limits.lastNameMin), 
          Validators.maxLength(this.limits.lastNameMax),
          Validators.pattern(this.strOnlyPattern),
        ],
      ),

      firstName : new FormControl(
        this.currentUser.fName,
        [
          Validators.minLength(this.limits.firstNameMin),
          Validators.maxLength(this.limits.firstNameMax),
          Validators.pattern(this.strOnlyPattern),
        ],
      ),

      email: new FormControl(
        this.currentUser.email,
        [
          Validators.required,
          Validators.email],
      ),

      nation: new FormControl(
        this.currentUser.nation,
        [
          Validators.required,
        ],
      ),

      gender: new FormControl(
        this.currentUser.gender,
        [
          Validators.required,
        ],
      ),

      jobs: new FormArray(
        [],
        Validators.required,
        this.jobsCustomValidator(),
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
    this.addJobsCheckBoxes();

  }

  public get jobsFormArray():FormArray{
    return this.userForm.get('jobs') as FormArray;
  }
  public onSubmitForm(): void {

    const userFormValue = this.userForm.value;
    const selectedJobs = userFormValue.jobs
    .map( (checked: boolean, i: number) => checked ? this.jobList[i].title : null)
    .filter( (val: any) => val !== null);

    console.log(userFormValue);
    // const newUser = new User(
    //   userFormValue['lastName'],
    //   userFormValue['firstName'],
    //   userFormValue['email'],
    //   userFormValue['nation'],
    //   selectedJobs,
      
    // );
    // this.userService.addUser(newUser);
  }

  private addJobsCheckBoxes():void{
    this.jobList.forEach(() => this.jobsFormArray.push(new FormControl(false)));
    console.log('jobsFormArray : ', this.jobsFormArray);
  }

  public jobsCustomValidator():any{

  }


  
}

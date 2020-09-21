import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, ValidatorFn, AbstractControl } from '@angular/forms';
import { AreFieldsEqual } from 'src/app/custom-validators/AreFieldsEqual';
import { User } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, OnDestroy {

  //   public userList: User[];
  //   public userSubscription: Subscription;
  public currentUser: User = new User('', '', '', '', [], new Date(), 'passpass', '');
  public userForm: FormGroup;
  public nationList: Array<string>  = [
    'Belgique',
    'France',
    'Italie',
    'Espagne'
  ];
  public genderList: Array<string> = ['Homme', 'Femme', 'Trans', 'Autre'];
  public loginList: Array<string> = ['login1', 'LOGIN2', 'LogIN3', '_login-4'];
  public limits = {
    firstNameMin: 3,
    lastNameMin : 3,
    firstNameMax : 10,
    lastNameMax : 10,
    loginMin : 6,
    pwdMin: 6,
    pwdMax: 10
  };
  public strOnlyPattern = '[a-zA-Z ]*';
  public digitsOnlyPattern = '[0-9 ]*';
  public alphaNumPattern = '[a-zA-Z0-9 ]*';
  public telpattern = '[0-9 ]*'; // a modifier bien sur

  public jobList: Array<any> = [
    { id: 0, title: 'Tout selectionner', group: 'all', selected: false },
    { id: 1, title: 'Developpeur FrontEnd', group: 'option', selected: false },
    { id: 2, title: 'Developpeur BackEnd', group: 'option', selected: false},
    { id: 3, title: 'Integrateur', group: 'option' , selected: true},
    { id: 4, title: 'UX/UI', group: 'option' , selected: false},
    { id: 5, title: 'Rien de tout cela', group: 'none' , selected: false},
  ];


    constructor(
      // private userService: UserService,
      private _formB: FormBuilder,
    ) { }

    ngOnInit(): void {
      this.initForm();
      console.log('longueur address = ', this.addressArray.controls.length );

      // this.userSubscription = this.userService.userListSubject.subscribe(
      //   (userListReceived) => this.userList = userListReceived);
    }

    ngOnDestroy(): void{
      // this.userSubscription.unsubscribe();
    }


  public initForm(): void {
    // console.log('longueur address = ', this.addressArray.controls.length );

    this.userForm = this._formB.group({

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

      address: new FormArray([this.addAddressGroup()]),

      email: new FormControl(
        this.currentUser.email,
        [Validators.required, Validators.email],
      ),

      tel: new FormControl(
        '',
        [Validators.required, Validators.pattern(this.telpattern)],
      ),

      nation: new FormControl(
        this.currentUser.nation,
        [Validators.required],
      ),

      dob: new FormControl(
        this.currentUser.dob,
        [Validators.required,
          // custom Date Validator + validate age > 18
        ]
      ),

      gender: new FormControl(
        this.currentUser.gender,
        [Validators.required],
      ),

      jobs: this._formB.array(this.jobList.map(job => job.selected)),

      // jobs: new FormArray(
      //   [],
      //   Validators.required,
      //   this.jobsCustomValidator(),
      //   ),

      pwdGrp: this._formB.group({
        passwd: this._formB.control(
          this.currentUser.pwd,
          [Validators.required,
            Validators.minLength(this.limits.loginMin),
          Validators.maxLength(this.limits.pwdMax)]),
        passwdRetyped: this._formB.control(
          this.currentUser.pwd,
          [Validators.required]),
      },
      {
        validators: [AreFieldsEqual('passwd', 'passwdRetyped')]
      }),

      // login: '',

      // freeGrp: this._formB.group({
      //   freeFrom: this.freeFrom.control(),
      //   freeUpTo: this.freeUpTo.control(),
      // }),

    });
    // this.addJobsCheckBoxes();

  }

  public get pwdGrp(): FormGroup {
    return this.userForm.get('pwdGrp') as FormGroup;
  }


  // -------- address related START --------------------------
  public get addressArray(): FormArray {
    return this.userForm.get('address') as FormArray;
  }

  public addAddressGroup(): FormGroup {
    return this._formB.group({
      primaryFlag: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required, Validators.pattern(this.alphaNumPattern)]),
      city: new FormControl('', [Validators.required, Validators.pattern(this.strOnlyPattern)]),
      zipcode: new FormControl('', [Validators.required, Validators.pattern(this.digitsOnlyPattern)]),
      country: new FormControl('', [Validators.required, Validators.pattern(this.strOnlyPattern)]),
    });
  }

  public clickAddAddress(): void {
    this.addressArray.push(this.addAddressGroup());
    console.log('longueur address = ', this.addressArray.controls.length );
  }

  public clickRemoveAddress(indexAddress: number): void {
    this.addressArray.removeAt(indexAddress);
    console.log('longueur address = ', this.addressArray.controls.length );
  }

// -------- address related END --------------------------

  // public get jobsFormArray(): FormArray{
  //   return this.userForm.get('jobs') as FormArray;
  // }



  public onSubmitForm(): void {

    console.log(this.userForm.controls.titres);
    // const userFormValue = this.userForm.value;
    // const selectedJobs = userFormValue.jobs
    // .map( (checked: boolean, i: number) => checked ? this.jobList[i].title : null)
    // .filter( (val: any) => val !== null);

    // console.log(userFormValue);
    // const newUser = new User(
    //   userFormValue['lastName'],
    //   userFormValue['firstName'],
    //   userFormValue['email'],
    //   userFormValue['nation'],
    //   selectedJobs,

    // );
    // this.userService.addUser(newUser);
  }

  // private addJobsCheckBoxes(): void{
  //   this.jobList.forEach(() => this.jobsFormArray.push(new FormControl(false)));
  //   console.log('jobsFormArray : ', this.jobsFormArray);
  // }

  // public jobsCustomValidator(): any{

  // }

}

import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, AsyncValidatorFn, FormArray } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() newUser:User;
  public userForm: FormGroup;


  constructor(formBuilder:FormBuilder) {

      this.userForm = formBuilder.group({
        lastName : formBuilder.control('',[Validators.required, Validators.minLength(2)]),
        firstName : formBuilder.control(''),
        email : formBuilder.control('',Validators.required),
        nationality : formBuilder.control('',Validators.required),
        gender : formBuilder.control('Other',Validators.required),
        skills : formBuilder.group({

          frontDev : formBuilder.control(false),
          backDev : formBuilder.control(false),
          integrator : formBuilder.control(false),
          uxui : formBuilder.control(false),
          nothing : formBuilder.control(true),

        },Validators.required),
        birthdayDate : formBuilder.control('',Validators.required),
        password : formBuilder.control('',Validators.required),
        checkPassword : formBuilder.control('',Validators.required),
        login : formBuilder.control('',Validators.required),
        availabilities : formBuilder.group({

          startDate : formBuilder.control(''),
          endDate : formBuilder.control('')

        }),

      })

  }

  ngOnInit(): void {

    const newUser = new User(0,"Grandjean","ngrdj@hotmail.fr","Belgian","M",["Dev Fullstack"],new Date(),"gfege","Ngrdj21",[new Date()])
    const newUserDto = {

      id:2,
      lastName:"grege",
      email:"gregreg",
      nationality:"gregreg",
      gender:"gregreg",
      skills:["gregreg"],
      birthdayDate:new Date(),
      password:"gregreg",
      login:"gregreg",
      availabilities:[new Date()],

  }
    console.log(User.fromDto(newUserDto))
    console.log(newUser.toDto())

  }

  onFormSubmit(){
    console.log(this.userForm.value)

    const formValues = this.userForm.value;

    this.newUser = new User(

      0,
      formValues.lastName,
      formValues.email,
      formValues.nationality,
      formValues.gender,
      formValues.skills,
      formValues.birthdayDate,
      formValues.password,
      formValues.login,
      Object.values(formValues.availabilities),
      formValues.firstName

      )
      console.log(this.newUser)


  }

}

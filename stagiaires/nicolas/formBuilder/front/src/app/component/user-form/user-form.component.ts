import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, ViewChildren } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, AsyncValidatorFn, FormArray } from '@angular/forms';
import { Demonym } from 'src/app/models/interfaces/demonym.interface';
import { Skill } from 'src/app/models/interfaces/skill.interface';
import { compareGenericfields } from './validators/validators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, OnChanges {

  @Input() newUser:User;
  @Input() demonyms:Demonym[];
  @Input() skills:Skill[];

  public userForm: FormGroup;

  @Output() createUser:EventEmitter<User> = new EventEmitter()


  constructor(private formBuilder:FormBuilder) {

    this.loadComponent()

  }

  ngOnInit(): void {


  }

  ngOnChanges(changes: SimpleChanges) {

    // changes.prop contains the old and the new value...

    if(changes.skills && !changes.skills.firstChange){
      
      this.generateForm()

    }

  }
  isLoaded(img:HTMLImageElement){

    return img.onload

  }
  loadComponent(){


  }

  generateForm(){

    this.userForm = this.formBuilder.group({
      lastName : this.formBuilder.control('',[Validators.required, Validators.minLength(1),Validators.maxLength(30)]),
      firstName : this.formBuilder.control('',[Validators.minLength(1),Validators.maxLength(30)]),
      email : this.formBuilder.control('',[Validators.required,Validators.email]),
      nationality : this.formBuilder.control('',Validators.required),
      gender : this.formBuilder.control('Other',Validators.required),

      skillsForm : this.formBuilder.array(this.createSkillsController(this.skills),Validators.required),

      birthdayDate : this.formBuilder.control('',Validators.required),
      passwordValidation: this.formBuilder.group({

        password : this.formBuilder.control('',[Validators.required,Validators.minLength(6)]),
        passwordConfirm : this.formBuilder.control('',Validators.required),

      },{validators:[compareGenericfields('password','passwordConfirm')]}),
      
      login : this.formBuilder.control('',Validators.required),
      availabilities : this.formBuilder.group({

        startDate : this.formBuilder.control(''),
        endDate : this.formBuilder.control('')

      }),

    })
    
    
  }
  
  
  createSkillsController(skillsArray:Skill[]){

    const skillControllers = []

    skillsArray.forEach(skill => {

      skillControllers.push(new FormControl(false))

    })

    return skillControllers

  }

  onFormSubmit(){

    const formValues = this.userForm.value;

    
      console.log(this.createUserWithForm(formValues))
   this.createUser.emit(this.createUserWithForm(formValues))

  }

  get skillsForm(){
    return this.userForm.get('skillsForm') as FormArray
  }
  getSkillsNameChecked(booleanArray:boolean[]):string[]{

    const checkedSkills = [];
    for(let i = 0 ; i < booleanArray.length;i++){

      if(booleanArray[i]===true){
        
        checkedSkills.push(this.skills[i].name)

      }

    }
    return checkedSkills
  }
  createUserWithForm(form:any):User{

    return new User(

      0,
      form.lastName,
      form.email,
      form.nationality,
      form.gender,
      this.getSkillsNameChecked(form.skillsForm),
      form.birthdayDate,
      form.passwordValidation.password,
      form.login,
      Object.values(form.availabilities),
      form.firstName

    )

  }

}

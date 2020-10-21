import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, AsyncValidatorFn, FormArray } from '@angular/forms';
import { Step } from 'src/app/Models/step';
import { Tag } from '../../models/tag';
import { RecipeService } from '../../Services/recipe.service';
import { TagService } from '../../Services/tag.service'



@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  public recipeForm:FormGroup;
  public tags:Tag[]=[];
  public steps:Step[]=[];

  constructor(
    private recipeService:RecipeService,
    private formBuilder:FormBuilder,
    private tagService:TagService,
  ) { 

    this.recipeForm=formBuilder.group({

      name:formBuilder.control('',[Validators.required]),
      preparationTime:formBuilder.control('',[Validators.required]),
      cookingTime:formBuilder.control('',[Validators.required]),
      level:formBuilder.control('',[Validators.required]),
      people:formBuilder.control('',[Validators.required]),
      picture:formBuilder.array([]),
      step:formBuilder.array([]),
      ingredient:formBuilder.array([]),
      tag:formBuilder.array([])

    })
  }

  ngOnInit(): void {
    this.tagService.getAllTags().subscribe((tags)=>{
      tags.forEach((tag)=>{
        this.tags.push(tag)
      })
    })
  }

  onButtonPushStep(){
    this.steps.push(this.recipeForm.controls.step.value)
    this.recipeForm.controls.step.setValue('');
  }

  onSubmitForm(){

  }

}

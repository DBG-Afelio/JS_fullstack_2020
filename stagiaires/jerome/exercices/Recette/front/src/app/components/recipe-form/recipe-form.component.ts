import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, AsyncValidatorFn, FormArray } from '@angular/forms';
import { Ingredient } from 'src/app/Models/ingredient';
import { Picture } from 'src/app/Models/picture';
import { Recipe } from 'src/app/Models/recipe';
import { Step } from 'src/app/Models/step';
import { Tag } from '../../Models/tag';
import { RecipeService } from '../../Services/recipe.service';
import { TagService } from '../../Services/tag.service'
import { IngredientService } from '../../Services/ingredient.service'



@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit, OnChanges {

  public recipeForm:FormGroup;
  @Output() public createRecipe:EventEmitter<Recipe>=new EventEmitter();
  @Input() public tags:Tag[]=[];
  public steps:Step[]=[];
  @Output() public changeWord:EventEmitter<string>=new EventEmitter();
  @Input() public ingredientsFound:Ingredient[]=[];
  @Output() public postNewIngredient:EventEmitter<Ingredient>=new EventEmitter();
  public ingredientsRecipe: Ingredient[]=[];
  public pictures:Picture[]=[];
  public window:boolean=false;


  constructor(
    private formBuilder:FormBuilder,
  ) { 

    this.recipeForm=formBuilder.group({

      name:formBuilder.control('',[Validators.required]),
      preparationTime:formBuilder.control('',[Validators.required]),
      cookingTime:formBuilder.control('',[Validators.required]),
      level:formBuilder.control('',[Validators.required]),
      people:formBuilder.control('',[Validators.required]),
      picture:formBuilder.control('',[]),
      step:formBuilder.control('',[Validators.required]),
      ingredient:formBuilder.control('',[Validators.required]),
      tag:formBuilder.array([])

    })
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes)
   if(changes.tags?.firstChange){

      this.tags.forEach(()=>{

        (this.recipeForm.get('tags')as FormArray).controls.push(new FormControl(false))
      
      });
   }
  }

  onButtonPushStep(){

    this.steps.push(new Step(this.recipeForm.controls.step.value));
    this.recipeForm.controls.step.setValue('');
  }

  onClickOpenWindow(){
    this.window=true;
  }
  onClickCloseWindow(){

    this.window=false;


  }

  createNewIngredient(ingredient){

    this.postNewIngredient.emit(ingredient)
    this.onClickCloseWindow()

  }

  private getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  getWord(word:string){
    this.changeWord.emit(word)
  }

  

  getPicture(filesArray:FileList){
    for (let i = 0; i < filesArray.length; i++) {
      this.getBase64(filesArray.item(i)).then(

        data => { this.pictures.push(new Picture(data.toString()))}

      )
    }
    
  }

  getElementFormControl(formControl:FormControl[],elements:any[]){
    const array=[];
    elements.forEach((element,index)=>{
      if(formControl[index].value===true){
        array.push(element);
      }
    })
    return array
  }

  onSubmitForm(){
    if(this.recipeForm.valid){
      const newRecipe= new Recipe(

        this.recipeForm.value.name,
      this.recipeForm.value.preparationTime,
      this.recipeForm.value.cookingTime,
      this.recipeForm.value.level,
      this.recipeForm.value.people,
      this.recipeForm.value.evaluation,
      this.pictures,
      this.getElementFormControl(this.recipeForm.controls.tags['controls'],this.tags),
      this.steps,
      this.ingredientsRecipe
      

      
      );
      this.createRecipe.emit(newRecipe);
    }else console.log('Formulaire Invalide')
  }

}

import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../Services/recipe.service';
import { TagService } from '../../Services/tag.service';
import { IngredientService } from '../../Services/ingredient.service';
import { Tag } from '../../Models/tag';
import { Recipe } from '../../Models/recipe';
import { Ingredient } from '../../Models/ingredient';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public tags:Tag[]=[];
  public ingredients:Ingredient[]=[]


  constructor( 
    private recipeService:RecipeService,
    private tagService:TagService,
    private ingredientService:IngredientService,

    ) { }

  ngOnInit(): void {

    this.getAllTags()
  }

  getAllTags(){

    this.tagService.getAllTags().subscribe((tags)=>{
      tags.forEach((tag)=>{
        this.tags.push(tag)

      })
    })
  }

  searchIngredient(word:string){

    
    if(word.length>3){
      this.ingredientService.getIngredientsByWord(word).subscribe((getIngredients)=>{
        this.ingredients=getIngredients
      })
    }else if(word.length===3){

      this.ingredients=[]
      
    }

  }

  createNewIngredient(ingredient){

    this.ingredientService.createIngredient(ingredient)
  }

  createNewRecipe(recipe:Recipe){
    this.recipeService.createRecipe(recipe).subscribe((recipe)=>console.log(recipe))

  }



}

import { Component, OnInit } from '@angular/core';
import { Picture } from 'src/app/Models/picture';
import { Recipe } from 'src/app/Models/recipe';
import { RecipeService } from 'src/app/Services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  public recipes:Recipe[];
  public pictures:Picture[];

  constructor(public recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe((recipes)=>{
      recipes.forEach((recipe)=>{
        this.recipes.push(recipe)
      })
    })
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Recipe} from '../Models/recipe'
import { map } from 'rxjs/operators';
import { CreateRecipeDto } from '../Models/Dtos/RecipeDto/create-recipe.dto';
import { GetRecipeDto } from '../Models/Dtos/RecipeDto/get-recipe.dto'


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient) { }

  createRecipe(recipe:Recipe):Observable<CreateRecipeDto>{

    return this.http.post<CreateRecipeDto>("http://localhost:3000/recipe",recipe.toDto())

  }

  getAllRecipes():Observable<Recipe[]>{

    return this.http.get<GetRecipeDto[]>(`http://localhost:3000/recipe`)
      .pipe(

        map(recipeFound => {return Recipe.fromDto(recipeFound)})

      )

  }

  getOneRecipe():

}

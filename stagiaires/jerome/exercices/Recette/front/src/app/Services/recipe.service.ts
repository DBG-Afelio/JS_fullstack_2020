import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Recipe} from '../Models/recipe'
import { map } from 'rxjs/operators';
import { CreateRecipeDto } from '../Models/Dtos/RecipeDto/create-recipe.dto';
import { GetRecipeDto } from '../Models/Dtos/RecipeDto/get-recipe.dto'
import { User } from '../Models/user';


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
      map((arrayRecipeDto:GetRecipeDto[])=> arrayRecipeDto.map((recipeDto:GetRecipeDto)=>{
     
        return Recipe.fromDto(recipeDto)
       }))
    )

  }

  getRecipeById(id:number):Observable<Recipe>{
    return this.http.get<GetRecipeDto>(`http://localhost:3000/recipe/${id}`)
    .pipe(
      map((recipe:GetRecipeDto)=>{
        return Recipe.fromDto(recipe)
      })
    )
  }

  public deleteRecipe(id:number,user:User,recipe:GetRecipeDto){

    if((user.login===recipe.user.login)||(user.role==="ADMIN")){

      return this.http.delete<GetRecipeDto>(`http://localhost:3000/recipe/${id}`);

    }else {

      throw new console.error('Suppression impossible');
       
    }
    
 }

}

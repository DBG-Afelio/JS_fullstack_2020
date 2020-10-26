import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetIngredientDto } from '../Models/Dtos/IngredientDto/get-ingredient.dto';
import { Ingredient } from '../Models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private http:HttpClient) { }

  getAllIngredients():Observable<Ingredient[]>{

    return this.http.get<GetIngredientDto[]>(`http://localhost:3000/ingredient`)
    .pipe(
      map((arrayIngredientDto:GetIngredientDto[])=> arrayIngredientDto.map((ingredientDto:GetIngredientDto)=>{
    
        return Ingredient.fromDto(ingredientDto)
      }))
    )

  }

  getIngredientsByWord(word:string):Observable<Ingredient[]>{

    return this.http.get<GetIngredientDto[]>(`http://localhost:3000/ingredient/search/${word}`)
    .pipe(
      map((arrayIngredientDto:GetIngredientDto[])=> arrayIngredientDto.map((ingredientDto:GetIngredientDto)=>{
    
        return Ingredient.fromDto(ingredientDto)
      }))
    )

  }

  createIngredient(ingredient){}
}

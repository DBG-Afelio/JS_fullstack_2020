import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient } from '../../Models/ingredient';
import { IngredientService } from '../../Services/ingredient.service'

@Component({
  selector: 'app-search-ingredient',
  templateUrl: './search-ingredient.component.html',
  styleUrls: ['./search-ingredient.component.scss']
})
export class SearchIngredientComponent implements OnInit {

  @Input() public ingredients:Ingredient[]=[];
  @Output() public addIngredient:EventEmitter<Ingredient>=new EventEmitter();


  
  constructor() { }

  ngOnInit() {
    
  }

  addIngredientRecipe(ingredientRecipe){
    this.addIngredient.emit(ingredientRecipe)
  }

  
}

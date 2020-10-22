import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/models/ingredientModels/Ingredient';

@Component({
  selector: 'app-ingredient-admin',
  templateUrl: './ingredient-admin.component.html',
  styleUrls: ['./ingredient-admin.component.scss']
})
export class IngredientAdminComponent implements OnInit {
  public ingredientForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.ingredientForm = this.formBuilder.group({
      name : this.formBuilder.control('', [ Validators.required ])
    });
  }

  ngOnInit(): void {
  }

  onSubmitForm() {
    const formValue = this.ingredientForm.value;
    let newIngredient = new Ingredient(
      0,
      formValue['name'],
      false
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipeForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    //const ingredients = this.fb.array([]);

    this.recipeForm = this.fb.group({
      name: this.fb.control('', Validators.required),
      description: this.fb.control(''),
      image: this.fb.control('')
      //ingredients
    })
  }

  save() {
    console.log('Saving...', this.recipeForm.value)
  }

}
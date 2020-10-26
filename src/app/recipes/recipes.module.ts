import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RecipesComponent, RecipeListComponent, RecipeItemComponent, RecipeDetailComponent, RecipeEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    RecipesComponent
  ]
})
export class RecipesModule { }

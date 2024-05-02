import { Component, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrl: "./recipe-list.component.scss",
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    {
      name: "First recipe",
      description: "This is simple a test",
      imagePath: "https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg",
    },
    {
      name: "Second Recipe",
      description: "This is simple a test",
      imagePath: "https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg",
    },
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  constructor() {}
}

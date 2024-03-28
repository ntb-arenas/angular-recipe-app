import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    {
      name: 'A test Recipe',
      description: 'This is simple a test',
      imagePath:
        'https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg',
    },
    {
      name: 'A test Recipe',
      description: 'This is simple a test',
      imagePath:
        'https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg',
    },
  ];

  constructor() {}
}

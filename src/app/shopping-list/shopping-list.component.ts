import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    {
      name: 'Eggs',
      amount: 3,
    },
    {
      name: 'Tomatoes',
      amount: 10,
    },
  ];

  constructor() {}
}

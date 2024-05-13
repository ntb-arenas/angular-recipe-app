import { Component, ElementRef, ViewChild } from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrl: "./shopping-edit.component.scss",
})
export class ShoppingEditComponent {
  constructor(private shoppingListService: ShoppingListService) {}

  @ViewChild("nameInput") nameIngredientInput: ElementRef;
  @ViewChild("amountInput") amountIngredientInput: ElementRef;

  onAddItem() {
    const ingName = this.nameIngredientInput.nativeElement.value;
    const ingAmount = this.amountIngredientInput.nativeElement.value;
    const newIngredient: Ingredient = { name: ingName, amount: ingAmount };
    this.shoppingListService.addIngredient(newIngredient);
  }

  onClearIngredient() {
    this.nameIngredientInput.nativeElement.value = "";
    this.amountIngredientInput.nativeElement.value = "";
  }
}

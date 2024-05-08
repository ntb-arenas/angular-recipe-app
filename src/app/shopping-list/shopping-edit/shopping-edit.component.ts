import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrl: "./shopping-edit.component.scss",
})
export class ShoppingEditComponent {
  @Output() ingredientsCreated = new EventEmitter<Ingredient>();

  @ViewChild("nameInput") nameIngredientInput: ElementRef;
  @ViewChild("amountInput") amountIngredientInput: ElementRef;

  onAddIngredient() {
    this.ingredientsCreated.emit({
      name: this.nameIngredientInput.nativeElement.value,
      amount: this.amountIngredientInput.nativeElement.value,
    });
  }

  onClearIngredient() {
    this.nameIngredientInput.nativeElement.value = "";
    this.amountIngredientInput.nativeElement.value = "";
  }
}

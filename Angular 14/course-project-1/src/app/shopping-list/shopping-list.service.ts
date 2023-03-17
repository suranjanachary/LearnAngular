import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();
    
   private ingredients :Ingredient[] = [
        new Ingredient('Dal', 1),
        new Ingredient('Tomato',2),
        new Ingredient('Green Chily',2),
        new Ingredient('turmeric',1)
      ];

      getIngredients(){
        return this.ingredients.slice();
      }
      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
      addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //   this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
}
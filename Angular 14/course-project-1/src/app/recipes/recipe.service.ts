import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    private  recipes: Recipe[] =[
        new Recipe('Dal Fry','Dal or dhal, just like posole (or pozole) is both an ingredient and a dish','https://spicecravings.com/wp-content/uploads/2021/08/Moong-Dal-Featured-1-500x500.jpg',
        [
            new Ingredient('daal', 2),
            new Ingredient('tomato',3)
        ]),
        new Recipe('Hydrabadi Biryani','Biryani comes from the Farsi phrase birinj biriyan, “fried rice.” Rice is fried separately until about half-cooked, usually in oil or ghee, and then placed in a pot along with marinated meat or vegetables and spices.','https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg',
        [
            new Ingredient('daal', 2),
            new Ingredient('tomato',3)
        ]),
        
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes(){
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }

    
} 
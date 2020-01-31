import { Recipe } from './recipe.model';
import { EventEmitter, Inject, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Subscription, Subject } from 'rxjs';

@Injectable()

export class RecipeService{

  onRecipeChanged = new Subject<Recipe[]>()
    
  // private recipes : Recipe[] = [
  //   new Recipe(
  //       'Biryani',
  //       'Chicken Biryani',
  //       'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/chicken-biryani-recipe.jpg',
  //       [
  //           new Ingredient('Chicken',1),
  //           new Ingredient('Basmati Rice',1),
  //       ]),
  //   new Recipe(
  //       'Biryani',
  //       'Mutton biryani',
  //       'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/mutton-biryani-recipe-500x375.jpg',
  //       [
  //           new Ingredient('Mutton',1),
  //           new Ingredient('Basmati Rice',1),
  //   ])
  // ];

  private recipes : Recipe[] = [];

  constructor(private shoppingService : ShoppingService){}

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.shoppingService.addnewIngredients(ingredients);
  }

  getRecipeById(index : number){
    //console.log(index,this.recipes[index])
    return this.recipes[index]
  }

  updateRecipe(index : number, recipe : Recipe){
    this.recipes[index] = recipe;
    //console.log(this.recipes)
    this.onRecipeChanged.next(this.recipes.slice())
  }

  addRecipe(recipe : Recipe){
    this.recipes.push(recipe)
    this.onRecipeChanged.next(this.recipes.slice())
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1)
    this.onRecipeChanged.next(this.recipes.slice())
  }

  setRecipes(recipes:Recipe[]){
    this.recipes = recipes
    //console.log(this.recipes)
    this.onRecipeChanged.next(this.recipes.slice())
  }
}
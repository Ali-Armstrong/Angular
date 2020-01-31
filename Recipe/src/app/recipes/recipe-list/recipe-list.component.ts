import { Component, OnInit, EventEmitter,Output, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
  recipes : Recipe [];
  onRecipesChanges : Subscription;
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.onRecipesChanges = this.recipeService.onRecipeChanged.subscribe((recipes)=>{
      this.recipes = recipes
    });
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(){
    this.onRecipesChanges.unsubscribe()
  }

}

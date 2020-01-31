import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Params, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Injectable({providedIn:'root'})
export class recipeDetailsGaurd implements CanActivate{
    constructor(private recipeService: RecipeService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
        const id = +state.url.split('/')[2]
        const recipes = this.recipeService.getRecipes()
        console.log(id,recipes)
        if(id >=0 && id < recipes.length){
            return true;
        }else{
            return false;
        }
    }
}
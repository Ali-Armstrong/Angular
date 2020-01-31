import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import { take, exhaustMap } from 'rxjs/operators';
import { User } from '../auth/user.model';

@Injectable({providedIn:'root'})
export class DataStorageService{
    constructor(private http:HttpClient, private recipeService:RecipeService, private authService:AuthService){}
    storeRecipes(token:string){
        this.http.put('https://angular-recipes-8e293.firebaseio.com/recipes.json',
        this.recipeService.getRecipes(),
        { params: new HttpParams().set('auth',token)})
        .subscribe((data)=>{
            console.log(JSON.stringify(data)+"\nsuccessfully stored")
        })
    }

    fetchRecipes(token:string){
        //console.log('fetching')

        this.http.get<Recipe[]>('https://angular-recipes-8e293.firebaseio.com/recipes.json?auth='+token)
            .subscribe((recipes:Recipe[])=>{
                //console.log(recipes)
                this.recipeService.setRecipes(recipes)
            })
    }
}
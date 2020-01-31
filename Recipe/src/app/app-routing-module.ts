import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { recipeDetailsGaurd } from './recipes/recipe-details/recipe-details-gaurd';
import { AuthComponent } from './auth/auth.component';
import { AuthGaurd } from './auth/auth.gaurd';

const appRoutes : Routes = [
    {path : '', redirectTo : '/recipes', pathMatch: 'full'},
    {path : 'recipes' , component : RecipesComponent, canActivate:[AuthGaurd], children:[
        {path : 'new' , component : RecipeEditComponent},
        {path : ':id' , canActivate:[recipeDetailsGaurd],component : RecipeDetailsComponent},
        {path : ':id/edit', canActivate:[recipeDetailsGaurd], component : RecipeEditComponent}
    ]},
    {path : 'shopping-list', component : ShoppingListComponent},
    {path : 'auth', component : AuthComponent}
]

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})
export class AppRoutingModule{
    
}
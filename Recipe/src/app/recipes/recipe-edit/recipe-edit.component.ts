import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode = false;
  recipeForm : FormGroup;

  constructor(private route: ActivatedRoute, private recipeService : RecipeService, private router : Router) { }

  ngOnInit() {
    this.route.params.subscribe((data)=>{
      this.id = +data['id']
      this.editMode = data['id']!=null;
      this.initForm();
    })
  }

  initForm(){
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeDescription = '';
    let ingredients = new FormArray([])

    if(this.editMode){
      const recipe = this.recipeService.getRecipeById(this.id)
      recipeName = recipe.name
      recipeImageUrl = recipe.imagePath
      recipeDescription = recipe.description
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          ingredients.push(new FormGroup({
            'name':new FormControl(ingredient.name,Validators.required),
            'amount' : new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
          }))
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName,Validators.required),
      'imagePath' : new FormControl(recipeImageUrl,Validators.required),
      'description' : new FormControl(recipeDescription,Validators.required),
      'ingredients' : ingredients
    })
  }

  addNewIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name':new FormControl(null,Validators.required),
      'amount' : new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
    }))
  }

  onSubmit(){
    if(this.editMode){
      this.recipeService.updateRecipe(this.id,this.recipeForm.value)
    }else{
      this.recipeService.addRecipe(this.recipeForm.value)
    }
    this.router.navigate(['recipes'])
  }

  clearForm(){
    this.recipeForm.reset()
  }

  cancelEdit(){
    this.router.navigate(['recipes'])
  }

  removeIngredient(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
  }

}

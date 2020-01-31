import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  editingSubscription : Subscription;
  editingItem : Ingredient;
  editMode:boolean = false;
  editIndex:number;
  @ViewChild('f',{static:false}) addItemForm: NgForm;

  constructor(private shoppingService : ShoppingService) { }

  addItemToShoppingList(addForm : NgForm){
    const value = addForm.value
    if(this.editMode){
      this.shoppingService.updateIngredient(this.editIndex,value.name,value.amount)
    }else{
      this.shoppingService.addNewIngredient(value.name,value.amount)
    }
    this.editMode = false;
  }

  ngOnInit() {
    this.editingSubscription = this.shoppingService.editingItem.subscribe((index:number)=>{
      this.editingItem = this.shoppingService.getIngredientByIndex(index);
      this.editMode = true;
      this.editIndex = index;
      this.addItemForm.setValue({
        'name':this.editingItem.name,
        'amount' : this.editingItem.amount
      })
    });
  }

  ngOnDestroy(){
    this.editingSubscription.unsubscribe();
  }

  clearForm(){
    this.addItemForm.reset()
    this.editMode = false;
  }

  deleteIngredient(){
    this.shoppingService.deleteIngredient(this.editIndex)
    this.addItemForm.reset()
  }
}

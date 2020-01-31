import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  ingredients : Ingredient[] = [];
  private ingChange : Subscription;
  constructor(private shoppingService : ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.ingChange = this.shoppingService.ingredientsChanged
      .subscribe((ing : Ingredient[])=>{
        this.ingredients = ing;
      })
  }
  
  ngOnDestroy(){
    this.ingChange.unsubscribe()
  }

  onItemEdit(i:number){
    this.shoppingService.editingStart(i);
  }
}

import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs'; 

export class ShoppingService{
    ingredientsChanged = new Subject<Ingredient[]>()
    editingItem = new Subject<number>()
    private ingredients:Ingredient[] = [
        new Ingredient('Chicken',1),
        new Ingredient('Tomatoes',10)
    ]

    editingStart(index:number){
        this.editingItem.next(index)
    }
    
    getIngredients(){
        return this.ingredients;
    }
    addNewIngredient(name : string, quantity : number){
        this.ingredients.push(new Ingredient(name,quantity))
        this.ingredientsChanged.next(this.ingredients.slice())
    }
    addnewIngredients(ingredients : Ingredient[]){
        this.ingredients.push(...ingredients)
    }
    getIngredientByIndex(index:number){
        return this.ingredients[index]
    }
    updateIngredient(index: number ,name:string, quantity:number){
        this.ingredients[index]= new Ingredient(name,quantity)
        this.ingredientsChanged.next(this.ingredients.slice())
    }
    deleteIngredient(index:number){
        this.ingredients.splice(index,1)
        this.ingredientsChanged.next(this.ingredients.slice())
    }
}
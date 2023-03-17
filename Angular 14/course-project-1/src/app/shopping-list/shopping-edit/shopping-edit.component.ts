import { ElementRef } from '@angular/core';
import { ViewChild , OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component,Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static: false}) nameInputRef:ElementRef;
  @ViewChild('quantityInput', {static: false}) quantityInputRef:ElementRef;
  //@Output() itemAdded= new EventEmitter<{name:string,quantity:number}>();

  constructor(private shoppingListService: ShoppingListService){

  }

ngOnInit(): void {
  
}
  onAddItem(){
    const itemName = this.nameInputRef.nativeElement.value;
    const itemQuantity = this.quantityInputRef.nativeElement.value;

    const newIngredient = new Ingredient(itemName,itemQuantity);
    this.shoppingListService.addIngredient(newIngredient);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.scss']
})
export class Exo2Component implements OnInit {

  monItem: string;
  shoppingList: any[];
  clicked: boolean;

  

  constructor() { }

  ngOnInit(): void {
      this.shoppingList = [];     
    }

  AddToList(){

  var listItem = {
    item: this.monItem,
    quantity : 1,
    clicked : false
  }
  this.shoppingList.push(listItem);
  }

  Increase(i){
    this.shoppingList[i].quantity ++;
  }

  Decrease(i){    
    this.shoppingList[i].quantity --;
    if (this.shoppingList[i].quantity == 0)
        this.Remove(i);
  }

  Remove(i){
    this.shoppingList.splice(i,1);
  }

  EventClick(i){
    this.shoppingList[i].clicked = !this.shoppingList[i].clicked;
  }

}

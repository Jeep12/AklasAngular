import { Component, OnInit } from '@angular/core';
import { Coin } from '../item-l2-list/Coin';
import { ItemsL2 } from '../item-l2-list/Item';

@Component({
  selector: 'app-insert-int',
  templateUrl: './insert-int.component.html',
  styleUrls: ['./insert-int.component.css']
})
export class InsertIntComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  coins: Coin = {
    id: 57,
    name: "Coin",
    quantity: 0,
    price: 0,
    image: "assets/images/57.png",
  }


 items: ItemsL2 [] = [
  {
    id:4717,
    name:"Sword of Damascus",
    type:"weapon",
    price:50,
    image:"assets/images/4717.png"
  },
  {
    id:57,
    name:"Tallum Blade",
    type:"weapon",
    price:75,
    image:"assets/images/4720.png"
  },
  {
    id:57,
    name:"Apella Body Armor",
    type:"armor",
    price:75,
    image:"assets/images/7867.png"
  },
  {
    id:7866,
    name:"Apella Boot's",
    type:"armor",
    price:25,
    image:"assets/images/7866.png"
  },
  {
    id:7866,
    name:"Apella Glove's",
    type:"armor",
    price:25,
    image:"assets/images/7868.png"
  }  
 ];
upQuantity(coins:Coin){
  coins.quantity++;
}
downQuantity(coins:Coin){
  if (coins.quantity>0){
    coins.quantity--;
  }
}
}

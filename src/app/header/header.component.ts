import { Component, OnInit } from '@angular/core';
import { Coin } from '../item-l2-list/Coin';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   MyCoins:Coin = 
    {
      id:57,
      name:"Coin",
      quantity:0,
      price:0,
      image:"assets/images/57.png"
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}

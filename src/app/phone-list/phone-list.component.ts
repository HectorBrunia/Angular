import { Component, OnInit } from '@angular/core';
import { Phone } from './phone';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss']
})
export class PhoneListComponent implements OnInit {
  phones : Phone[] = [
    {
    brand:"Samsung",
    model:"Galaxy A32",
    price: 100000 ,
    stock:10,
    image: "assets/img/galaxy A32.jpg",
    inOffert: true,
    quantity:0,
  },
  {
    brand:"Motorola",
    model:"Edge 30pro",
    price: 80000 ,
    stock:10,
    image: "assets/img/Edge 30pro.jpg",
    inOffert: false,
    quantity:0,
  },
  {
    brand:"Apple",
    model:"IPhone 13pro max",
    price: 	200000 ,
    stock:0,
    image: "assets/img/IPhone 13pro max.jpg",
    inOffert: false,
    quantity:0,
  }

]
  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(phone:Phone):void{
    if (phone.quantity<phone.stock)
    phone.quantity++;
  }
  downQuantity(phone:Phone):void{
    if (phone.quantity >0)
    phone.quantity--;
  }
}


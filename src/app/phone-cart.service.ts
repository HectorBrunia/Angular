import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Phone } from './phone-list/phone';

@Injectable({
  providedIn: 'root'
})
export class PhoneCartService {
  
  private _cartList: Phone[] = [];

  cartList: BehaviorSubject<Phone[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(phone: Phone) {
    let item = this._cartList.find((v1)=>v1.model==phone.model);
    if(!item)
      this._cartList.push({... phone});
    else{
      item.quantity += phone.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList)
  }

  deleteToCart(phone: Phone){
    this._cartList = this._cartList.filter((item) => item !== phone)
    this.cartList.next(this._cartList);
  }
}

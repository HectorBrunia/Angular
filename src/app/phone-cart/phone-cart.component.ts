import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhoneCartService } from '../phone-cart.service';
import { PhoneDataService } from '../phone-data.service';
import { Phone } from '../phone-list/phone';

@Component({
  selector: 'app-phone-cart',
  templateUrl: './phone-cart.component.html',
  styleUrls: ['./phone-cart.component.scss']
})
export class PhoneCartComponent implements OnInit {

  cartList!: Phone[];

  constructor(
    private cart:PhoneCartService,
    private phoneService:PhoneDataService) { 
      cart.cartList.subscribe((observable: Phone[]) => this.cartList=observable);
  }

  ngOnInit(): void {
  }

  deleteToCart(newPhone:Phone):void{
    this.cart.deleteToCart(newPhone)
    newPhone.quantity=0;
    this.phoneService.updatePhone(newPhone).subscribe(phone => console.log(phone))
  }

  total():number{
    let total=0
    for (let i in this.cartList) {
        total+=this.cartList[i].price*this.cartList[i].quantity;
    }
    return total;
  }

  toBuy():void{
    this.cartList.forEach(phone => {
      phone.stock-=phone.quantity;
      this.phoneService.updatePhone(phone).subscribe(phone => console.log(phone))
    });
    this.cart.empyCart();
  }
}

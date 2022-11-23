import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhoneCartService } from '../phone-cart.service';
import { Phone } from '../phone-list/phone';

@Component({
  selector: 'app-phone-cart',
  templateUrl: './phone-cart.component.html',
  styleUrls: ['./phone-cart.component.scss']
})
export class PhoneCartComponent implements OnInit {

  cartList$: Observable<Phone[]>;

  constructor(private cart:PhoneCartService) { 
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

  deleteToCart(phone:Phone):void{
    this.cart.deleteToCart(phone)
    phone.stock+= phone.quantity;
    phone.quantity=0;
  }
}

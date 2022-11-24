import { Component, Input, OnInit } from '@angular/core';
import { PhoneCartService } from '../phone-cart.service';
import { Phone } from '../phone-list/phone';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {

  constructor(private cart:PhoneCartService,) { }

  @Input()phone!: Phone;

  addToCart(phone:Phone):void{
    this.cart.addToCart(phone)
    phone.stock-= phone.quantity;
    phone.quantity=0;
  }

  maxReached(m: string) {
    alert(m);
  }
  
  ngOnInit(): void {
  }

}

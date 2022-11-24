import { Component, Input, OnInit } from '@angular/core';
import { PhoneCartService } from '../phone-cart.service';
import { PhoneDataService } from '../phone-data.service';
import { Phone } from '../phone-list/phone';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {

  constructor(
    private cart:PhoneCartService,
    private phoneService:PhoneDataService) { }

  @Input()phone!: Phone;

  addToCart(phone:Phone):void{
    this.cart.addToCart(phone)
    phone.stock-= phone.quantity;
    phone.quantity=0;
    this.phoneService.updatePhone(phone).subscribe(phone => console.log(phone))
  }

  maxReached(m: string) {
    alert(m);
  }
  
  ngOnInit(): void {
  }

}

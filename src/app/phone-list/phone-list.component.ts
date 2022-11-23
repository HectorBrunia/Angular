import { Component, OnInit } from '@angular/core';
import { PhoneCartService } from '../phone-cart.service';
import { PhoneDataService } from '../phone-data.service';
import { Phone } from './phone';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss']
})
export class PhoneListComponent implements OnInit {
  phones : Phone[] = [];

  constructor(
    private cart:PhoneCartService,
    private phoneDataService : PhoneDataService) { }

  ngOnInit(): void {
    this.phoneDataService.getAll().subscribe(phones =>this.phones = phones)
  }

  addToCart(phone:Phone):void{
    this.cart.addToCart(phone)
    phone.stock-= phone.quantity;
    phone.quantity=0;
  }

  maxReached(m: string) {
    alert(m);
  }

}


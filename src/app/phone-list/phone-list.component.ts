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
  SlecetedPhone!:Phone;
  constructor(
    private phoneDataService : PhoneDataService) { }

  ngOnInit(): void {
    this.phoneDataService.getAll().subscribe(phones =>this.phones = phones)
  }

  selectPhone(phone:Phone){
    this.SlecetedPhone=phone;
  }

  maxReached(m: string) {
    alert(m);
  }
}


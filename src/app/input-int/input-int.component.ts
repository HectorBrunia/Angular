import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Phone } from '../phone-list/phone';

@Component({
  selector: 'app-input-int',
  templateUrl: './input-int.component.html',
  styleUrls: ['./input-int.component.scss']
})
export class InputIntComponent implements OnInit {

  constructor() { }


  @Input()quantity!: number;

  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Input()max!: number;

  @Output() maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }
  
  upQuantity():void{
    if (this.quantity<this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }else {
      this.maxReached.emit('Se alcanzo el tope');
    }
    
  }
  downQuantity():void{
    if (this.quantity >0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
    
  }
  changeQuantity(event: { key: String | undefined; }): void {
    console.log(event.key);
    let num =  Number (event.key);
    if (!isNaN(num))
      this.quantityChange.emit(num);
    else
    this.maxReached.emit('ingrese un numero');
  }

}

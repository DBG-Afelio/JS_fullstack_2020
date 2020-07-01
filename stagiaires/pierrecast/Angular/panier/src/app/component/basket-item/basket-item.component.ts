import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Command } from 'src/app/model/Command';
import { BasketService } from 'src/app/service/basket.service';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.css']
})
export class BasketItemComponent implements OnInit {

  @Input() command: Command;
  @Output() changeQuantityEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeQtEvent(qt: number) {
    
    this.changeQuantityEvent.emit(qt);
  }
}

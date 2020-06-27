import { Component, OnInit, Input } from '@angular/core';
import { Command } from 'src/app/model/Command';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.css']
})
export class BasketItemComponent implements OnInit {

  @Input() command:Command;
  
  constructor() { }

  ngOnInit(): void {
  }

}

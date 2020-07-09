import { Component, OnInit, Input } from '@angular/core';
import{ ListItemsService } from '../../services/list-items.service';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrls: ['./display-item.component.css']
})
export class DisplayItemComponent implements OnInit {

  public listProducts: Item[];
  @Input() item: Item;

  constructor() {}

  ngOnInit() {
  }
  onDisplayDetails(id){
    console.log(id)
  }
}

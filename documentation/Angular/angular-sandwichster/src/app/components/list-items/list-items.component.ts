import { Component, OnInit } from '@angular/core';
import{ ListItemsService } from '../../services/list-items.service';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  public listProducts: Item[];

  constructor(
    public listItemsService: ListItemsService) { 
      this.listItemsService.getListItems().subscribe((listeRecue) => {
        this.listProducts = listeRecue;
        console.log(this.listProducts);
      });
    }

  ngOnInit() {
  }

}

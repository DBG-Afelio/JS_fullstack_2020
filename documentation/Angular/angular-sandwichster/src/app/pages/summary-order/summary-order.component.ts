import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Item } from '../../interfaces/item';

import{ ListItemsService } from '../../services/list-items.service';


@Component({
  selector: 'app-summary-order',
  templateUrl: './summary-order.component.html',
  styleUrls: ['./summary-order.component.css']
})
export class SummaryOrderComponent implements OnInit {
  
  public idItem: number;
  private itemToDisplay: Item[];

  constructor(
    public listItemsService: ListItemsService,
    private activatedRoute: ActivatedRoute, 
    private routeur: Router
    ) { 

      this.activatedRoute.paramMap.subscribe((params) => {
        this.idItem = Number(params.get('id'));
        console.log(this.idItem);
    }
/*
    this.itemToDisplay = this.listItemsService.getItemById(this.idItem);


    this.listItemsService.getItemById(this.idItem).subscribe((item) => {
      this.itemToDisplay = item;
      console.log(this.itemToDisplay);
    });
*/

    


  );
}

  ngOnInit() {
  }

}

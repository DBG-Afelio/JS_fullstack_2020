import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../model/item';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  @Input() itemList: Item[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  updateQt(qtchanged: number, item: Item): void{
    item.setQt(qtchanged);
    console.log(this.itemList);
  }
}

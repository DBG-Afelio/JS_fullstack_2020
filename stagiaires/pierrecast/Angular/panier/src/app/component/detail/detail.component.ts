import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/model/Article';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  @Input() currentQuantity: number = 0;
  @Input() detailInfo: Article = null;
  @Output() changeQuantityEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  changeQt(qt: number) {  
    if (!isNaN(qt) && qt > 0) {
      this.changeQuantityEvent.emit(qt);
    } else {
      alert ('quantité non valide');
    } 
  }
}

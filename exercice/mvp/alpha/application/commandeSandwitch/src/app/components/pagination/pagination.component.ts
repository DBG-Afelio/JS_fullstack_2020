import {Component, Input} from '@angular/core';

@Component({
  selector: 'pagination-component',
  templateUrl: './pagination-component.html'
})
export class PaginationComponent {

  @Input() collectionSize: number;
  @Input() pageSize: number;

  public page:number = 1;
}

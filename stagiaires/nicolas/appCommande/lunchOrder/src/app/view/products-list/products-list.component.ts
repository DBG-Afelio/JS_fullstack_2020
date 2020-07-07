import { Component, OnInit } from '@angular/core';
import { ProvidersListService } from 'src/app/services/providers-list.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(private providersListService:ProvidersListService) { }

  ngOnInit(): void {
  }

}

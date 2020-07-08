import { Component, OnInit } from '@angular/core';
import { ProvidersListService } from 'src/app/services/providers-list.service';
import { Product } from 'src/app/models/product';
import { Router, ActivatedRoute } from '@angular/router';
import { Provider } from 'src/app/models/provider';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
    productList:Product[];
  constructor(private providersListService:ProvidersListService, route:ActivatedRoute) { 

    route.paramMap.subscribe( param => {

      const routeId = param.get('providerId');
      console.log(routeId)
      this.providersListService.getProductsByProviderId(Number(routeId)).subscribe(productsFound => {
        this.productList=productsFound;
      });
    })


  }

  ngOnInit(): void {
  }

}

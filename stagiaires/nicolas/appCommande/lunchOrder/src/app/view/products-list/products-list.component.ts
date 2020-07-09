import { Component, OnInit } from '@angular/core';
import { ProvidersListService } from 'src/app/services/providers-list.service';
import { Product } from 'src/app/models/product';
import { Router, ActivatedRoute } from '@angular/router';
import { Provider } from 'src/app/models/provider';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
    provider:Provider;
    productList:Product[];
    productOptions = new FormControl();
  constructor(private providersListService:ProvidersListService, route:ActivatedRoute) { 

    route.paramMap.subscribe( param => {

      const routeId = param.get('providerId');

      this.providersListService.getProductsByProviderId(Number(routeId)).subscribe(productsFound => {
        this.productList=productsFound;
      });

      this.providersListService.getProviderById(Number(routeId)).subscribe(providerFound => {
        this.provider=providerFound;
      });
    })


  }

  ngOnInit(): void {
  }

}

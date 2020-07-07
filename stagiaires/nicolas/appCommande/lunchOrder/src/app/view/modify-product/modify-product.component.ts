import { Component, OnInit } from '@angular/core';
import { ProvidersListService } from 'src/app/services/providers-list.service';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {

  constructor(private providersListService:ProvidersListService) { }

  ngOnInit(): void {
  }

}

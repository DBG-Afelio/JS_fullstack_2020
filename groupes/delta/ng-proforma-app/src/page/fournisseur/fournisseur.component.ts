import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

}

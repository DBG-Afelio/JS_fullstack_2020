import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FournService } from 'src/service/fourn.service';
import { Fourn } from 'src/model/fourn';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  fourn_id: number;
  fournisseur: Fourn;

  constructor(private fournService: FournService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(param => {
      this.fourn_id = Number(param.get('id'));
    })
  }

  ngOnInit() {
    this.fournService.getFournByIdWithProducts(this.fourn_id)
      .subscribe((fourn:Fourn) => this.fournisseur = fourn)
  }

}

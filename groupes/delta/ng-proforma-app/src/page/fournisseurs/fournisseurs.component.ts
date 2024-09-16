import { Component, OnInit } from '@angular/core';
import { FournService } from 'src/service/fourn.service';
import { Fourn } from 'src/model/fourn';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {
  fourns: Fourn[];
  constructor(private fournService:FournService) { }

  ngOnInit() {
    this.fournService.getFournList().subscribe((fourns:Fourn[]) => {
      this.fourns = fourns;
    })
  }

}

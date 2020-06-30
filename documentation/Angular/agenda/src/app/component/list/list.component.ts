import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonneService } from '../../service/personne.service';
import { Personne } from '../../models/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: Personne[] = [];
  constructor(
    public personnesService: PersonneService) { 
    this.personnesService.getList().subscribe((listeRecue) => {
      this.list = listeRecue
    });
  }

  ngOnInit() {
  }

}

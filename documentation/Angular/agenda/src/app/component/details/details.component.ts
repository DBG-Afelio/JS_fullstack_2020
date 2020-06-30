import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personne } from '../../models/personne';
import { PersonneService } from '../../service/personne.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private personId: number;
  public personne: Personne;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: PersonneService
    ) { 
    // console.log('activated route', this.activatedRoute);
    // console.log('id de la route', this.activatedRoute.snapshot.params.id);
    
    this.activatedRoute.paramMap.subscribe((params) => {
        this.personId = Number(params.get('id'));
        this.service.getPersonneById(this.personId).subscribe((personne: Personne) => {
          this.personne = personne;
        });
    });

    // console.log('id de la route', this.activatedRoute.snapshot.params.id);
  }

  ngOnInit() {
   
  }
  insertHaroon() {
    this.service.insertHaroon().subscribe((personne) => {
      console.log('Haroon inserted', personne);
      
    })
  }

}

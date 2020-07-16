import { Component, OnInit } from '@angular/core';
import { FournService } from 'src/service/fourn.service';
import { Fourn } from 'src/model/fourn';
import { UsersService } from 'src/service/users.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {
  fourns: Fourn[];
  add_fourn: boolean = false;
  checkoutForm: FormGroup;
  fourn: Fourn = new Fourn('','',false,false,[true,true,true,true,true,true],'');

  constructor(private formBuilder: FormBuilder,private fournService:FournService, private usersService:UsersService, private router:Router) {
    this.checkoutForm = this.formBuilder.group({
      nom: new FormControl(this.fourn.nom, [Validators.minLength(3),Validators.required,Validators.maxLength(18)]),
      description: new FormControl(this.fourn.description, [Validators.minLength(3),Validators.required,Validators.maxLength(18)]),
      ferme: new FormControl(this.fourn.ferme ,[Validators.required]), 
      archive: new FormControl(this.fourn.archive , [Validators.required]),
      horaire: new FormControl(this.fourn.horaire , [Validators.required]),
      tel: new FormControl(this.fourn.tel , [Validators.required])
    });
  }

  get nom() { return this.checkoutForm.get('nom'); }

  get description() { return this.checkoutForm.get('description'); }

  get ferme() { return this.checkoutForm.get('ferme'); }

  get archive() { return this.checkoutForm.get('archive'); }

  get horaire() { return this.checkoutForm.get('horaire'); }

  get tel() { return this.checkoutForm.get('tel'); }

  ngOnInit() {
    this.fournService.getFournList().subscribe((fourns:Fourn[]) => {
      this.fourns = fourns;
    })
  }

  isAdmin(): boolean {
    return this.usersService.user_co?.admin;
  }

  editFourn(fourn) {
    this.fourn = fourn;
    this.checkoutForm = this.formBuilder.group({
      nom: new FormControl(this.fourn.nom, [Validators.minLength(3),Validators.required,Validators.maxLength(18)]),
      description: new FormControl(this.fourn.description, [Validators.minLength(3),Validators.required,Validators.maxLength(18)]),
      ferme: new FormControl(this.fourn.ferme ,[Validators.required]), 
      archive: new FormControl(this.fourn.archive , [Validators.required]),
      horaire: new FormControl(this.fourn.horaire , [Validators.required]),
      tel: new FormControl(this.fourn.tel , [Validators.required])
    });
    if(this.usersService.user_co?.admin) {
      this.add_fourn = true;
    }
  }

  switchAddFourn() {
    this.fourn = new Fourn('','',false,false,[true,true,true,true,true,true],'');
    this.checkoutForm = this.formBuilder.group({
      nom: new FormControl(this.fourn.nom, [Validators.minLength(3),Validators.required,Validators.maxLength(18)]),
      description: new FormControl(this.fourn.description, [Validators.minLength(3),Validators.required,Validators.maxLength(18)]),
      ferme: new FormControl(this.fourn.ferme ,[Validators.required]), 
      archive: new FormControl(this.fourn.archive , [Validators.required]),
      horaire: new FormControl(this.fourn.horaire , [Validators.required]),
      tel: new FormControl(this.fourn.tel , [Validators.required])
    });
    if(this.usersService.user_co?.admin) {
      this.add_fourn = true;
    }
  }

  submitForm(data) {
    console.log(data);
    if(this.nom.errors || this.description.errors || this.tel.errors) {
      console.log('Erreur');
    } else {
      this.checkoutForm.reset();
      const horaire:boolean[] = [false,false,false,false,false,false,false];
      for (let i = 0; i < data.horaire.length; i++) {
        horaire[Number(data.horaire[i])] = true;
      }
      data.horaire = horaire;
      this.fournService.creatFourn(data).subscribe(fourn => {
        console.log(fourn);
        this.router.navigate(['/','fournisseur',fourn.id])
      });
    }
  }

}

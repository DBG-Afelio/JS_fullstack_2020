import { Component, OnInit } from '@angular/core';
import { ProvidersListService } from 'src/app/services/providers-list.service';
import { Provider } from 'src/app/models/provider';
import { UsersListService } from 'src/app/services/users-list.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.css']
})
export class ProvidersListComponent implements OnInit {

  providersList:Provider[]
  currentUser:User

  constructor(private providerListService:ProvidersListService,
              private usersListService:UsersListService) { }

  ngOnInit(): void {

    this.providerListService.getProvidersList().subscribe(listFound => this.providersList = listFound)
    this.usersListService.getCurrentUser().subscribe(currentUserFound => this.currentUser = currentUserFound);

  }

  reloadList(){

    this.providerListService.getProvidersList().subscribe(listFound => this.providersList = listFound)

  }

  onDeleteProviderClick(providerId:number){

    let deleteConfirm = confirm('Êtes-vous sur de vouloir supprimer ce commerce')
    if(deleteConfirm){

      this.providerListService.removeProvider(providerId).subscribe(_ => this.reloadList())

    }

  }

}

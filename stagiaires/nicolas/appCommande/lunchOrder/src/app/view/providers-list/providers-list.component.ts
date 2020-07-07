import { Component, OnInit } from '@angular/core';
import { ProvidersListService } from 'src/app/services/providers-list.service';
import { Provider } from 'src/app/models/provider';

@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.css']
})
export class ProvidersListComponent implements OnInit {

  providersList:Provider[]

  constructor(private providerListService:ProvidersListService) { }

  ngOnInit(): void {

    this.providerListService.getProvidersList().subscribe(listFound => this.providersList = listFound)

  }

}

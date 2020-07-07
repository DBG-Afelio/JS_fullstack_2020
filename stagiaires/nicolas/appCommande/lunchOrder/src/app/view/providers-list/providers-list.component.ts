import { Component, OnInit } from '@angular/core';
import { ProvidersListService } from 'src/app/services/providers-list.service';

@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.css']
})
export class ProvidersListComponent implements OnInit {

  constructor(private providerListService:ProvidersListService) { }

  ngOnInit(): void {
  }

}

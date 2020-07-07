import { Component, OnInit } from '@angular/core';
import { ProvidersListService } from 'src/app/services/providers-list.service';

@Component({
  selector: 'app-modify-provider',
  templateUrl: './modify-provider.component.html',
  styleUrls: ['./modify-provider.component.css']
})
export class ModifyProviderComponent implements OnInit {

  constructor(private providersListService:ProvidersListService) { }

  ngOnInit(): void {
  }

}

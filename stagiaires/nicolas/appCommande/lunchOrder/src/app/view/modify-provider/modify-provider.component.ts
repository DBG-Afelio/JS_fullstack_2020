import { Component, OnInit } from '@angular/core';
import { ProvidersListService } from 'src/app/services/providers-list.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Provider } from 'src/app/models/provider';

@Component({
  selector: 'app-modify-provider',
  templateUrl: './modify-provider.component.html',
  styleUrls: ['./modify-provider.component.css']
})
export class ModifyProviderComponent implements OnInit {
  provider:Provider;
  timeTable:boolean[]=[];
  constructor(private providersListService:ProvidersListService,route:ActivatedRoute) { 
    
    route.paramMap.subscribe( param => {

      const routeId = param.get('providerId');
      this.providersListService.getProviderById(Number(routeId)).subscribe(providerFound=>{
        this.provider=providerFound;
        this.timeTable=providerFound.timeTable;
        
      })
    })
  }

  ngOnInit(): void {
  }
  onSaveButtonClick(){
    this.providersListService.updateProvider(this.provider).subscribe();
    console.log(this.timeTable);
  }
  updateDay(indexDay:number,statusDay:boolean){

    this.provider.timeTable[indexDay]=statusDay;

  }
}

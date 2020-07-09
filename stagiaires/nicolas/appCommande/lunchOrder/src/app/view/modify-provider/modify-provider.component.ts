import { Component, OnInit } from '@angular/core';
import { ProvidersListService } from 'src/app/services/providers-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Provider } from 'src/app/models/provider';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-modify-provider',
  templateUrl: './modify-provider.component.html',
  styleUrls: ['./modify-provider.component.css']
})
export class ModifyProviderComponent implements OnInit {

  provider:Provider;
  daysList:string[] = ['Lundi', 'Mardi', 'Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];
  editMode:string;

  providerForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    isClosed: new FormControl(''),
    isArchived: new FormControl(''),
    timeTable: new FormArray([
      
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),

    ]),
    phone: new FormControl(''),
    id: new FormControl('')
  });


  constructor(private providersListService:ProvidersListService,private route:ActivatedRoute,private router:Router) { 
    

    route.url.subscribe(url => {
      
      this.editMode = url[1].path == 'new' ? 'create' : 'update';

    });
  
    route.paramMap.subscribe( param => {

      const routeId = param.get('providerId');
      

      if(routeId === 'new'){

        this.provider = new Provider(0,'','',false,false,[false,false,false,false,false,false,false,],'');
        this.providerForm.setValue(this.provider)

      }else{

        this.providersListService.getProviderById(Number(routeId)).subscribe(providerFound=>{
        
          this.provider=providerFound;
          /*this.timeTable=providerFound.timeTable;*/
          this.providerForm.setValue(this.provider)
          
        })
      }
    })
  }

  ngOnInit(): void {
  }
  
  updateDay(indexDay:number,statusDay:boolean){

    this.provider.timeTable[indexDay]=statusDay;

  }
  onCreateButtonClick(){

    this.updateProviderWithForm();
    this.providersListService.addProvider(this.provider).subscribe(()=>{
      this.router.navigate(['']);
     }  
   ); 

  }
  onSaveButtonClick(){
    
    this.updateProviderWithForm();
    this.providersListService.updateProvider(this.provider).subscribe(()=>{
       this.router.navigate(['']);
      }  
    );   
  }
  updateProviderWithForm(){

    this.provider = Object.assign(this.provider, this.providerForm.value);

  }
  getTimeTableValue(index):boolean{

    return this.providerForm.get('timeTable').value[index] 

  }
  toggleTimeTableValue(index){

    const dayValue = this.getTimeTableValue(index);

    if(dayValue){

      this.providerForm.get('timeTable').value[index] = false;

    }else{

      this.providerForm.get('timeTable').value[index] = true;

    }

  }
}

import { Component, OnInit, OnChanges } from '@angular/core';
import { User } from 'src/model/user';
import { UsersService } from 'src/service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.css']
})
export class MembresComponent implements OnInit, OnChanges {

  membres: User[]=[];
  admin: boolean;
  sortby: [string,boolean] = ["id",false];

  constructor(private usersservice: UsersService, private route: Router) { }

  ngOnInit() {
    if(this.usersservice.user_co && this.usersservice.user_co?.admin){
      this.usersservice.getUsers().subscribe((membres)=>{
        this.membres = membres;
      })
    } else {
      this.route.navigate(['/']);
    }
  }

  sortMembre(){
    const sortedtab = this.membres.slice();
    return sortedtab.sort((membre1, membre2) =>{
      if (membre1[this.sortby[0]]<membre2[this.sortby[0]]){
        return this.sortby[1] ? 1 : -1;
      }else if(membre1[this.sortby[0]]>membre2[this.sortby[0]]){
        return !this.sortby[1] ? 1 : -1;
      } else {
        return 0;
      }
    })
  }

  sortBy(element:HTMLElement):void{
    this.sortby = this.sortby[0]===element.textContent.toLowerCase() ? [element.textContent.toLowerCase(),!this.sortby[1]] : [element.textContent.toLowerCase(),false];
  }

  // filterMembre(criterefiltre:string){
  //   return this.membres.filter((membre:User)=>{
  //     return membre.criterefiltre
  //   })
  // }

  log(ue){
    console.log(ue);
    
  }

  ngOnChanges(){
  }

}
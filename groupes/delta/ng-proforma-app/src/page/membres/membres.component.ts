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

  // filterMembre(criterefiltre:string){
  //   return this.membres.filter((membre:User)=>{
  //     return membre.criterefiltre
  //   })
  // }

  ngOnChanges(){
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user';
import { UsersService } from 'src/service/users.service';
import { ActivatedRoute,Route, Router } from '@angular/router';
import { UserDto } from 'src/model/userDTO';
import{Location} from '@angular/common'

;

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent implements OnInit {
  edit: boolean = false;
  membre: User;
  login: string;
  message : string ;
  detecting : boolean = true ;
   
  

  constructor(private usersService: UsersService, private route: ActivatedRoute,private router:Router, private location : Location ) { }
  userCo():boolean {
    return this.usersService.user_co !== undefined;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const route_login = params.get('login');
      this.login = route_login;
      if(route_login && this.usersService.user_co && this.usersService.user_co?.admin || this.usersService.user_co?.login === route_login) {
        this.usersService.getUserByLogin(this.login).subscribe((membre)=>{
          this.membre = membre;
        });
      } else if(!this.usersService.user_co?.admin) {
        this.router.navigate(['../'])
      }
    })

  }
  creatNewMember(user:UserDto){
    this.usersService.creatUser(user).subscribe((membre)=>{
      console.log(membre);
      this.recentMessageUpdate('L\'utilisateur a été crée avec succès')
      //this.router.navigate(["/"]);
      
    })
  }

  isAdmin():boolean {
    return this.usersService.user_co?.admin as boolean;
  }

  switchEdit() {
    if(this.usersService.user_co?.admin) {
      this.edit = !this.edit;
    }
  }

  deleteMember(user :User){
    this.usersService.deleteUser(user).subscribe(()=>{
      this.router.navigate(["/membres"]);
    })
  }
  updateMember(user: UserDto){
    this.usersService.updateUser(user).subscribe(
      membre=>{
        console.log('Update a REUSSI',membre);
        this.recentMessageUpdate("You have successfully updated user's informations") ;
      },
      (error)=>{console.log(error);
      this.recentMessageUpdate("An error happened during applying update please try again");
      this.detecting= false ;
      }
    ); 
  }
  
  recentMessageUpdate(message : string): void {
    this.message = message ; 
    setTimeout(()=>{
      this.message = undefined ;
    },5000)
  }
 
}

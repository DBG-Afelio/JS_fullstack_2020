import { Component, OnInit } from '@angular/core';
import { UsersListService } from 'src/app/services/users-list.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user:User
  editMode:string

  constructor(private usersListService:UsersListService,  private route:ActivatedRoute) {
    
    route.url.subscribe(url => {
      
      this.editMode = url[1].path == 'new' ? 'create' : 'update';
    }
    );
  
    route.paramMap.subscribe( param => {

      const routeId = param.get('userId');
      

      if(routeId === 'new'){

        this.user = new User('','','','',0,'',false,false,0)

      }else{

        this.usersListService.getUserById(Number(routeId)).subscribe(userFound=>{
          
          this.user=userFound;
          
        })
      }
    })
    
  }

  ngOnInit(): void {
  }

  onSaveUserClick(){



  }
  onDeleteUserClick(){

    

  }

}

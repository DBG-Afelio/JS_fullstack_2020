import { Component, OnInit } from '@angular/core';
import { UsersListService } from 'src/app/services/users-list.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user:User;
  editMode:string;

  userForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    formation: new FormControl(''),
    login: new FormControl(''),
    password: new FormControl(''),
    credit: new FormControl(''),
    isBanned: new FormControl(''),
    isAdmin: new FormControl(''),
    id: new FormControl('')
  });

  constructor(private usersListService:UsersListService,  private route:ActivatedRoute,private router: Router) {
    
    route.url.subscribe(url => {
      
      this.editMode = url[1].path == 'new' ? 'create' : 'update';
    }
    );
  
    route.paramMap.subscribe( param => {

      const routeId = param.get('userId');
      

      if(routeId === 'new'){

        this.user = new User('','','','',0,'',false,false,0)
        this.userForm.setValue(this.user)

      }else{

        this.usersListService.getUserById(Number(routeId)).subscribe(userFound=>{
          
          this.user=userFound;
          this.userForm.setValue(this.user)

        })
      }

    })

    
  }

  ngOnInit(): void {
  }


  onCreateUserClick(){

    this.updateUser();

    console.log(this.userForm.value)
    this.usersListService.addUser(this.user).subscribe();
    this.router.navigate(['/usersList']);

  }
  onSaveUserClick(){

    const confirmUpdate = confirm("Enregistrer les modifications ?")

    if(confirmUpdate){

      this.usersListService.updateUser(this.user).subscribe()
      this.router.navigate(['/usersList']);

    }

  }
  onDeleteUserClick(){

    const confirmDelete = confirm("supprimer l'utilisateur ?")

    if(confirmDelete){

      this.usersListService.removeUser(this.user.id).subscribe()
      this.router.navigate(['/usersList']);

    }
    
  }
  updateUser(){

    this.user = this.userForm.value;

  }
}

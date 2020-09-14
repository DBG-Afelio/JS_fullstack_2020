import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { Demonym } from 'src/app/models/interfaces/demonym.interface';
import { UsersService } from 'src/app/services/users.service';
import { Skill } from 'src/app/models/interfaces/skill.interface';

@Component({
  selector: 'app-set-user',
  templateUrl: './set-user.component.html',
  styleUrls: ['./set-user.component.scss']
})
export class SetUserComponent implements OnInit {

  newUser:User;
  demonyms:Demonym[];
  skills:Skill[]

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {

    this.loadComponent()
  }

  loadComponent(){

    this.usersService.getAllDemonyms().subscribe(demonymsFound => {

      this.demonyms = demonymsFound

    })
    this.usersService.getAllSkills().subscribe(skillsFound => {

      this.skills = skillsFound

    })

  }
  createUser(newUser:User){

    this.usersService.postUser(newUser).subscribe()

  }

}

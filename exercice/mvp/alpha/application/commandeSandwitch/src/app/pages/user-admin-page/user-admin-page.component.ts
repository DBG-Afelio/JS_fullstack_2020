import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';
import { User } from 'src/app/models/userModel/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-admin-page',
  templateUrl: './user-admin-page.component.html',
  styleUrls: ['./user-admin-page.component.css']
})
export class UserAdminPageComponent implements OnInit {

  public userList: User[] = [];
  constructor(
    private userService: UserService,
    private router: Router)
  { 
    this.reloadUserList();
  }

  ngOnInit(): void {
  }

  public reloadUserList(): void{
    this.userService.getList().subscribe((users) => this.userList = users);
  }
  public deleteRequested(user: User): void {
    const msg = `Cette action supprimera definitivement l'utilisateur du systeme. Etes-vous certain(e) de vouloir supprimer l\'utilisateur ${user.firstName} ${user.familyName} ?`;
    const isDeleteConfirmed: boolean = window.confirm(msg);
    if (isDeleteConfirmed) {
      this.userService.deleteUser(user);
      this.router.navigate(['/admin/utilisateur']);
      this.reloadUserList();
    }
  }
}

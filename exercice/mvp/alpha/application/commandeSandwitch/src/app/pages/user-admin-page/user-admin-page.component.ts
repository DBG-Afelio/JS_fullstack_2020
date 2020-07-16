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
  public page: number;
  public pageSize: number;
  public collectionSize: number;
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
    this.userService.getList().subscribe((users) => {
      this.userList = users;
      this.collectionSize = this.userList.length;
    });
    
    this.page = 1;
    this.pageSize = 10;
    
  }
  public deleteRequested(user: User): void {
    const msg = `Cette action supprimera définitivement l'utilisateur du système. Etes-vous certain(e) de vouloir supprimer l\'utilisateur ${user.firstName} ${user.familyName} ?`;
    const isDeleteConfirmed: boolean = window.confirm(msg);
    if (isDeleteConfirmed) {
      this.userService.deleteUser(user);
      this.router.navigate(['/admin/utilisateur']);
      this.reloadUserList();
    }
  }

  public sortBy(prop: string) {
    return this.userList.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }
}

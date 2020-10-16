import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { User } from 'src/app/models/userModels/User';
import { UserService } from 'src/app/services/userServices/user.service';
import { UsersDataSource } from './users-admin-datasource';

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.css']
})
export class UsersAdminComponent implements  OnInit {

  public listUsers: User[];
  public user: User;
  public dataSource: UsersDataSource;
  public displayedColumns= ["id", "username", "email", "roles"];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;
  
  
  constructor(
      private userService: UserService,
    ) {
      this.createListUsers();
  }

  createListUsers() {
    this.userService.getList().subscribe(list => { 
      this.listUsers = list;
    });
  }
 
  ngOnInit() {
   
      this.dataSource = new UsersDataSource(this.userService);
      this.dataSource.loadUsers('', 'asc', 0, 10).subscribe(() => {
        return this.initSort()
      });
  }

  initSort() {
      this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
      fromEvent(this.input.nativeElement,'keyup')
          .pipe(
              debounceTime(150),
              distinctUntilChanged(),
              tap(() => {
                  this.paginator.pageIndex = 0;
                  this.loadUsersPage();
              })
          )
          .subscribe();

      merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadUsersPage())
      )
      .subscribe();
  }

  loadUsersPage() {
    this.dataSource.loadUsers(
        this.input.nativeElement.value,
        this.sort.direction,
        this.paginator.pageIndex,
        this.paginator.pageSize
    );
  }

  ngAfterViewInit() {
    
  }

  public onDelete(user: User) {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur")) {
      this.userService.removeUser(user).subscribe(() => {
        this.createListUsers();
      });
    }
  }
  
}

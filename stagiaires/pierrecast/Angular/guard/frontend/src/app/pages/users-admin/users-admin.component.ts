import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { merge, fromEvent } from "rxjs";
import { User } from 'src/app/models/userModels/User';
import { UsersDataSource } from './users-admin-datasource';
import { UserService } from 'src/app/services/userServices/user.service';


@Component({
    selector: 'user',
    templateUrl: './users-admin.component.html',
    styleUrls: ['./users-admin.component.css']
})
export class UsersAdminComponent implements OnInit {

    listUsers : User[]
    user: User;
    dataSource: UsersDataSource;
    //displayedColumns= ["seqNo", "description", "duration"];
    displayedColumns= ["id", "username", "roles"];

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild('input') input: ElementRef;

    constructor(
      private route: ActivatedRoute,
      private usersService: UserService
    ) { 
        this.usersService.getList().subscribe(list => {
            this.listUsers = list;
        })
    }

    ngOnInit() {
     
        this.dataSource = new UsersDataSource(this.usersService);
        this.dataSource.loadUsers('', 'asc', 0, 10).subscribe(() => this.initSort());
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
            this.paginator.pageSize);
    }
}

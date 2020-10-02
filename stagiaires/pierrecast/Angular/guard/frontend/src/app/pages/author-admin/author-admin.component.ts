import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/authorModels/Author';
import { AuthorService } from 'src/app/services/authorServices/author.service';

@Component({
  selector: 'app-author-admin',
  templateUrl: './author-admin.component.html',
  styleUrls: ['./author-admin.component.css']
})
export class AuthorAdminComponent implements OnInit {


  constructor() { 
   
  }

  ngOnInit(): void {
  }

}

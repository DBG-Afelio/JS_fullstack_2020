import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/models/authorModels/Author';

import { AuthorService } from 'src/app/services/authorServices/author.service';

@Component({
  selector: 'app-authors-admin',
  templateUrl: './authors-admin.component.html',
  styleUrls: ['./authors-admin.component.css']
})
export class AuthorsAdminComponent implements AfterViewInit, OnInit {

  public listAuthors: Author[];

  constructor(
      private authorService: AuthorService,
      private router: Router
    ) {
      this.createListAuthors();
  }

  createListAuthors() {
    this.authorService.getList().subscribe(list => { 
      this.listAuthors = list;
    });
  }
  
  ngOnInit() {
    
  }

  ngAfterViewInit() {
    
  }

  public onDelete(author: Author) {
    if (confirm("Êtes-vous sûr de vousloir supprimer cet auteur")) {
      this.authorService.removeAuthor(author).subscribe(() => {
        this.createListAuthors();
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/authorModels/Author';
import { AuthorService } from 'src/app/services/authorServices/author.service';

@Component({
  selector: 'app-authors-admin',
  templateUrl: './authors-admin.component.html',
  styleUrls: ['./authors-admin.component.css']
})
export class AuthorsAdminComponent implements OnInit {

  public listAuthors: Author[];
  constructor(private authorService: AuthorService) { 
    this.authorService.getList().subscribe(list => {
      this.listAuthors = list;
    });
  }

  ngOnInit(): void {
  }

}

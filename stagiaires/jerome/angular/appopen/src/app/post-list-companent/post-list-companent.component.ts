import { Component, OnInit,Input } from '@angular/core'; 
@Component({
  selector: 'app-post-list-companent',
  templateUrl: './post-list-companent.component.html',
  styleUrls: ['./post-list-companent.component.css']
})
export class PostListCompanentComponent implements OnInit {
    @Input() listPost:Object[];
  constructor() { }

  ngOnInit(): void {
  }

}

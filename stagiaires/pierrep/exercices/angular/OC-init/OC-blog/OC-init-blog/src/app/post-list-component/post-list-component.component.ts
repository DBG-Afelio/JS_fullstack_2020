import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit, PostListComponentComponent {

 

  constructor() { 
    console.log("ss"); 
  }



  ngOnInit(): void {
  }

}

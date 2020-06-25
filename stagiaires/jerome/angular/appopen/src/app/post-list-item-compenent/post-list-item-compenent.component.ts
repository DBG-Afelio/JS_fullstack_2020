import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-compenent',
  templateUrl: './post-list-item-compenent.component.html',
  styleUrls: ['./post-list-item-compenent.component.css']
})

export class PostListItemCompenentComponent implements OnInit {
    @Input() post:any;
    liked:string="white";
  constructor() { }

  ngOnInit(): void {
  }
  onClickLoveIt(){
    this.liked="green";
  }
  onClickHateIt(){
    this.liked="red";
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'userimg',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.scss']
})
export class UserImageComponent implements OnInit {

  @ViewChild("userImg") image

  constructor() { }

  ngOnInit(): void {

    setTimeout(this.setImg.bind(this),10000)
   
  }

  setImg(){

    this.image.nativeElement.src = '//i.pinimg.com/474x/07/89/58/078958f72c3352e09c2d9b9e92a5c2fd.jpg';  
    
  }
}
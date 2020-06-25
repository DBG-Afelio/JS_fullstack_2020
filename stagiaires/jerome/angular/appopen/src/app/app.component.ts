import { Component } from '@angular/core';
import { Post } from './posts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Posts';
  postArray:Post[]=[{  
    title: "post01",  
    content: "string",    
    created_at: new Date()
    },{  
      title: "post02",  
      content: "string",   
      created_at: new Date()
      }, {  
        title: "post03",  
        content: "string",  
        created_at: new Date()
        }   ];
}

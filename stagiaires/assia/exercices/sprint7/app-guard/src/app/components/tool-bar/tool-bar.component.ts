import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/Article/Article.model';
import { Tag } from 'src/app/models/Tag/Tag.model';
import { User } from 'src/app/models/User/User.model';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css'],
})
export class ToolBarComponent implements OnInit {
  // @Input()
  // currUser: User = null;

  @Input()
  currObj: Article = null;
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  onEdit(): void {
    switch (true) {
      case this.currObj instanceof Article:
        this._router.navigateByUrl(
          `/private/articles/${this.currObj.id}/update`
        );
        break;

      case this.currObj instanceof User:
        this._router.navigateByUrl(`/private/users/${this.currObj.id}/update`);
        break;

      // and so on...

      default:
        null;
    }
  }

  onDelete(): void {
    // alert to confirm
    // delete
  }
}

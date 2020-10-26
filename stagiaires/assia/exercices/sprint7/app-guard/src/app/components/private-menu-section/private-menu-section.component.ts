import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User/User.model';

@Component({
  selector: 'app-private-menu-section',
  templateUrl: './private-menu-section.component.html',
  styleUrls: ['./private-menu-section.component.css']
})
export class PrivateMenuSectionComponent implements OnInit {
  @Input()
  currUser: User = null
  constructor() { }

  ngOnInit(): void {
  }

}

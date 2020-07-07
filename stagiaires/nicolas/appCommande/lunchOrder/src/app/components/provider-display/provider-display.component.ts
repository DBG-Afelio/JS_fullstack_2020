import { Component, OnInit, Input } from '@angular/core';
import { Provider } from 'src/app/models/provider';

@Component({
  selector: 'app-provider-display',
  templateUrl: './provider-display.component.html',
  styleUrls: ['./provider-display.component.css']
})
export class ProviderDisplayComponent implements OnInit {

  @Input() provider:Provider

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormNameComponent } from '../component/form-name/form-name.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit, AfterViewInit {

  @ViewChild('insideTemplate', { read: ViewContainerRef }) insideTemplate: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    
  }

  ngOnInit() {}
  ngAfterViewInit() {    
      const component = this.componentFactoryResolver.resolveComponentFactory(FormNameComponent);
      const _ref = this.insideTemplate.createComponent(component);
      _ref.instance.previousName = 'denis';

      _ref.instance.nameChange.subscribe((newName) => console.log('newName : ', newName));

  }

}

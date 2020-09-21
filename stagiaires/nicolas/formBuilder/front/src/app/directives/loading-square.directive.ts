import { ComponentFactory, ComponentFactoryResolver, Directive, ElementRef, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { LoadingSquareComponent } from '../component/loading-square/loading-square.component';

@Directive({
  selector: '[appLoadingSquare]'
})
export class LoadingSquareDirective implements OnInit {

  private image:HTMLImageElement;
  private factory: ComponentFactory<LoadingSquareComponent>


  constructor(

      private elementRef:ElementRef,
      private templateRef:TemplateRef<any>,
      private viewContainerRef:ViewContainerRef,
      private resolver: ComponentFactoryResolver,
      private renderer:Renderer2

  ) {}

  ngOnInit(){

      this.image = this.elementRef.nativeElement;
      this.factory = this.resolver.resolveComponentFactory(LoadingSquareComponent)
      this.displaySquare()
    
  }

  displaySquare(){

    this.viewContainerRef.createComponent(this.factory)

  }
 
  onLoad(this,element) {

    element.style.display = 'block'
    this.viewContainerRef.remove(1);

  }

  @Input() set appLoadingSquare(condition) {

      var element = this.viewContainerRef.createEmbeddedView(this.templateRef).rootNodes[0];
      element.style.display = 'none'

      this.renderer.listen(element, 'load', this.onLoad.bind(this,element));


  }
  

}

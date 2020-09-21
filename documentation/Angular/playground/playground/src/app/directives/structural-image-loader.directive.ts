import { DOCUMENT } from '@angular/common';
import { Directive, Inject, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructuralImageLoader]'
})
export class StructuralImageLoaderDirective implements OnInit{
  

  @Input('appStructuralImageLoaderFrom') infos;

  public div: HTMLDivElement;

  constructor(
    private containerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    @Inject(DOCUMENT) private document) {
    this.div = document.createElement('div');
    this.div.classList.add('image-loader');
    this.templateRef.elementRef.nativeElement.parentNode.insertBefore(this.div, this.templateRef.elementRef.nativeElement);
    this.containerRef.createEmbeddedView(this.templateRef);
    console.log('constru', containerRef, templateRef)
  }
  ngOnInit(): void {
    console.log('---',this.infos, this.templateRef);
    this.div.style.width = this.infos.height + 'px';
    this.div.style.height = this.infos.width + 'px';
  }

  private loadImage() {
    const imageInMemory = new Image();
    imageInMemory.addEventListener('progress', (a) => console.log('progress', a));
    imageInMemory.addEventListener('load', (a) => console.log('load', a));
    imageInMemory.addEventListener('error', (a) => console.log('error', a));
  }
}

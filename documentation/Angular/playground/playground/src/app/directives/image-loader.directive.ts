import { Directive, Input, OnChanges, SimpleChanges, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appImageLoader]'
})
export class ImageLoaderDirective implements OnChanges{
  
  @Input('lowsrc') set lowSrc(value: string) {
    console.log('lowsrc ', value);
    this.img.src = value;
    this._lowSrc = value;
  }
  
  @Input('src') set src(value: string) {
    console.log('src ', value);
    this._src = value;
    this.img.src = "";
    window.addEventListener('load', () => this.loadImage());
  }

  private _lowSrc: string;
  private _src: string;
  private img: HTMLImageElement;

  constructor(private containerRef: ViewContainerRef) {
    this.img = this.containerRef.element.nativeElement;
    console.log('construct', this.img.src);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes)
  }

  private loadImage() {
    console.log('loadImage', this._src)

    const imageInMemory = new Image();
    imageInMemory.addEventListener('progress', (a) => console.log('progress', a));
    imageInMemory.addEventListener('load', (a) => console.log('load', a));
    imageInMemory.addEventListener('error', (a) => console.log('error', a));
    
  }

}

import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFirst]'
})
export class FirstDirective implements OnInit, OnChanges{


  // @Input('color') set myColor(value){
  //   console.log('setter', value);
  //   this.bgcolor = value
  // }

  @Input('color') myColor;
  @Input('opacity') opacity;

  @HostBinding('style.background') bgcolor = 'red';
  @HostBinding('style.opacity') opac = .1;

  @HostListener('mouseenter',['$event.target']) ecoutemouseenter(target){
    console.log('event', target)
  }

  @HostListener('window:click',['$event.target']) onClick(target){
    
    console.log('event', target, this.elementRef.nativeElement.contains(target))
  }

  constructor(private elementRef: ElementRef) {
    console.log (this.elementRef)
    const div = document.createElement('div');
    div.textContent = "Hello";
    this.elementRef.nativeElement.appendChild(div);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('oninit', this.myColor)
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    if(changes.myColor && changes.myColor.currentValue !==changes.myColor.previousValue){

      this.myColor = changes.myColor.currentValue;
      this.bgcolor = this.myColor;
    }
  }

}

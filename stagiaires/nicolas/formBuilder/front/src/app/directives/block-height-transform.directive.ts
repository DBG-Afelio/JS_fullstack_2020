import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';


@Directive({
  selector: '[appBlockHeightTransform]'
})
export class BlockHeightTransformDirective implements OnInit{

private block;
private blockMainHeight:string

  constructor(private reference: ElementRef,) {

    this.block = reference.nativeElement;

  }

  ngOnInit(){
    
    this.blockMainHeight = this.block.offsetHeight.toString()+"px";
    this.block.style.height = this.blockMainHeight;
    this.block.style.overflow = "hidden";
    this.block.style.cursor = "pointer";


  }

  @HostListener('click',['$event'])
    changeHeight(event:MouseEvent){

      if(this.block.style.height === this.blockMainHeight)

        this.block.style.height = (this.block.offsetHeight/2).toString() + "px";

      else{

        this.block.style.height = this.blockMainHeight;

      }

    }




}

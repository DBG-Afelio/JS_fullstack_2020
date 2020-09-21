import { AfterViewInit, Component, ComponentFactory, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { AppImage } from 'src/app/models/image/image';
import { PixaBayImagesService } from 'src/app/services/pixaBay-images.service';

@Component({
  selector: 'loadingSquare',
  templateUrl: './loading-square.component.html',
  styleUrls: ['./loading-square.component.scss']
})
export class LoadingSquareComponent implements OnInit,AfterViewInit,OnDestroy {

  portraits:AppImage[]
  currentImage:number = 0;
  interval = interval(100)

  constructor(imageService:PixaBayImagesService) {

    imageService.getImages('men',15,"people").subscribe(imagesFound => {

      this.portraits = imagesFound
      
      setTimeout(this.switchImage.bind(this),100)

    })

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(){

    

  }

  switchImage(){

    
     this.interval.subscribe( (n) => {

      console.log(this.currentImage)
        if(this.currentImage <= this.portraits.length-1){
      
          this.currentImage++
      
        }else{
      
          this.currentImage = 0
      
        }

      })
    }
  

    ngOnDestroy(){

      this.interval.subscribe().unsubscribe()

    }
  

}
/*[ngClass]="{'hidden': i != currentImage,'show':i === currentImage }"*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncText'
})
export class TruncTextPipe implements PipeTransform {

  transform(value: string, maxLength:number): string {

    return value.substr(0,maxLength) + "...";
    
  }

}

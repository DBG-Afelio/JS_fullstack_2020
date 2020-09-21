import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseDecimal'
})
export class ParseDecimalPipe implements PipeTransform {

  transform(value:string | number, decimalNbr?:number): string {
    return  Number(value).toFixed(decimalNbr?decimalNbr:2)
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transverter'
})
export class TransverterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(isNaN(value)) {
      return 'error'
    }

    let tempValue = +value;

    if(tempValue < 0) {
      return 'error';
    } else if(tempValue < 1) {
      tempValue *= 1024;
      return tempValue + 'KB';
    } else if(tempValue < 1024) {
      return value + 'MB';
    } else {
      tempValue = tempValue/1024;
      return tempValue + 'GB';
    }
  }

}

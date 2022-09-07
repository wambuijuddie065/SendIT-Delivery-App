import { Pipe, PipeTransform } from '@angular/core';
import { ParcelInterface } from '../Interfaces/interfaces';

@Pipe({
  name: 'dispatched'
})
export class DispatchedPipe implements PipeTransform {

  transform(value: ParcelInterface[]): ParcelInterface[] {
    return value.filter(function(data:ParcelInterface){
      return (data.status)==='Dispatched'
    })
  }

}

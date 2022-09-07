import { Pipe, PipeTransform } from '@angular/core';
import { ParcelInterface } from '../Interfaces/interfaces';

@Pipe({
  name: 'delivered'
})
export class DeliveredPipe implements PipeTransform {

  transform(value:ParcelInterface[],status:string): ParcelInterface[] {
    return value.filter(function(data:ParcelInterface){
      return (data.status)==='Delivered'
    })
  }

}

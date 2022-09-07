import { Component, OnInit } from '@angular/core';
import { ParcelInterface } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-received-parcels',
  templateUrl: './received-parcels.component.html',
  styleUrls: ['./received-parcels.component.css']
})
export class ReceivedParcelsComponent implements OnInit {
  parcelsArr:ParcelInterface[]=[{
    to:'Judy Wambui',
    contact:'0712345678',
    location:'Nyeri',
    parcel_id:'45678',
    description:'dfghjkl',
    status:'dispatched'


  }]


  constructor() { }

  ngOnInit(): void {
  }

}

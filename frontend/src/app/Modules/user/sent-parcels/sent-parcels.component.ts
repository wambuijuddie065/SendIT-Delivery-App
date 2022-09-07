import { Component, OnInit } from '@angular/core';
import { ParcelInterface } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-sent-parcels',
  templateUrl: './sent-parcels.component.html',
  styleUrls: ['./sent-parcels.component.css']
})
export class SentParcelsComponent implements OnInit {
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

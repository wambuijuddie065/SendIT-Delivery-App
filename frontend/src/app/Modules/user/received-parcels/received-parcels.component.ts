import { Component, OnInit } from '@angular/core';
import { ParcelInterface } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-received-parcels',
  templateUrl: './received-parcels.component.html',
  styleUrls: ['./received-parcels.component.css']
})
export class ReceivedParcelsComponent implements OnInit {
  parcelsArr:ParcelInterface[]=[{
    sender_details:"",
    receiver_details:"",
    pick_up:"",
    destination:"",
    parcel_id:"",
    description:"",
    weight:"",
    
    status:"",
  }

   
  
  ]


  constructor() { }

  ngOnInit(): void {
  }

}

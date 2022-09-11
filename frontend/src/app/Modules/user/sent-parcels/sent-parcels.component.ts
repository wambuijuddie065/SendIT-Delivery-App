import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ParcelInterface } from 'src/app/Interfaces/interfaces';
import { LoadParcels } from '../../admin/AdminStates/parcel.action';
import { getParcels, ParcelState } from '../../admin/AdminStates/parcel.reducer';

@Component({
  selector: 'app-sent-parcels',
  templateUrl: './sent-parcels.component.html',
  styleUrls: ['./sent-parcels.component.css']
})
export class SentParcelsComponent implements OnInit {
  parcels$=this.store.select(getParcels)
  origin!:string
  sender_details!:string
  receiver_details!:string
  page:number=1

  constructor(private router:Router,private route:ActivatedRoute,private store:Store<ParcelState>) { }

  ngOnInit(): void {
  }
  loadOrders(){
    this.store.dispatch(LoadParcels())
  }
  orderDetails(sender_details: string, origin: string, receiver_details: string) {
    
    this.origin = origin;
    this.sender_details = sender_details;
  }

}

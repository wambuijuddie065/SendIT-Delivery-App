import { Component, OnInit } from '@angular/core';
import { ParcelInterface } from 'src/app/Interfaces/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { getSentParcel } from '../UserStates/reducers';
import * as fromParcel from '../UserStates/reducers';
import * as parcelActions from '../UserStates/actions';
import { UserService } from 'src/app/Services/user.service';
import { AdminService } from 'src/app/Services/admin.service';
@Component({
  selector: 'app-received-parcels',
  templateUrl: './received-parcels.component.html',
  styleUrls: ['./received-parcels.component.css']
})
export class ReceivedParcelsComponent implements OnInit {
  parcels$=this.store.select(fromParcel.getReceivedParcel)
  receiver_details!:string
  page:number=1
  srch: string = '';



  constructor(private router:Router,
    private route:ActivatedRoute,
    private store:Store<fromParcel.ParcelState>,
    private actRoute: ActivatedRoute,
    private userService:UserService) { }

  ngOnInit(): void {
    const email=localStorage.getItem('email') as string
    this.loadReceivedParcels()
    this.store.dispatch(parcelActions.email({email}))
    this.userService.search$.subscribe((response) => {
      this.srch = response;
  })}
loadReceivedParcels(){
  this.store.dispatch(parcelActions.LoadReceivedParcels())
}
viewParcel(id:string){
  this.store.dispatch(parcelActions.SelectedId({ id }))
  this.router.navigate([`/user/view/${id}`], { relativeTo: this.actRoute });
}
}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getParcel, ParcelState } from '../AdminStates/parcel.reducer';
import * as ParcelActions from '../AdminStates/parcel.action'

@Component({
  selector: 'app-view-parcel',
  templateUrl: './view-parcel.component.html',
  styleUrls: ['./view-parcel.component.css']
})
export class ViewParcelComponent implements OnInit {

  id!:number
  parcel$=this.store.select(getParcel)

  constructor(private store:Store<ParcelState>,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param=>{this.id=+param['id']})
    // this.store.dispatch(ParcelActions.SelectedId({id:this.id}))
  }


}

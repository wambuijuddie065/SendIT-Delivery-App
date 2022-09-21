import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getParcel, ParcelState } from '../UserStates/reducers';
import * as ParcelActions from '../UserStates/actions'

@Component({
  selector: 'app-parcel-details',
  templateUrl: './parcel-details.component.html',
  styleUrls: ['./parcel-details.component.css']
})
export class ParcelDetailsComponent implements OnInit {
  id!:string
  parcel$=this.store.select(getParcel)

  constructor(private store:Store<ParcelState>,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(param=>{this.id=param['id']})
    // this.store.dispatch(ParcelActions.SelectedId({id:this.id}))
  }
  goBack(){
      this.router.navigate(['/user/sent-parcels'])


  }
}

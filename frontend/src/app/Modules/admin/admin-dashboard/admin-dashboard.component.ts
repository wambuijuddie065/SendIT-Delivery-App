import { Component, OnInit } from '@angular/core';
import { ParcelInterface } from 'src/app/Interfaces/interfaces';
import { Store ,select} from '@ngrx/store';
import * as parcelActions from '../AdminStates/parcel.action'
import { Observable } from 'rxjs';
import * as fromParcel from '../AdminStates/parcel.reducer'


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  parcels$!: Observable<ParcelInterface[]>
  

  constructor(private store:Store<fromParcel.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new parcelActions.LoadParcels())
    this.parcels$=this.store.pipe(select(fromParcel.getParcels))
  }

}

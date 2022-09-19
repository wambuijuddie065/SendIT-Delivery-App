

import { ParcelInterface } from 'src/app/Interfaces/interfaces';
import { Store, select } from '@ngrx/store';
import * as parcelActions from '../AdminStates/parcel.action';
import { Observable } from 'rxjs';
import * as fromParcel from '../AdminStates/parcel.reducer';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dispatched',
  templateUrl: './dispatched.component.html',
  styleUrls: ['./dispatched.component.css']
})
export class DispatchedComponent implements OnInit {

  parcels$ = this.store.pipe(select(fromParcel.getParcels));
  page:number=1
  srch:string=''

  constructor(
    private store: Store<fromParcel.AppState>,
    private router: Router,
    private actRoute: ActivatedRoute,
    private adminService:AdminService
  ) {}

  ngOnInit(): void {
    this.loadParcels();
    this.adminService.search$.subscribe((response)=>{
      this.srch=response
    })
  }

  loadParcels() {
    this.store.dispatch(parcelActions.LoadParcels());
  }
  onDelete(id:string) {
    this.store.dispatch(parcelActions.DeleteParcel({ id }));
    this.store.dispatch(parcelActions.LoadParcels());
  }
  viewParcel(id:string) {
    this.store.dispatch(parcelActions.SelectedId({ id }));
    this.router.navigate([`/admin/view/${id}`], { relativeTo: this.actRoute });
  }

}

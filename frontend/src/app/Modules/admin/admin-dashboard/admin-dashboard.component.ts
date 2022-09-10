import { Component, OnInit } from '@angular/core';
import { ParcelInterface } from 'src/app/Interfaces/interfaces';
import { Store, select } from '@ngrx/store';
import * as parcelActions from '../AdminStates/parcel.action';
import { Observable } from 'rxjs';
import * as fromParcel from '../AdminStates/parcel.reducer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  // parcels$!: Observable<ParcelInterface[]>
  parcels$ = this.store.pipe(select(fromParcel.getParcels));

  constructor(
    private store: Store<fromParcel.AppState>,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadParcels();
  }

  loadParcels() {
    this.store.dispatch(parcelActions.LoadParcels());
  }
  onDelete(id: number = 0) {
    this.store.dispatch(parcelActions.DeleteParcel({ id }));
    this.store.dispatch(parcelActions.LoadParcels());
  }
  viewParcel(id: number = 0) {
    this.store.dispatch(parcelActions.SelectedId({ id }));
    this.router.navigate([`/admin/view/${id}`], { relativeTo: this.actRoute });
  }
}

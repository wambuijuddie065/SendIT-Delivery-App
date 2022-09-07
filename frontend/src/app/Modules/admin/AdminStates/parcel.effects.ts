import { Injectable } from '@angular/core';
import * as parcelAction from '../AdminStates/parcel.action';
import { ParcelInterface } from 'src/app/Interfaces/interfaces';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AdminService } from 'src/app/Services/admin.service';
import { Action } from '@ngrx/store';

@Injectable()
export class ParcelEffect {
  constructor(private actions$: Actions, private adminService: AdminService) {}
  @Effect()
  loadParcels$: Observable<Action> = this.actions$.pipe(
    ofType<parcelAction.LoadParcels>(
      parcelAction.ParcelActionTypes.LOAD_PARCELS
    ),
    mergeMap((actions: parcelAction.LoadParcels) =>
      this.adminService.getParcels().pipe(
        map(
          (parcels: ParcelInterface[]) =>
            new parcelAction.LoadParcelsSuccess(parcels),
          catchError((err) => of(new parcelAction.LoadParcelsFail(err)))
        )
      )
    )
  );
}

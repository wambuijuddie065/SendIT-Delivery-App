import { Injectable } from '@angular/core';

import { ParcelInterface } from 'src/app/Interfaces/interfaces';
import {  Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError, concatMap, tap } from 'rxjs/operators';
import { AdminService } from 'src/app/Services/admin.service';
import { Action } from '@ngrx/store';
import * as ParcelActions from '../UserStates/actions'
import { UserService } from 'src/app/Services/user.service';


@Injectable()
export class UserParcelEffect {
  constructor(private actions$: Actions, private userService:UserService) {}
   loadSentParcel=createEffect(()=>{
    return this.actions$.pipe(
      ofType(ParcelActions.LoadSentParcels),
      mergeMap(()=>this.userService.getSentParcels().pipe(
        map(parcels=>ParcelActions.LoadSentParcelsSuccess({parcels}),
      catchError(error=> of(ParcelActions.LoadSentParcelsFail({error:error}))))))
    )
   })



   loadReceivedParcel=createEffect(()=>{
    return this.actions$.pipe(
      ofType(ParcelActions.LoadReceivedParcels),
      mergeMap(()=>this.userService.getReceivedParcels().pipe(
        map(parcels=>ParcelActions.LoadReceivedParcelsSuccess({parcels}),
      catchError(error=> of(ParcelActions.LoadReceivedParcelsFail({error:error}))))))
    )
   })

 
}

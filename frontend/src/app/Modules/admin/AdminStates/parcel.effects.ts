import { Injectable } from '@angular/core';

import { ParcelInterface } from 'src/app/Interfaces/interfaces';
import {  Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError, concatMap } from 'rxjs/operators';
import { AdminService } from 'src/app/Services/admin.service';
import { SignupService } from 'src/app/Services/signup.service';
import { Action } from '@ngrx/store';
import * as ParcelActions from '../AdminStates/parcel.action'

@Injectable()
export class ParcelEffect {
  constructor(private actions$: Actions, private adminService: AdminService,private signupService:SignupService) {}
   loadParcel=createEffect(()=>{
    return this.actions$.pipe(
      ofType(ParcelActions.LoadParcels),
      concatMap(()=>this.adminService.getParcels().pipe(map(parcels=>(ParcelActions.LoadParcelsSuccess({parcels})),
      catchError(error=> of(ParcelActions.LoadParcelsFail({error:error}))))))
    )
   })

   addParcel=createEffect(()=>{
    return this.actions$.pipe(
      ofType(ParcelActions.AddParcel),
      mergeMap(action=>this.adminService.addParcel(action.newParcel).pipe(
        map(res=>ParcelActions.AddParcelSuccess({addParcelMessage:res.message})),
        catchError(error=> of(ParcelActions.AddParcelFail({error:error})))

      ))
    )
   })
   deleteParcel = createEffect(()=>{
    return this.actions$.pipe(
      ofType(ParcelActions.DeleteParcel),
      mergeMap(action=>this.adminService.deleteParcel(action.id).pipe(
        map(res=>ParcelActions.DeleteParcelSuccess({deleteParcelMessage:res.message})),
        catchError(error=>of(ParcelActions.DeleteParcelFail({error:error.message})))
      ))
    )
  })
  updateParcel=createEffect(()=>{
    return this.actions$.pipe(
      ofType(ParcelActions.UpdateParcel),
      mergeMap(action=>this.adminService.updateParcel(action.updatedParcel).pipe(
        map(res=>ParcelActions.UpdateParcelSuccess({updateParcelMessage:res.message})),
        catchError(error=> of(ParcelActions.UpdateParcelFail({error:error})))

      ))
    )
   })
  //  addClient = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(ParcelActions.RegisterClient),
  //     mergeMap((action) =>
  //       this.signupService.signUp(action.newClient).pipe(
  //         map((res) =>
  //           ParcelActions.RegisterClientSuccess({ addClientMessage: res.message })
  //         ),
  //         catchError((error) =>
  //           of(ParcelActions.RegisterClientFailure({ error: error }))
  //         )
  //       )
  //     )
  //   );
  // });
  loadClient = createEffect(() => {
    return this.actions$.pipe(
      ofType(ParcelActions.LoadClients),
      concatMap(() =>
        this.signupService.getclients().pipe(
          map((clients) => ParcelActions.LoadClientsSuccess({ clients })),
          catchError((error) =>
            of(ParcelActions.LoadClientsFailure({ error: error.message }))
          )
        )
      )
    );
  });
 
}

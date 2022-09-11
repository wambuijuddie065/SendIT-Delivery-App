import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { SentParcelsComponent } from './sent-parcels/sent-parcels.component';
import { ReceivedParcelsComponent } from './received-parcels/received-parcels.component';
import { ParcelDetailsComponent } from './parcel-details/parcel-details.component';
import { StoreModule } from '@ngrx/store';
import { parcelReducer } from '../admin/AdminStates/parcel.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ParcelEffect } from '../admin/AdminStates/parcel.effects';


@NgModule({
  declarations: [
    UserComponent,
    SentParcelsComponent,
    ReceivedParcelsComponent,
    ParcelDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    StoreModule.forFeature("parcels",parcelReducer),
    EffectsModule.forFeature([ParcelEffect]),
  ]
})
export class UserModule { }

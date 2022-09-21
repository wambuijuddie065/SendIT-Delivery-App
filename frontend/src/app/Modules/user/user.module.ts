import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { SentParcelsComponent } from './sent-parcels/sent-parcels.component';
import { ReceivedParcelsComponent } from './received-parcels/received-parcels.component';
import { ParcelDetailsComponent } from './parcel-details/parcel-details.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { userReducer } from './UserStates/reducers';
import { UserParcelEffect } from './UserStates/effects';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserComponent,
    SentParcelsComponent,
    ReceivedParcelsComponent,
    ParcelDetailsComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    StoreModule.forFeature("ClientParcels",userReducer),
    EffectsModule.forFeature([UserParcelEffect ]),
    NgxPaginationModule,
    FormsModule
  ]
})
export class UserModule { }

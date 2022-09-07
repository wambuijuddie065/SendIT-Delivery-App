import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { SentParcelsComponent } from './sent-parcels/sent-parcels.component';
import { ReceivedParcelsComponent } from './received-parcels/received-parcels.component';
import { ParcelDetailsComponent } from './parcel-details/parcel-details.component';


@NgModule({
  declarations: [
    UserComponent,
    SentParcelsComponent,
    ReceivedParcelsComponent,
    ParcelDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }

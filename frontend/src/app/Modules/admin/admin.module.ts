import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule,Actions } from '@ngrx/effects';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AddNewDeliveryComponent } from './add-new-delivery/add-new-delivery.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewParcelComponent } from './view-parcel/view-parcel.component';
import { UpdateStatusComponent } from './update-status/update-status.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import{parcelReducer} from './AdminStates/parcel.reducer'
import { ParcelEffect } from './AdminStates/parcel.effects';




@NgModule({
  declarations: [
    AdminComponent,
    AddNewDeliveryComponent,
    AdminDashboardComponent,
    ViewParcelComponent,
    UpdateStatusComponent
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature("parcels",parcelReducer),
    EffectsModule.forFeature([ParcelEffect]),

  ]
})
export class AdminModule { }

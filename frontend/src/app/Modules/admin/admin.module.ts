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
import { NgxPaginationModule } from 'ngx-pagination';
import { DeliveredPipe } from 'src/app/Pipes/delivered.pipe';
import { DispatchedPipe } from 'src/app/Pipes/dispatched.pipe';
import { DispatchedComponent } from './dispatched/dispatched.component';
import { AuthService } from 'src/app/Services/auth.service';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [
    AdminComponent,
    AddNewDeliveryComponent,
    AdminDashboardComponent,
    ViewParcelComponent,
    UpdateStatusComponent,
    DeliveredPipe,
    DispatchedPipe,
    DispatchedComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature("parcels",parcelReducer),
    EffectsModule.forFeature([ParcelEffect]),
    NgxPaginationModule

  ],
  providers:[
    
  ]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AddNewDeliveryComponent } from './add-new-delivery/add-new-delivery.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewParcelComponent } from './view-parcel/view-parcel.component';
import { UpdateStatusComponent } from './update-status/update-status.component';


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
    AdminRoutingModule
  ]
})
export class AdminModule { }

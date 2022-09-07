import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParcelsGuardService } from 'src/app/Guards/parcels-guard.service';
import { AddNewDeliveryComponent } from './add-new-delivery/add-new-delivery.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateStatusComponent } from './update-status/update-status.component';
import { ViewParcelComponent } from './view-parcel/view-parcel.component';

const routes: Routes = [{
  path:'',component:AdminComponent,canActivate:[ParcelsGuardService], children:[
    {path:'add',component:AddNewDeliveryComponent},
    {path:'dashboard',component:AdminDashboardComponent},
    {path:'view',component:ViewParcelComponent},
    {path:'update',component:UpdateStatusComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/Guards/auth-guard.service';
import { AddNewDeliveryComponent } from './add-new-delivery/add-new-delivery.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { DeliveredComponent } from './delivered/delivered.component';
import { DispatchedComponent } from './dispatched/dispatched.component';

import { UpdateStatusComponent } from './update-status/update-status.component';
import { ViewParcelComponent } from './view-parcel/view-parcel.component';

const routes: Routes = [{
  path:'',component:AdminComponent,canActivate:[AuthGuard], children:[
    {path:'add',component:AddNewDeliveryComponent},
    {path:'dashboard',component:AdminDashboardComponent},
    {path:'view/:id',component:ViewParcelComponent},
    {path:'update',component:UpdateStatusComponent},
    {path:'dispatched',component:DispatchedComponent},
    {path:'delivered',component:DeliveredComponent}
    
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParcelsGuardService } from 'src/app/Guards/parcels-guard.service';
import { ParcelDetailsComponent } from './parcel-details/parcel-details.component';
import { ReceivedParcelsComponent } from './received-parcels/received-parcels.component';
import { SentParcelsComponent } from './sent-parcels/sent-parcels.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',component:UserComponent,canActivate:[ParcelsGuardService], children:[
    {path:'sent-parcels',component:SentParcelsComponent},

    {path:'received-parcels',component:ReceivedParcelsComponent},
    {path:'view',component:ParcelDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceivedParcelsComponent } from './received-parcels/received-parcels.component';
import { SentParcelsComponent } from './sent-parcels/sent-parcels.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',component:UserComponent,children:[
    {path:'sent-parcels',component:SentParcelsComponent},

    {path:'received-parcels',component:ReceivedParcelsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Modules/shared/homepage/homepage.component';

const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},
{ path: 'home', component: HomepageComponent },
{path:'auth',loadChildren:()=>import('./Modules/auth/auth.module').then(m=>m.AuthModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

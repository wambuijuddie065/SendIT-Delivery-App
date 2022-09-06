import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Modules/shared/about/about.component';
import { HomepageComponent } from './Modules/shared/homepage/homepage.component';
import { PageNotFoundComponent } from './Modules/shared/page-not-found/page-not-found.component';

const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},
{ path: 'home', component: HomepageComponent },
{path:'about',component:AboutComponent},
{path:'auth',loadChildren:()=>import('./Modules/auth/auth.module').then(m=>m.AuthModule)},
{path:'**',component:PageNotFoundComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

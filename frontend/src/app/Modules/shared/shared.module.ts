import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { MessagesComponent } from './messages/messages.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { AppBackgroundDirective } from 'src/app/Directives/app-background.directive';
import { SearchPipe } from 'src/app/Pipes/search.pipe';
import { DispatchedPipe } from 'src/app/Pipes/dispatched.pipe';
import { DeliveredPipe } from 'src/app/Pipes/delivered.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    MessagesComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    SearchPipe,
    AppBackgroundDirective,
    DispatchedPipe,
    DeliveredPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
   
    
  ],
  exports:[
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    MessagesComponent,
    HomepageComponent,
    NavbarComponent,
    SearchPipe,
    DispatchedPipe,
    DeliveredPipe,
    AppBackgroundDirective
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import { SharedModule } from './Modules/shared/shared.module';
import { DispatchedPipe } from './pipes/dispatched.pipe';
import { DeliveredPipe } from './pipes/delivered.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DispatchedPipe,
    DeliveredPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

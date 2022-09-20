import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'


import { SharedModule } from './Modules/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    AppComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    HttpClientModule,
    EffectsModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule
   
  ],
  providers: [
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }

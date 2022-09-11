import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'


import { SharedModule } from './Modules/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { AppBackgroundDirective } from './directives/app-background.directive';




@NgModule({
  declarations: [
    AppComponent,
    AppBackgroundDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    HttpClientModule,
    EffectsModule.forRoot([]),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

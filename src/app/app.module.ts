import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DrinksComponent } from './drinks/drinks.component';
import { FilterComponent } from './filter/filter.component';
import {HttpClientModule} from '@angular/common/http';
import {AppServiceService} from './app-service.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DrinksComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

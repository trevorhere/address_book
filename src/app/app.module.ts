import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressBookComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

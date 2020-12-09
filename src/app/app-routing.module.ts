import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddressBookComponent } from '../app/address-book/address-book.component'
import { CalendarComponent } from '../app/calendar/calendar.component'
import { AppComponent } from '../app/app.component'

const routes: Routes = [
  { path: 'address-book-component', component: AddressBookComponent },
  { path: 'calendar-component', component: CalendarComponent },
  { path: '', component: AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { BookingComponent } from './booking/booking.component';
import { GuestListComponent } from './exercices/cycle-de-vie/guest-list/guest-list.component';
import { ValidationComponent } from './exercices/cycle-de-vie/validation/validation.component';
import { UserProfileComponent } from './exercices/cycle-de-vie/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsItemComponent,
    BookingComponent,
    GuestListComponent,
    ValidationComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

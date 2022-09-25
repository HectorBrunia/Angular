import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneCartComponent } from './phone-cart/phone-cart.component';
import { PhoneHomeComponent } from './phone-home/phone-home.component';
import { PhoneAboutComponent } from './phone-about/phone-about.component';
import { FormsModule } from '@angular/forms';
import { InputIntComponent } from './input-int/input-int.component';
@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneCartComponent,
    PhoneHomeComponent,
    PhoneAboutComponent,
    InputIntComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

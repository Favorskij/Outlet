import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import { PageTwoComponent } from './page-two/page-two.component';
import { PageOneComponent } from './page-one/page-one.component';

@NgModule({
  declarations: [
    AppComponent,
    PageTwoComponent,
    PageOneComponent,
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

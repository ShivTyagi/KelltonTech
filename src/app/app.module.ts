import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AnagramComponent } from './anagram/anagram.component';
import { TempTrackerComponent } from './temp-tracker/temp-tracker.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AnagramComponent,
    TempTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

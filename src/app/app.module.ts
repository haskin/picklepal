import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './component/profile/profile.component';
import { PalComponent } from './component/pal/pal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

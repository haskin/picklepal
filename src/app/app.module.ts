import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './component/profile/profile.component';
import { PalComponent } from './component/pal/pal.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path: "", component: AppComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

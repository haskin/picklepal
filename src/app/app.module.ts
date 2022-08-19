import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './component/profile/profile.component';
import { PalComponent } from './component/pal/pal.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PalsComponent } from './component/pals/pals.component';
import { FilterComponent } from './component/filter/filter.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "", component: HomeComponent,
  },
  {
    path: "pals", component: PalsComponent
  },
  {
    path: 'pal/:id', component: PalComponent 
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PalComponent,
    HomeComponent,
    PalsComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

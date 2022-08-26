import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './component/profile/profile.component';
import { PalComponent } from './component/pal/pal.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PalsComponent } from './component/pals/pals.component';
import { FilterComponent } from './component/filter/filter.component';
import { FiltersComponent } from './component/filters/filters.component';
import { FormsModule } from '@angular/forms';
import { NavigationBarComponent } from './component/navigationbar/navigation-bar.component';
import { PalsService } from './service/pals.service';
import { ProfileService } from './service/profile.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'pals',
    component: PalsComponent,
  },
  {
    path: 'pal/:id',
    component: PalComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PalComponent,
    HomeComponent,
    PalsComponent,
    FilterComponent,
    FiltersComponent,
    NavigationBarComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
  providers: [PalsService, ProfileService],
  bootstrap: [AppComponent],
})
export class AppModule {}

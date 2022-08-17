import { Component } from '@angular/core';
import { profileData } from './data/profileData';
import { Profile } from './model/profile';
import { RouterModule, Routes } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Pickel Pal';
  index: number = 0;
  profiles: Profile[] = profileData;
  pals: Set<string> = new Set<string>;
  increaseIndex() {
    console.log("clicked arrow");
    this.index = (this.index + 1) % profileData.length
  }
  addPal() {
    this.pals.add(this.profiles[this.index].name);
    this.index = (this.index + 1) % profileData.length
  }
}

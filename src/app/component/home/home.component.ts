import { Component, OnInit } from '@angular/core';
import { profileData } from 'src/app/data/profileData';
import { Profile } from 'src/app/model/profile';

const pals: Set<number> = new Set<number>;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Pickel Pal';
  index: number = 0;
  profiles: Profile[] = profileData;
  pals: Set<number> = pals;
  // pals: Set<string> = new Set<string>;
  increaseIndex() {
    console.log("clicked arrow");
    this.index = (this.index + 1) % profileData.length
  }
  addPal() {
    pals.add(this.index);
    this.index = (this.index + 1) % profileData.length
  }
  constructor() { }

  ngOnInit(): void {
  }

}

export { pals }

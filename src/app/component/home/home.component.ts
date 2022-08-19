import { Component, OnInit } from '@angular/core';
import { profileData } from 'src/app/data/profileData';
import { Profile, SkillLevel } from 'src/app/model/profile';
import { PalService } from 'src/app/service/pal.service';

// const pals: Set<number> = new Set<number>;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Pickle Pal';
  index: number = 0;
  profiles: Profile[] = profileData;
  pals: Set<number> = new Set<number>();
  skillLevels: SkillLevel[] = [SkillLevel.Beginner, SkillLevel.Intermediate, SkillLevel.Advanced, SkillLevel.Master];

  // pals: Set<string> = new Set<string>;
  increaseIndex() {
    console.log("clicked arrow");
    this.index = (this.index + 1) % profileData.length
  }
  addPal() {
    this.palService.addPal(this.index);
    this.index = (this.index + 1) % profileData.length
  }

  // constructor injection
  constructor(private palService: PalService) {
    this.pals = palService.getPals();
  }

  ngOnInit(): void {
  }

}

// export { pals }

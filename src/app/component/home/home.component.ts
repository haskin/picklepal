import { Component, OnInit } from '@angular/core';
import { profileData } from 'src/app/data/profileData';
import { Profile, SkillLevel } from 'src/app/model/profile';
import { PalService } from 'src/app/service/pal.service';
import { ProfileService } from 'src/app/service/profile.service';

// const pals: Set<number> = new Set<number>;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Pickle Pal';
  index: number = 0;
  profiles: Profile[] = profileData;
  pals: Set<number> = new Set<number>();
  skillLevel: SkillLevel = SkillLevel.Beginner;
  cardSwipe: string = '';
  cardDisplay: string = '';
  // pals: Set<string> = new Set<string>;
  leftSwipe() {
    this.cardSwipe = 'translate(-1000px, 250px) rotate(-60deg)';
    this.index = (this.index + 1) % this.profiles.length;
    setTimeout(() => {
      this.cardDisplay = 'none';
      setTimeout(() => { this.resetCardStyle() }, 250);
    }, 100);
  }
  rightSwipe() {
    this.palService.addPal(this.index);
    this.index = (this.index + 1) % this.profiles.length;
    this.cardSwipe = 'translate(1000px, 250px) rotate(60deg)';
    setTimeout(() => {
      this.cardDisplay = 'none';
      setTimeout(() => { this.resetCardStyle() }, 250);
    }, 100);
}

  resetCardStyle() {
    this.cardSwipe = '';
    this.cardDisplay = '';
  }
  // constructor injection
  constructor(
    private palService: PalService,
    private profileService: ProfileService
  ) {
    this.pals = palService.getPals();
  }

  ngOnInit(): void {}

  filterBySkillLevel(skillLevelFilter: SkillLevel) {
    this.skillLevel = skillLevelFilter;
    // console.log(this.skillLevel);
    this.filter();

    //profileData = profileData.filter()
  }

  filter() {
    let allProfiles = this.profileService.getProfiles();
    this.profiles = allProfiles.filter(
      (profile) => profile.skillLevel == this.skillLevel
    );
  }
}

// export { pals }

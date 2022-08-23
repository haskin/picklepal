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
  // pals: Set<string> = new Set<string>;
  leftSwipe() {
    console.log('clicked arrow');
    this.index = (this.index + 1) % this.profiles.length;
  }
  rightSwipe() {
    this.palService.addPal(this.index);
    this.index = (this.index + 1) % this.profiles.length;
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

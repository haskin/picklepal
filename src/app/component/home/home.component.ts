import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { SkillLevel } from 'src/app/model/skillLevel.enum';
import { Profile } from 'src/app/model/profile';
import { PalsService } from 'src/app/service/pals.service';
import { ProfileService } from 'src/app/service/profile.service';

// const pals: Set<number> = new Set<number>;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'Pickle Pal';
  index: number = 0;
  profileSubscription: Subscription;
  profiles: Profile[] = [];
  skillLevel: SkillLevel = SkillLevel.All;
  cardSwipe: string = '';
  cardDisplay: string = '';
  // pals: Set<string> = new Set<string>;
  leftSwipe() {
    this.cardSwipe = 'translate(-1000px, 250px) rotate(-60deg)';
    this.index = (this.index + 1) % this.profiles.length;
    setTimeout(() => {
      this.cardDisplay = 'none';
      setTimeout(() => {
        this.resetCardStyle();
      }, 250);
    }, 100);
  }
  rightSwipe() {
    this.palsService.addPal(this.index);
    this.index = (this.index + 1) % this.profiles.length;
    this.cardSwipe = 'translate(1000px, 250px) rotate(60deg)';
    setTimeout(() => {
      this.cardDisplay = 'none';
      setTimeout(() => {
        this.resetCardStyle();
      }, 250);
    }, 100);
  }

  resetCardStyle() {
    this.cardSwipe = '';
    this.cardDisplay = '';
  }
  // constructor injection
  constructor(
    private palsService: PalsService,
    private profileService: ProfileService
  ) {
    this.profileSubscription = new Subscription();
    // console.log(this.profiles);
  }

  ngOnInit(): void {
    console.log('in init');
    this.profileSubscription = this.profileService
      .pull()
      .subscribe((profiles) => (this.profiles = profiles));
  }

  filterBySkillLevel(skillLevelFilter: SkillLevel) {
    this.skillLevel = skillLevelFilter;
    // console.log(this.skillLevel);
    this.filter();

    //profileData = profileData.filter()
  }

  filter() {
    this.profiles = this.profileService.getProfiles();
    if (this.skillLevel !== SkillLevel.All)
      this.profiles = this.profiles.filter(
        (profile) => profile.skillLevel == this.skillLevel
      );
    this.index = 0;
  }

  ngOnDestroy(): void {
    this.profileSubscription.unsubscribe();
  }
}

// export { pals }

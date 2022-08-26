import { Injectable } from '@angular/core';
import { profileData } from '../data/profileData';
import { Profile } from '../model/profile';
import { FilterEvent } from '../model/filterEvent.enum';
import {
  BehaviorSubject,
  filter,
  Observable,
  of,
  Subject,
  Subscription,
  tap,
} from 'rxjs';
import { OnInit } from '@angular/core';
import { FilterService } from './filter.service';
import { FilterType } from '../model/filterTypes.enum';
import { SkillLevel } from '../model/skillLevel.enum';
import { MatchType } from '../model/matchType.enum';

@Injectable({
  providedIn: 'root',
})
export class ProfileService implements OnInit {
  profiles: Profile[] = [];
  profilesSubject: BehaviorSubject<Profile[]> = new BehaviorSubject(
    profileData
  );
  skillLevelFilter: string = SkillLevel.All;
  matchTypeFilter: string = MatchType.All;
  filterSubscription?: Subscription;

  constructor(private filterService: FilterService) {
    this.profiles = profileData;
    this.profilesSubject.next(this.profiles.slice());
    this.filterSubscription = filterService.pull().subscribe((filterEvent) => {
      this.updateFilter(filterEvent);
      this.filterProfiles();
    });
  }

  ngOnInit(): void {
    // this.profiles = profileData;
    // console.log('In profile Service');
    // this.profilesSubject.next(this.profiles.slice());
  }

  getProfilesObservable(): Observable<Profile[]> {
    return this.profilesSubject.asObservable();
  }

  pull(): Observable<Profile[]> {
    return this.profilesSubject.pipe(
      tap((value) => {
        console.log(value);
      })
    );
  }
  /**
   * Filters the profiles based on the current settings
   * of the filter fields(skillLevelFilter, matchTypeFilter....)
   * Updates the profileSubject with the new filtered profiles
   */
  filterProfiles() {
    console.log('filtering profiles');
    let filteredProfiles = this.profiles.slice();
    console.log(`Unfiltered profiles size: ${filteredProfiles.length}`);
    if (this.skillLevelFilter !== SkillLevel.All) {
      filteredProfiles = [
        ...filteredProfiles.filter((profile) => {
          return (
            profile.skillLevel === this.skillLevelFilter ||
            profile.skillLevel === SkillLevel.All
          );
        }),
      ];
    }
    if (this.matchTypeFilter !== MatchType.All) {
      filteredProfiles = [
        ...filteredProfiles.filter((profile) => {
          return (
            profile.matchType === this.matchTypeFilter ||
            profile.matchType === MatchType.All
          );
        }),
      ];
    }
    console.log(`Filtered Profiles Size: ${filteredProfiles.length}`);
    this.profilesSubject.next(filteredProfiles);
  }
  updateFilter(filterEvent: FilterEvent<FilterType>) {
    switch (filterEvent.type) {
      case FilterType.SkillLevel:
        this.skillLevelFilter = filterEvent.value;
        break;
      case FilterType.MatchType:
        this.matchTypeFilter = filterEvent.value;
        break;
    }
  }

  getProfiles(): Profile[] {
    return this.profiles.slice();
  }
}

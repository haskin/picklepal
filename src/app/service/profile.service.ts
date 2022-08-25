import { Injectable } from '@angular/core';
import { profileData } from '../data/profileData';
import { Profile } from '../model/profile';
import { BehaviorSubject, Observable, of, Subject, tap } from 'rxjs';
import { OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService implements OnInit {
  profiles: Profile[] = [];
  profilesSubject: BehaviorSubject<Profile[]> = new BehaviorSubject(
    profileData
  );

  constructor() {
    this.profiles = profileData;
    this.profilesSubject.next(this.profiles.slice());
    // this.profilesSubject.next(this.profiles.slice());
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

  getProfiles(): Profile[] {
    return this.profiles.slice();
  }
}

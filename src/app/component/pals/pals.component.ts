import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { profileData } from 'src/app/data/profileData';
import { Profile } from 'src/app/model/profile';
import { PalsService } from 'src/app/service/pals.service';
import { ProfileService } from 'src/app/service/profile.service';
// import { pals } from '../home/home.component';

@Component({
  selector: 'app-pals',
  templateUrl: './pals.component.html',
  styleUrls: ['./pals.component.css'],
})
export class PalsComponent implements OnInit, OnDestroy {
  pals$: Observable<Profile[]> = new Observable();

  // palsIds: Set<number> = new Set<number>();
  // palsIds$: Observable<Set<number>> = new Observable<Set<number>>();
  // profiles$: Observable<Profile[]> = new Observable();
  palsSubscription: Subscription = new Subscription();
  profilesSubscription: Subscription = new Subscription();
  // constructor injection is needed
  constructor(
    private palsService: PalsService,
    private profileService: ProfileService
  ) {
    // this.palIndices = palsService.getPals();
  }

  ngOnInit(): void {
    // this.palsSubscription = this.palsService.pull().subscribe((palsIds) => {
    //   this.palsIds = palsIds;
    // });
    this.pals$ = this.palsService.getPalsObservable();
    // this.profiles$ = this.profileService.getProfilesObservable();
    // this.profilesSubscription = this.profileService
    //   .pull()
    //   .subscribe((profiles) => {
    //     console.log('in profiles');
    //     this.profiles = profiles;
    // });
  }

  ngOnDestroy(): void {
    this.palsSubscription.unsubscribe();
    this.profilesSubscription.unsubscribe();
  }

  // need to use Service to delete Pals from the list
  deletePal(index: number): void {
    // this.palsService.removePal(profiles[index]);
  }
}

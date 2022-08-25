import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Profile } from '../model/profile';

@Injectable({
  providedIn: 'root',
})
export class PalsService {
  // palArray
  pals: Set<Profile> = new Set();
  // pals:Set<Profile> Set<Profile> = [];
  palsSubject: Subject<Set<Profile>> = new Subject();

  constructor() {
    this.palsSubject = new Subject();
    this.palsSubject.next(new Set(this.pals));
  }

  getPalsObservable(): Observable<Set<Profile>> {
    return of(this.pals);
  }

  getPals(): Set<Profile> {
    return this.pals;
  }

  addPal(pal: Profile) {
    this.pals = new Set(this.pals.add(pal));
    this.palsSubject.next(new Set(this.pals));
  }
  // addPal(index: number) {
  //   this.palsIds.add(index);
  //   console.log('adding pal');
  //   this.palsIdsSubject.next(new Set(this.palsIds));
  // }

  removePal(removePal: Profile) {
    this.pals.delete(removePal);
    // this.pals = this.pals.filter((pal) => pal.id !== removePal.id);
    this.palsSubject.next(new Set(this.pals));
  }
  // removePal(index: number) {
  //   this.palsIds.delete(index);
  //   this.palsIdsSubject.next(new Set(this.palsIds));
  // }

  pull(): Observable<Set<Profile>> {
    return this.palsSubject;
  }
}

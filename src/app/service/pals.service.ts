import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Profile } from '../model/profile';

@Injectable({
  providedIn: 'root',
})
export class PalsService {
  // palArray
  pals: Profile[] = [];
  palsSubject: Subject<Profile[]> = new Subject();

  constructor() {
    this.palsSubject = new Subject();
    this.palsSubject.next([...this.pals]);
  }

  getPalsObservable(): Observable<Profile[]> {
    return of(this.pals);
  }

  getPals(): Profile[] {
    return this.pals;
  }

  addPal(pal: Profile) {
    this.pals = [...this.pals, pal];
    this.palsSubject.next([...this.pals]);
  }
  // addPal(index: number) {
  //   this.palsIds.add(index);
  //   console.log('adding pal');
  //   this.palsIdsSubject.next(new Set(this.palsIds));
  // }

  removePal(removePal: Profile) {
    this.pals = this.pals.filter((pal) => pal.id !== removePal.id);
    this.palsSubject.next([...this.pals]);
  }
  // removePal(index: number) {
  //   this.palsIds.delete(index);
  //   this.palsIdsSubject.next(new Set(this.palsIds));
  // }

  pull(): Observable<Profile[]> {
    return this.palsSubject;
  }
}

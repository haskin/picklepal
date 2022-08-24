import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PalsService {
  // palArray
  palsIds: Set<number> = new Set();
  palsIdsSubject: Subject<Set<number>>;

  constructor() {
    this.palsIdsSubject = new Subject();
  }

  getPalsObservable(): Observable<Set<number>> {
    return of(this.palsIds);
  }

  getPals(): Set<number> {
    return new Set(this.palsIds);
  }

  addPal(index: number) {
    this.palsIds.add(index);
    console.log('adding pal');
    this.palsIdsSubject.next(new Set(this.palsIds));
  }

  removePal(index: number) {
    this.palsIds.delete(index);
    this.palsIdsSubject.next(new Set(this.palsIds));
  }

  pull(): Observable<Set<number>> {
    return this.palsIdsSubject;
  }
}

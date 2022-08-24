import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';

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

  getPals(): Set<number> {
    return new Set(this.palsIds);
  }

  addPal(index: number) {
    this.palsIds.add(index);
    this.palsIdsSubject.next(new Set(this.palsIds));
  }

  removePal(index: number) {
    this.palsIds.delete(index);
    this.palsIdsSubject.next(new Set(this.palsIds));
  }

  pull(): Subject<Set<number>> {
    return this.palsIdsSubject;
  }
}

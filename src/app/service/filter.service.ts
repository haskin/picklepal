import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { FilterEvent } from '../model/filterEvent.enum';
import { FilterType } from '../model/filterTypes.enum';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  filterEventSubject: Subject<FilterEvent<FilterType>> = new Subject();

  updateFilterEvent(event: FilterEvent<FilterType>): void {
    console.log(event);
    this.filterEventSubject.next(event);
  }

  constructor() {}
  pull(): Observable<FilterEvent<FilterType>> {
    return this.filterEventSubject.asObservable();
  }
}

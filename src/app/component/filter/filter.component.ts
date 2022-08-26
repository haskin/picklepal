import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterType } from 'src/app/model/filterTypes.enum';
import { FilterService } from 'src/app/service/filter.service';
import { FilterEvent } from 'src/app/model/filterEvent.enum';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['../filters/filters.component.css'],
})
export class FilterComponent<T> implements OnInit {
  @Input()
  title: string = '';
  @Input()
  selectedOption?: T;
  @Input()
  options?: T[];
  @Input()
  type?: FilterType;

  // @Output()
  // filterEvent = new EventEmitter<T>();

  optionChange(event: string) {
    let filterEvent: FilterEvent<FilterType> = {
      type: this.type,
      value: event,
    };
    console.log(filterEvent);
    this.filterService.updateFilterEvent(filterEvent);

    // console.log(event);
    // this.filterEvent.emit(event);
  }

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {}
}

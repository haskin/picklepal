import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FilterType } from 'src/app/model/filterTypes.enum';
import { MatchType } from 'src/app/model/matchType.enum';
import { SkillLevel } from 'src/app/model/skillLevel.enum';
import { FilterService } from 'src/app/service/filter.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
  defaultSkillLevel: SkillLevel = SkillLevel.All;
  skillLevels: SkillLevel[] = [
    SkillLevel.All,
    SkillLevel.Beginner,
    SkillLevel.Intermediate,
    SkillLevel.Advanced,
    SkillLevel.Master,
  ];
  filterSkillType: FilterType = FilterType.SkillLevel;
  // updateSkillLevelFilter(): void {}
  defaultMatchType: MatchType = MatchType.All;
  matchTypes: MatchType[] = [
    MatchType.All,
    MatchType.Singles,
    MatchType.Doubles,
  ];
  filterMatchType: FilterType = FilterType.MatchType;

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {}

  @Output()
  skillEvent = new EventEmitter<SkillLevel>();

  skillLevelChange(event: SkillLevel) {
    // console.log(event);
    // this.currentSkillLevel = event;
    this.skillEvent.emit(event);
  }

  @Output()
  genericEvent = new EventEmitter<any>();
  filterEvent(event: any) {
    this.genericEvent.emit(event);
  }
}

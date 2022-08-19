import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SkillLevel } from 'src/app/model/profile';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  tempValue = "test";
  currentSkillLevel: SkillLevel = SkillLevel.Beginner;
  skillLevels: SkillLevel[] = [SkillLevel.Beginner, SkillLevel.Master];
  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  skillEvent = new EventEmitter<SkillLevel>();

  skillLevelChange(event: SkillLevel) {
    // console.log(event);
    // this.currentSkillLevel = event;
    this.skillEvent.emit(event);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Profile, SkillLevel } from 'src/app/model/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input()
  profile: Profile = {
    name: "",
    age: 0,
    photo: "",
    skillLevel: SkillLevel.Advanced,
    description: ""
  };
  constructor() { }

  ngOnInit(): void {
  }

}

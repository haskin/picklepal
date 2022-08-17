import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { profileData } from 'src/app/data/profileData';
import { Profile, SkillLevel } from 'src/app/model/profile';

@Component({
  selector: 'app-pal',
  templateUrl: './pal.component.html',
  styleUrls: ['./pal.component.css']
})
export class PalComponent implements OnInit {
  @Input()
  profile: Profile = {
    name: "",
    age: 0,
    photo: "",
    skillLevel: SkillLevel.Advanced,
    description: ""
  };

  index: number = 0;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.index = Number(this.route.snapshot.paramMap.get('id'));
    this.profile = profileData[this.index];
  }

}

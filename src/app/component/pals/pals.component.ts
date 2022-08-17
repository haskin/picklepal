import { Component, OnInit } from '@angular/core';
import { profileData } from 'src/app/data/profileData';
import { Profile } from 'src/app/model/profile';
import { pals } from '../home/home.component';

@Component({
  selector: 'app-pals',
  templateUrl: './pals.component.html',
  styleUrls: ['./pals.component.css']
})
export class PalsComponent implements OnInit {
  palIndices: Set<number> = pals;
  profiles: Profile[] = profileData;
  constructor() { }

  ngOnInit(): void {
  }

}

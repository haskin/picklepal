import { Component, OnInit } from '@angular/core';
import { profileData } from 'src/app/data/profileData';
import { Profile } from 'src/app/model/profile';
import { PalsService } from 'src/app/service/pals.service';
// import { pals } from '../home/home.component';

@Component({
  selector: 'app-pals',
  templateUrl: './pals.component.html',
  styleUrls: ['./pals.component.css'],
})
export class PalsComponent implements OnInit {
  palsId: Set<number> = new Set<number>();
  profiles: Profile[] = profileData;

  // constructor injection is needed
  constructor(private palsService: PalsService) {
    // this.palIndices = palsService.getPals();

  }

  ngOnInit(): void {
    this.palsService.pull().subscribe((palsId) => {
      console.log(profileData);
      console.log(palsId);
      this.palsId = palsId;
    });
  }

  // need to use Service to delete Pals from the list
  deletePal(index: number): void {
    this.palsService.removePal(index);
  }
}

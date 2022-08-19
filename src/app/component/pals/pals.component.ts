import { Component, OnInit } from '@angular/core';
import { profileData } from 'src/app/data/profileData';
import { Profile } from 'src/app/model/profile';
import { PalService } from 'src/app/service/pal.service';
// import { pals } from '../home/home.component';

@Component({
  selector: 'app-pals',
  templateUrl: './pals.component.html',
  styleUrls: ['./pals.component.css']
})
export class PalsComponent implements OnInit {
  palIndices: Set<number> = new Set<number>();
  profiles: Profile[] = profileData;

  // constructor injection is needed
  constructor(private palService: PalService) {
    this.palIndices = palService.getPals();
   }

  ngOnInit(): void {
  }

  // need to use Service to delete Pals from the list
  deletePal(index: number): void {
    this.palService.removePal(index);
  }

}

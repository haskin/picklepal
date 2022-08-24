import { Component, OnInit } from '@angular/core';
import { PalsService } from 'src/app/service/pals.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {
  palsSize: number = 0;
  constructor(private palsService: PalsService) {
    palsService.pull().subscribe(palsId => { this.palsSize = palsId.size });
  }

  ngOnInit(): void {
    this.palsSize = this.palsService.getPals().size;
  }
}

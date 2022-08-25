import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PalsService } from 'src/app/service/pals.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit, OnDestroy {
  palsSize: number = 0;
  private palsSubscription = new Subscription();
  constructor(private palsService: PalsService) {}

  ngOnInit(): void {
    this.palsSubscription = this.palsService.pull().subscribe((pals) => {
      this.palsSize = pals.length;
    });
    //  this.palsSize = this.palsService.getPals().length;
  }

  ngOnDestroy(): void {
    this.palsSubscription.unsubscribe();
  }
}

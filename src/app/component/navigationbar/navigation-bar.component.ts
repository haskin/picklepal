import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PalsService } from 'src/app/service/pals.service';
import { Profile } from 'src/app/model/profile';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit, OnDestroy {
  palsSize: number = 0;
  pals$: Observable<Set<Profile>> = new Observable();
  private palsSubscription = new Subscription();
  constructor(private palsService: PalsService) {
    this.palsSize = this.palsService.getPals().size;
  }

  ngOnInit(): void {
    this.pals$ = this.palsService.getPalsObservable();
    this.palsSubscription = this.palsService.pull().subscribe((pals) => {
      console.log(`in navigation-bar, pals size ${pals.size}`);
      this.palsSize = pals.size;
    });
    //  this.palsSize = this.palsService.getPals().length;
  }

  ngOnDestroy(): void {
    this.palsSubscription.unsubscribe();
  }
}

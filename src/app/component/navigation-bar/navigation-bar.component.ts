import { Component, OnInit } from '@angular/core';
import { PalsService } from 'src/app/service/pals.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private palsService : PalsService) { }

  ngOnInit(): void {
  }

}

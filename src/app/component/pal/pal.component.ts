import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pal',
  templateUrl: './pal.component.html',
  styleUrls: ['./pal.component.css']
})
export class PalComponent implements OnInit {
  @Input()
  pals: Set<string> = new Set<string>;

  constructor() { }

  ngOnInit(): void {
  }

}

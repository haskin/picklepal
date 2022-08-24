import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PalsService {

  // palArray
  pals: Set<number> = new Set<number>;

  constructor() { }

  // getter
  getPals(): Set<number> {
    return this.pals;
  }

  // add
  addPal(index: number) {
    this.pals.add(index);
  }

  // delete
  removePal(index: number) {
    this.pals.delete(index);
  }

}

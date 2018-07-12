import { Injectable } from '@angular/core';
import { Houses } from '../mocks/mockhouses';
import { House } from '../domain/house';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HouseService {
  house: House;
  houses: House[] = Houses;

  constructor() { }

  getHouses(): House[] {
    return this.houses;
  }

  getHouse(id: number): Observable<House> {
    return of(this.houses.find(house => house.id === id));
  }

  deleteHouse(id: number): void {
     {
      let index = this.houses.findIndex(d => d.id === id); // find index in your array
      this.houses.splice(index, 1); // remove element from array
     }
  }

  updateHouse(updatedHouse: House): void {
    let index = this.houses.findIndex(house => house.id === updatedHouse.id);
    this.houses[index] = updatedHouse;
  }
}

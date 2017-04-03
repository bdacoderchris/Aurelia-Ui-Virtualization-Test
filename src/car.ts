import { autoinject, bindable, computedFrom } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import 'fetch';

@autoinject
export class Car {
  cars: Array<CarDetails> = [];

  constructor() {
  }

  attached() {
    this.addCars();
  }

  private addCars() {
    for (let i = 0; i < 500; i++) {
      this.cars.push({ color: 'red', vin: i});
    }
    console.log('cars: ', this.cars.length);

  }
}

export default class CarDetails {
  color: string;
  vin: number;
}

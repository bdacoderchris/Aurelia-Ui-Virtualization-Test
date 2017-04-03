import { bindable, computedFrom } from 'aurelia-framework'
import CarDetails from './car';

export class CarItem {
  
  @bindable car: CarDetails;
  
  activate(){
  }
  
  attached(){
      console.log("Bound: ", this.car.vin);
  }
}
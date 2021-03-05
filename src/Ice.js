import Fire from './Fire';

export default class Ice {
  constructor() {
    this.fire_protection = 1.5;
    this.ice_protection = 0.5;
  }
  get_element_mult(element){

    if(element.constructor === Fire) {
        return this.fire_protection;
    }

    if(element.constructor === Ice) {
        return this.ice_protection;
    }
  }
}
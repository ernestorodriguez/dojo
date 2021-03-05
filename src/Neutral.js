import Fire from '../src/Fire';
import Ice from '../src/Ice';

class Neutral {
    constructor() {
        this.fire_protection = 2;
        this.ice_protection = 2;
        this.neutral_protection = 1;
    }

    get_element_mult(element){
        if(element.constructor === Fire) {
            return this.fire_protection;
        }
        else if (element.constructor === Ice) {
            return this.ice_protection;
        }

        return this.neutral_protection;
    }
  }
  
  export default Neutral;
import Neutral from './Neutral';

class BareHands {
    constructor ({ element = new Neutral(), weight = 50} = {}) {
        this.weight = weight;
        this.element = element;
    }
    getDamageWeight() {
        return this.weight;
   }
}

export default BareHands;
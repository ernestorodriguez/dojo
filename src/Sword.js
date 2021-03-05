import Neutral from './Neutral';

class Sword {
  constructor({ element = new Neutral(), weight = 100} = {}) {
    this.element = element;
    this.weight = weight;
  }
  getDamageWeight() {
    return this.weight;
  }
}

export default Sword;

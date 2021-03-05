import Neutral from "./Neutral";

class Shield {
  constructor({ element = new Neutral(), protectionRatio = 0.5 } = {}) {
    this.element = element;
    this.protectionRatio = protectionRatio;
  }

  getProtectionRatio(adversarial_element) {
    const mult = this.element.get_element_mult(adversarial_element);
    
    const elementProtectionRatio = this.protectionRatio * mult;
    return elementProtectionRatio;
  }
}

export default Shield;
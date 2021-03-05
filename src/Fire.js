class Fire {
  constructor() {
    this.fire_protection = 0.25;
  }
  get_element_mult(element){
      if (element instanceof Fire ) {
        return this.fire_protection;
      }
      return 0;
  }

// if getVersusElement() == 'fire'{
// protection = 0.5
// }

}

export default Fire;
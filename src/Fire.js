class Fire {
  constructor() {
    this.fire_protection = 0.5;
  }
  get_element_mult(element){
    return this.fire_protection;
  }
}

export default Fire;
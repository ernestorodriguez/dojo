class Character {
  constructor () {
    this.level = 1;
    this.alive = true;
    this.health = 1000;
  }
  sufferDamage (weight) {
    this.health -= weight;
  }
  damage (otherCharacter) {
    otherCharacter.sufferDamage(50);
  }
}

export default Character;
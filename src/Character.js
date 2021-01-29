const MAX_HEALTH = 1000;
const DAMAGE_WEIGHT = 50;
const HEAL_AMOUNT = 50;
class Character {
  constructor () {
    this.level = 1;
    this.alive = true;
    this.health = MAX_HEALTH;
  }
  
  sufferDamage (weight) {
    this.health -= weight;
    if (this.health <= 0) {
      this.alive = false;
      this.health = 0;
    }
  }

  beHealed (amount) {
    if(!this.alive) {
      return;
    }
    this.health += amount;
    if (this.health > MAX_HEALTH) {
      this.health = MAX_HEALTH;
    }
  }

  damage (otherCharacter) {
    otherCharacter.sufferDamage(DAMAGE_WEIGHT);
  }

  heal (otherCharacter) {
    otherCharacter.beHealed(HEAL_AMOUNT);
  }
}

export default Character;
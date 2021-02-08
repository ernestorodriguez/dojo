const MAX_HEALTH = 1000;
const DAMAGE_WEIGHT = 50;
const HEAL_AMOUNT = 50;
class Character {
  constructor ({ level = 1 } = {}) {
    this.level = level;
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
    if (otherCharacter === this) {
      return;
    }
    let multy = 1;

    if (otherCharacter.level - this.level >= 5) {
      multy *= 0.5;
    }
    if (this.level - otherCharacter.level >= 5) {
      multy *= 1.5;
    }
    
    otherCharacter.sufferDamage(DAMAGE_WEIGHT * multy);
  }

  heal (thisCharacter) {
    if (thisCharacter === this) {
      thisCharacter.beHealed(HEAL_AMOUNT);
    }
  }
}

export default Character;
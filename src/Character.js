import BareHands from './BareHands';

const MAX_HEALTH = 1000;
const DAMAGE_WEIGHT = 50;
const HEAL_AMOUNT = 50;
class Character {
  constructor ({ level = 1 } = {}) {
    this.level = level;
    this.alive = true;
    this.health = MAX_HEALTH;
    this.equippedWeapon = new BareHands();
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
    let damageToApply = this.equippedWeapon.getDamageWeight();
  
    if (otherCharacter.level - this.level >= 5) {
      multy *= 0.5;
    }
    if (this.level - otherCharacter.level >= 5) {
      multy *= 1.5;
    }
    
    otherCharacter.sufferDamage(damageToApply * multy);
  }

  heal (thisCharacter) {
    if (thisCharacter === this) {
      thisCharacter.beHealed(HEAL_AMOUNT);
    }
  }

  equipWeapon (weapon) {
    this.equippedWeapon = weapon;
  }
}

export default Character;
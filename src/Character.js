import BareHands from './BareHands';
import Shield from './Shield';

const MAX_HEALTH = 1000;
const DAMAGE_WEIGHT = 50;
const HEAL_AMOUNT = 50;
class Character {
  constructor ({ level = 1 } = {}) {
    this.level = level;
    this.alive = true;
    this.health = MAX_HEALTH;
    this.equippedWeapon = new BareHands();
    this.shield = new Shield(1);
  }
  
  sufferDamage (weight, element) {

    this.health -= weight * this.shield.getProtectionRatio(element) // fire;

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
    let damageToApply = this.equippedWeapon.getDamageWeight() //fire;
  
    if (otherCharacter.level - this.level >= 5) {
      multy *= 0.5;
    }
    if (this.level - otherCharacter.level >= 5) {
      multy *= 1.5;
    }
    
    otherCharacter.sufferDamage(damageToApply * multy, this.equippedWeapon.element);
  }

  heal (thisCharacter) {
    if (thisCharacter === this) {
      thisCharacter.beHealed(HEAL_AMOUNT);
    }
  }

  equipWeapon (weapon) {
    this.equippedWeapon = weapon;
  }

  equipShield (shield) {
    this.shield = shield;
  }
}

export default Character;
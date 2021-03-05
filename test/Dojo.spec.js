import Dojo from '../src/Dojo';
import Character from '../src/Character';
import Sword from '../src/Sword';
import Shield from '../src/Shield';
import Fire from '../src/Fire';
import Ice from '../src/Ice';
import Neutral from '../src/Neutral';

describe('', () => {
  it('should be true', ()=> {
    expect(true).toBe(true)
  });
  it('should be an instance of dojo', ()=> {
    const dojo = new Dojo();
    expect(dojo).toBeInstanceOf(Dojo);
    expect(dojo.start()).toBe(true)
  });

  it('character should have keys', ()=> {
    // Arrange 

    // Act
    const character = new Character();

    // Assert
    expect(character.health).toEqual(1000);
    expect(character).toHaveProperty('level', 1);
    expect(character).toHaveProperty('alive', true);
  });

  it('character should be damaged and still alive', ()=> {
    // Arrange 
    const character = new Character();
    const anotherCharacter = new Character();

    // Act
    character.damage(anotherCharacter);

    // Assert
    expect(anotherCharacter.health).toBeLessThan(1000);
    expect(anotherCharacter).toHaveProperty('alive', true);
  });

  it('character should be damaged and dead', ()=> {
    // Arrange 
    const character = new Character();
    const anotherCharacter = new Character();

    const hits = 1050 / 50;

    // Act
    for (let i=0 ; i < hits; i++) {
      character.damage(anotherCharacter);
    }
    
    // Assert
    expect(anotherCharacter.health).toEqual(0);
    expect(anotherCharacter).toHaveProperty('alive', false);
  });

  it("character should heal self", function () {
    const character = new Character();
    const anotherCharacter = new Character();

    character.damage(anotherCharacter);
    anotherCharacter.heal(anotherCharacter);
    anotherCharacter.heal(anotherCharacter);

    expect(anotherCharacter.health).toEqual(1000);
  });

  it("dead character should not be healed", function () {
    const character = new Character();
    const anotherCharacter = new Character();
    const hits = 1050 / 50;

    // Act
    for (let i=0 ; i < hits; i++) {
      character.damage(anotherCharacter);
    }
    anotherCharacter.heal(anotherCharacter);

    expect(anotherCharacter.health).toEqual(0);
    expect(anotherCharacter).toHaveProperty('alive', false);
  });

  it("character should not be healed above original health", function () {
    const character = new Character();
    const anotherCharacter = new Character();
    const hits = 1050 / 50;

    // Act
    for (let i=0 ; i < hits; i++) {
      character.damage(anotherCharacter);
    }
    character.heal(anotherCharacter);

    expect(anotherCharacter.health).toEqual(0);
    expect(anotherCharacter).toHaveProperty('alive', false);
  });

  it("character should not damage itself", () => {
    const character = new Character();

    // Act
    character.damage(character);

    expect(character.health).toEqual(1000);
  });

  it("character should not be able to heal another character", () => {
    const char1 = new Character();
    const char2 = new Character();

    char1.damage(char2);
    char1.heal(char2);

    expect(char2.health).toEqual(950);
  });

  it("target get reduced damage if has 5+ levels than character", () => {
    // Arrange 
    const character = new Character();
    const anotherCharacter = new Character({level: 6});

    // Act
    character.damage(anotherCharacter);

    // Assert
    expect(anotherCharacter.health).toEqual(975);
    expect(anotherCharacter).toHaveProperty('alive', true);
  });


  it("target get increased damage if has 5+ levels below character", () => {
    // Arrange 
    const character = new Character({level: 6});
    const anotherCharacter = new Character();

    // Act
    character.damage(anotherCharacter);

    // Assert
    expect(anotherCharacter.health).toEqual(925);
    expect(anotherCharacter).toHaveProperty('alive', true);
  });

  it("a character can equip a sword", () => {
    // Arrange 
    const character = new Character();
    const sword = new Sword();

    // Act
    character.equipWeapon(sword);

    // Assert
    expect(character.equippedWeapon).toEqual(sword);
  });


  it("character can attack with sword", () => {
    // Arrange 
    const character = new Character({level: 6});
    const anotherCharacter = new Character();
    const sword = new Sword();
    character.equipWeapon(sword);

    // Act
    character.damage(anotherCharacter);

    // Assert
    expect(anotherCharacter.health).toEqual(850);
  });

  it("a character can equip a shield", () => {
    // Arrange 
    const character = new Character();
    const anotherCharacter = new Character();
    const shield = new Shield();
    anotherCharacter.equipShield(shield);

    // Act
    character.damage(anotherCharacter);

    // Assert
    expect(anotherCharacter.health).toEqual(975);
  });

  it("character attacking with a fire sword will do less damage to fire shield", () => {
    // Arrange 
    const character = new Character();
    const anotherCharacter = new Character();
    const fire = new Fire();
    const sword = new Sword({element: fire});
    const shield = new Shield({element: fire});

    character.equipWeapon(sword);
    anotherCharacter.equipShield(shield);

    // Act
    character.damage(anotherCharacter);

    // Assert
    expect(anotherCharacter.health).toEqual(975);
  });

  it("character attacking with a fire sword will do 150% damage to ice shield", () => {
    // Arrange 
    const character = new Character();
    const anotherCharacter = new Character();
    const ice = new Ice();
    const fire = new Fire();

    const sword = new Sword({element: fire});
    const shield = new Shield({element: ice});

    character.equipWeapon(sword);
    anotherCharacter.equipShield(shield);

    // Act
    character.damage(anotherCharacter);

    // Assert
    expect(anotherCharacter.health).toEqual(925);
  });

  it("character attacking with a fire sword will do 200% damage to standard shield", () => {
    // Arrange 
    const character = new Character();
    const anotherCharacter = new Character();
    const neutral = new Neutral();
    const fire = new Fire();

    const sword = new Sword({element: fire});
    const shield = new Shield({element: neutral});

    character.equipWeapon(sword);
    anotherCharacter.equipShield(shield);

    // Act
    character.damage(anotherCharacter);

    // Assert
    expect(anotherCharacter.health).toEqual(900);
  });


  it("character attacking with a ice sword will do 50% less damage to ice shield", () => {
    // Arrange 
    const character = new Character();
    const anotherCharacter = new Character();
    const ice = new Ice();
    const sword = new Sword({element: ice});
    const shield = new Shield({element: ice});

    character.equipWeapon(sword);
    anotherCharacter.equipShield(shield);

    // Act
    character.damage(anotherCharacter);

    // Assert
    expect(anotherCharacter.health).toEqual(975);
  });

  it("character attacking with a ice sword will do 50% less damage to fire shield", () => {
    // Arrange 
    const character = new Character();
    const anotherCharacter = new Character();
    const ice = new Ice();
    const fire = new Fire();
    const sword = new Sword({element: ice});
    const shield = new Shield({element: fire});

    character.equipWeapon(sword);
    anotherCharacter.equipShield(shield);

    // Act
    character.damage(anotherCharacter);

    // Assert
    expect(anotherCharacter.health).toEqual(975);
  });

  it("character attacking with a ice sword will do 200% damage to standard shield", () => {
    // Arrange 
    const character = new Character();
    const anotherCharacter = new Character();
    const ice = new Ice();
    const neutral = new Neutral();
    const sword = new Sword({element: ice});
    const shield = new Shield({element: neutral});

    character.equipWeapon(sword);
    anotherCharacter.equipShield(shield);

    // Act
    character.damage(anotherCharacter);

    // Assert
    expect(anotherCharacter.health).toEqual(900);
  });

});


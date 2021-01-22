import Dojo from '../src/Dojo';
import Character from '../src/Character';

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
});
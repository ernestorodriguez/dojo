import Dojo from '../src/Dojo'

describe('', () => {
  it('should be true', ()=> {
    expect(true).toBe(true)
  });
  it('should be an instance of dojo', ()=> {
    const dojo = new Dojo();
    expect(dojo).toBeInstanceOf(Dojo);
    expect(dojo.start()).toBe(true)
  });
});
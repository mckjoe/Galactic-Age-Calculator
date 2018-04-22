import { Person } from './../src/personLogic.js';

describe('Person', function() {
  let newPerson;

  beforeEach(function() {
    newPerson = new Person;
  });

  it('should find todays date, birth date, an age in years, and a life expectency.', function() {
    expect(newPerson.todaysDate).toEqual(new Date());
    expect(newPerson.birthDate).toEqual(new Date('december 9, 1986'));
    expect(newPerson.ageInYears).toEqual(32);
    expect(newPerson.lifeExpectency).toEqual(77);
  });

  it('should convert a users age in years to age in seconds', function() {
    expect(newPerson.ageInSeconds()).toEqual(1009152000);
  });

  it('should find the difference between two dates in seconds', function() {
    expect(newPerson.differenceInSeconds()).toEqual(315360000);
  });

  it('should find a persons age in years on Mercury', function() {
    expect(newPerson.mercuryAgeYears()).toEqual(133);
  });

  it('should find a persons age in years on Venus', function() {
    expect(newPerson.venusAgeYears()).toEqual(51);
  });

  it('should find a persons age in years on Mars', function() {
    expect(newPerson.marsAgeYears()).toEqual(17);
  });

});

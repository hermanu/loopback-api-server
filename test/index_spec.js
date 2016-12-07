const chai = require('chai');

const expect = chai.expect;

describe('Test', () => {
  it('Hello should be a string', () => {
    const string = 'Hello';
    expect(string).to.be.a('string');
  });

  it('Hello shouldn\'t be a number', () => {
    const string = 'Hello';
    expect(string).to.not.be.a('number');
  });
});

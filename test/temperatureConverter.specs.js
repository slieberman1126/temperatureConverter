const expect = require('chai').expect;
const temperatureConverter = require('../temperatureConverter');

describe('temperature converter', () => {
  it('converts F to C', () => {
    expect(temperatureConverter.convertToFfromC(32)).to.eql(0);
  });
  it('converts C to F', () => {
    expect(temperatureConverter.convertToCfromF(0)).to.eql(32);
  });
});

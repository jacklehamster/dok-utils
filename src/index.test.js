const expect = require('chai').expect;
const { Utils } = require('./index.js');

describe('Utils', function() {
  it('should count', function() {
    expect(Utils.count({a:1, b:2})).to.equal(2);
  });

  it('should clear3', () =>{
    const abc = [1, 2, 3];
    expect(Utils.clear3(abc)).to.deep.equal([0, 0, 0]);
  });

  it('should set3', () => {
    expect(Utils.set3([1, 2, 3], 4, 5, 6)).to.deep.equal([4, 5, 6]);
  });

  it('should set4', () => {
    expect(Utils.set4([1, 2, 3, 4], 4, 5, 6, 7)).to.deep.equal([4, 5, 6, 7]);
  });

  it('should equal3', () => {
    expect(Utils.equal3([1, 2, 3], 1, 2, 3)).to.be.true;
    expect(Utils.equal3([1, 2, 3], 1, 2, 4)).to.be.false;
  });

  it('should equal4', () => {
    expect(Utils.equal4([1, 2, 3, 4], 1, 2, 3, 4)).to.be.true;
    expect(Utils.equal4([1, 2, 3, 4], 1, 2, 3, 5)).to.be.false;
  });

  it('should getDOMColor', () => {
    expect(Utils.getDOMColor(0x00FF00)).to.be.equal("#00ff00");
  });

  it('should getFromArray', () => {
    expect(Utils.getFromArray([1, 2, 3], 2)).to.be.equal(3);
    expect(Utils.getFromArray([1, 2, 3], 4)).to.be.equal(2);
  });
});

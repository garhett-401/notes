'use strict';

jest.mock('minimist')
const minimist = require('minimist');
minimist.mockImplementation(() => {
  return {
    a: "Hi",
  }
});

function removeKey()  {
  const Input = require('../lib/input.js')
  delete Input.args;

  return new Input();
}



describe('Test Test Test', () => {
  it('should be true!', () => {
    let options = removeKey();
    expect(options.validate()).toBe(true);
  })
})
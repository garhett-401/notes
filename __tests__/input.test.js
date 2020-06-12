'use strict';

jest.mock('minimist')
const minimist = require('minimist');
minimist.mockImplementation(() => {
  return {
    a: "Hi",
  }
});


const Input = require('../lib/input')




describe('Test Test Test', () => {
  it('should be true!', () => {

    let options = new Input();
    expect(options.payload).toBe("Hi");

  })
})
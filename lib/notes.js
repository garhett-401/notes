'use strict';

const minimist = require('minimist')
const inputModule = require('./input')
const args = inputModule.args;
const a = minimist(args)

// console.log(Object.keys(minArg))
class Note {
  
  execute(minArg)  {
    console.log('Adding Note: ', minArg[1])
  }

  add(minArg) {
    let addNote = {
      text: minArg[1],
      id: Math.floor(Math.random() * 10000000),
    }
  console.log(addNote)  
  }
}


module.exports = {
  Note
}
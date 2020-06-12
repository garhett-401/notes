'use-strict';



const minimist = require('minimist');
const args = process.argv.slice(2);
const actions = minimist(args)


const command = Object.keys(actions).slice(1)
const payload = Object.values(actions).slice(1)



class Input {

  constructor() {

    this.action = command[0];
    this.catagory = command[1];
    this.payload = payload[0];
    this.catText = payload[1];
  }
  
  validate() {
    let goodOps = false;
    let string = false;


    const ops = ['a', 'l', 'd'];
    if (ops.includes(this.action)) goodOps = true;
    // if (ops.includes(this.catagory)) goodOps = true;

    const str = '';
    if (this.payload !== str) string = true;
    // if (this.catText !== str) string = true;


    return goodOps && string;
  }
}

module.exports = {
  Input,
}
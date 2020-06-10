'use-strict';



const minimist = require('minimist');
const args = process.argv.slice(2);
const actions = minimist(args)


class Input {

  constructor() {
    this.action = Object.keys(actions).slice(1);
    this.payload = actions[this.action]
  }
  
  validate(args) {
    let goodOps = false;
    let string = false;
    
    const ops = ['a'];
    if (ops.includes(this.action[0])) goodOps = true;

    const str = '';
    if (this.payload !== str) string = true;

    return goodOps && string;
  }
}

module.exports = {
  Input,
  args,
}
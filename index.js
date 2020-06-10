'use strict';


const inputModule = require('./lib/input');
const notes = require('./lib/notes');

const Input = inputModule.Input;
const Note = notes.Note;
const args = inputModule.args;

const newNote = new Input();

if (newNote.validate(args) === true) {
  
  const newAdd = new Note();
  newAdd.execute(args);
  newAdd.add(args);

} else {
  
  console.log('you messed up')
  
}

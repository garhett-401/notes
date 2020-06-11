'use strict';


require('dotenv').config();
const mongoose = require('mongoose');
const inputModule = require('./lib/input');
const notes = require('./lib/notes');

mongoose.connect(process.env.MONGODB_ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); 

const db = mongoose.connection;
db.on('open', () => {
  console.log('IM HERE AND IN CHARGE')
})

const Input = inputModule.Input;
const Note = notes.Note;

const newNote = new Input();

if (newNote.validate(Input) === true) {
  const newAdd = new Note();
  newAdd.execute(newNote);

} else {

  console.log('you messed up')
  
}

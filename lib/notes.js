'use strict';

const mongoose = require('mongoose');
const Request = require('../models/note-model.js');



class Note {

  execute(note) {

    switch (note.action) {
      case 'a':
        this.add(note);
        break;
      case 'l':
        this.list(note);
        break;
      case 'd':
        this.delete(note);
      default:
        break;
    }
  }

  add(newNote) {

    const newSave = new Request({ catagory: newNote.catText, text: newNote.payload });

    newSave.save()
      .then(result => console.log('Saved ', result))
      .catch(err => console.log(err));

    console.log('Adding Note: ', newNote.payload, ' Catagory: ', newNote.catText)

  }

  list(newNote) {
    Request.find({})
      .then(result => console.log('Found Results: ', result))
      .catch(err => console.log(err));
  }

  delete(newNote) {
    Request.findByIdAndDelete(newNote.payload)
    .then(() => console.log('Deleted ', newNote.payload))
    .catch(err => console.log(err))
  }  

}

class DBInterface {
  constructor(schema) {
    this.schema = schema
  }

  get()

  create()

  update()

  deletes()
}

module.exports = {
  Note
}

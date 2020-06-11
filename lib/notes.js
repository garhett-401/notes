'use strict';

const mongoose = require('mongoose');
const Request = require('../models/note-model.js');

class Note {

  execute(newNote) {
    switch (newNote.action) {
      case 'a':
        add(newNote.payload);
        break;
      case 'l':
        list();
        break;      
      default:
        break;
    }
  }    
  add(newNote) {
    // let addNote = {
    //   catagory: newNote.catText,
    //   text: newNote.payload,
    //   id: Math.floor(Math.random() * 10000000),
    // }
    const newSave = new Request({catagory: newNote.catText, text: newNote.payload});
    
    newSave.save()
    .then(result => console.log('Saved ', result))
    .catch(err => console.log(err));

    console.log('Adding Note: ', newNote.payload, ' Catagory: ', newNote.catText)

  }

  list(newNote)  {
    Request.find({})
    .then(result => console.log('Found Results: ', result))
    .catch(err => console.log(err));
  }

}

module.exports = {
  Note
}

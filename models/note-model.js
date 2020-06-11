'use strict';

const mongoose = require('mongoose');


const reqMon = new mongoose.Schema({
  catagory: {type: String, required: true},
  text: {type: String, required: true},
});

module.exports = mongoose.model('request', reqMon);
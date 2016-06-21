"use strict";

const mongoose = require('mongoose');

const _profileCardSchema = {
  fullName: {type: String, required: false, trim: true},
  shortTitle: {type: String, required: false, trim: true},
  imgSrc: {type: String, required: true, trim: true},
  status: {type: String, required: true, trim: true},
  quote: {type: String, required: false, trim: true},
  numberOfFriends: {type: Number, required: true},
  totalLikes: {type: Number, required: true}
};

module.exports = mongoose.Schema(_profileCardSchema);

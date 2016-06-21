"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const profileCardSchema = require('../model/profiles-model');
const _ = require('lodash');

profileCardSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    ProfileCard
      .find(_query)
      .exec((err, todos) => {
        err ? reject(err)
          : resolve(todos);
      });
  });
};

profileCardSchema.statics.createProfile = (profile) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(profile)){
      return reject(new TypeError('Profile is not a valid object.'));
    }      

    let _profile = new ProfileCard(profile);

    _profile.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
};

const ProfileCard = mongoose.model('ProfileCard', profileCardSchema);

module.exports = ProfileCard;

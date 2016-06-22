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
      .exec((err, profile) => {
        err ? reject(err)
          : resolve(profile);
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

profileCardSchema.statics.updateProfile = (id, _profile) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(id))
      return reject(new TypeError('Id is not a valid string.'));

    ProfileCard
      .findByIdAndUpdate(id, _profile)
      .exec((err, deleted) => {
        err ? reject(err)
          : resolve();
      });
  });
};

const ProfileCard = mongoose.model('ProfileCard', profileCardSchema);

module.exports = ProfileCard;

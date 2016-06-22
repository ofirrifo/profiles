"use strict";

const ProfileDAO = require('../dao/profiles-dao');

module.exports = class ProfilesController {

  static getAll(req, res) {
    ProfileDAO
      .getAll()
      .then(todos => res.status(200).json(todos))
      .catch(error => res.status(400).json(error));
  }

  static createProfile(req, res) {
    let _profile = req.body;

    ProfileDAO
      .createProfile(_profile)
      .then(todo => res.status(201).json(todo))
      .catch(error => res.status(400).json(error));
  }

  static updateProfile(req, res) {
    let _id = req.params.id;
    let _profile = req.body;

    ProfileDAO
      .updateProfile(_id, _profile)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
};

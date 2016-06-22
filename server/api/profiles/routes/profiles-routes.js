"use strict";

const ProfilesController = require('../controller/profiles-controller');

module.exports = class ProfileRoutes {
  static init(router) {
    router
      .route('/api/profiles')
      .get(ProfilesController.getAll)
      .post(ProfilesController.createProfile);

    router
      .route('/api/profiles/:id')
      .put(ProfilesController.updateProfile);
  }
};

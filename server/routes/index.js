"use strict";

const ProfilesRoutes = require('../api/profiles/routes/profiles-routes');

const StaticDispatcher = require('../commons/static/index');


module.exports = class Routes {
   static init(app, router) {     
     ProfilesRoutes.init(router);

     router
       .route('*')
       .get(StaticDispatcher.sendIndex);


     app.use('/', router);
   }
};

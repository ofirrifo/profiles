"use strict";

const TodoRoutes = require('../api/todo/routes/todo-routes');
const ProfilesRoutes = require('../api/profiles/routes/profiles-routes');

const StaticDispatcher = require('../commons/static/index');


module.exports = class Routes {
   static init(app, router) {
     TodoRoutes.init(router);
     ProfilesRoutes.init(router);

     router
       .route('*')
       .get(StaticDispatcher.sendIndex);


     app.use('/', router);
   }
};

(function (angular) {
  'use strict';

  angular.module('profiles')
    .service('commonService', CommonService);

  CommonService.$inject = [];

  function CommonService() {
    var self = this;

    self.formatDateAndTime = function (date) {
      return moment(date).format('YYYY-MM-DD HH:mm:ss');
    };

  }

})(window.angular);

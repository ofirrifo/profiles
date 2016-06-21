(function (angular) {
  'use strict';

  angular.module('profiles')
    .service('profileCardsRestService', ProfileCardsRestService);

  ProfileCardsRestService.$inject = ['$http'];

  function ProfileCardsRestService($http) {

    var self = this;

    self.getProfiles = function () {
      return $http({
        method: "GET",
        url: '/api/profiles/',
        headers: {
          'Accept': 'application/json;odata=verbose',
          'content-type': 'application/json;odata=verbose'
        }
      }).then(function successCallback(res) {
        return res.data;
      }, function errorCallback(error) {
        console.log('server error');
      });
    };

    self.saveProfile = function (profile) {
      return $http({
        method: "POST",
        url: '/api/profiles/',
        headers: {
          'Accept': 'application/json;odata=verbose',
          'content-type': 'application/json;odata=verbose'
        },
        data: profile
      }).then(function successCallback(res) {
        return res.data;
      }, function errorCallback(error) {
        console.log('server error');
      });
    };

  }
})(window.angular);

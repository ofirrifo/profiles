(function (angular) {
  'use strict';

  angular.module('profiles')
    .controller('ProfileCardsController', ProfileCardsController);

  ProfileCardsController.$inject = ['$uibModal', '$http'];

  function ProfileCardsController($uibModal, $http) {

    var vm = this;

    // saveProfile(vm.cards[0]);
    getProfiles();

    function getRandomNumber() {
      return Math.floor((Math.random() * 100) + 1);
    }

    vm.onLikeClick = function (card) {
      card.totalLikes += 1;
    };

    vm.onAddContactClick = function () {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: '../profileCards/templates/newCardModal.html',
        controller: 'NewCardController as newCard'
      });

      modalInstance.result.then(function (card) {
        saveProfile(card);
      }, function (error) {
        console.log('server error');
      });
    };

    function saveProfile(profile) {
      $http({
        method: "POST",
        url: '/api/profiles/',
        headers: {
          'Accept': 'application/json;odata=verbose',
          'content-type': 'application/json;odata=verbose'
        },
        data: profile
      }).then(function successCallback(res) {
        vm.cards.unshift(res.data);
      }, function errorCallback(error) {
        console.log('server error');
      });
    }

    function getProfiles() {
      $http({
        method: "GET",
        url: '/api/profiles/',
        headers: {
          'Accept': 'application/json;odata=verbose',
          'content-type': 'application/json;odata=verbose'
        }
      }).then(function successCallback(res) {
        if (res.data === null || res.data === undefined || res.data.length === 0) {
          vm.cards = [
            {
              _id: 0,
              fullName: "Ofir Fridman",              
              shortTitle: "this is short title 1",
              imgSrc: "http://bootdey.com/img/Content/avatar/avatar1.png",
              status: "online",
              quote: "quote 1",
              numberOfFriends: getRandomNumber(),
              totalLikes: 0
            },
            {
              _id: 1,
              fullName: "Ron Levi",
              shortTitle: "this is short title 2",
              imgSrc: "http://bootdey.com/img/Content/avatar/avatar2.png",
              status: "online",
              quote: "quote 2",
              numberOfFriends: getRandomNumber(),
              totalLikes: 0
            },
            {
              _id: 2,
              fullName: "Galit Peri",
              shortTitle: "this is short title 3",
              imgSrc: "http://bootdey.com/img/Content/avatar/avatar3.png",
              status: "offline",
              quote: "quote 3",
              numberOfFriends: getRandomNumber(),
              totalLikes: 0
            }

          ];
        }
        else {
          vm.cards = res.data;
        }
      }, function errorCallback(error) {

      });
    }
  }
})(window.angular);

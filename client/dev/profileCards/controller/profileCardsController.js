(function (angular) {
  'use strict';

  angular.module('profiles')
    .controller('ProfileCardsController', ProfileCardsController);

  ProfileCardsController.$inject = ['$uibModal', 'profileCardsRestService'];

  function ProfileCardsController($uibModal, profileCardsRestService) {

    var vm = this;

    profileCardsRestService.getProfiles().then(function (cards) {
      vm.cards = cards;
    });

    vm.onLikeClick = function (card) {
      card.totalLikes += 1;
      profileCardsRestService.updateProfile(card);
    };

    vm.onAddContactClick = function () {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: '../profileCards/templates/newCardModal.html',
        controller: 'NewCardController as newCard'
      });

      modalInstance.result.then(function (card) {
        profileCardsRestService.saveProfile(card).then(function (card) {
          vm.cards.unshift(card);
        });
      }, function (error) {
        console.log('server error');
      });
    };

  }
})(window.angular);

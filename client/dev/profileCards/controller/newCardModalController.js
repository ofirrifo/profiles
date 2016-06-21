(function (angular) {
  'use strict';

  angular.module('profiles')
    .controller('NewCardController', NewCardController);

  NewCardController.$inject = ['$uibModalInstance'];

  function NewCardController($uibModalInstance) {

    var vm = this;
    vm.card = {
      imgSrc: "http://bootdey.com/img/Content/avatar/avatar" + getRandomNumber() + ".png",
      numberOfFriends: getRandomNumber(),
      totalLikes: 0,
      status: "online"
    };

    vm.ok = function () {
      $uibModalInstance.close(vm.card);
    };

    vm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };

    function getRandomNumber() {
      return Math.floor((Math.random() * 7) + 1);
    }
  }
})(window.angular);

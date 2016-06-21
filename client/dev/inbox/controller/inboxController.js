(function (angular) {
  'use strict';

  angular.module('profiles')
    .controller('InboxController', InboxController);

  InboxController.$inject = ['$routeParams', 'inboxConst', 'commonService'];

  function InboxController($routeParams, inboxConst, commonService) {

    var vm = this;
    vm.gridOptions = inboxConst.gridOptions;

    var userId = $routeParams.id;

    vm.userMessages = [
      {
        id: 0,
        sender: 'Ofir',
        profile: 'profile 1',
        title: 'New Gift',
        date: new Date(),
        attachment: '2 files',
        isMessageSelected: true
      },
      {
        id: 1,
        sender: 'Gal',
        profile: 'profile 2',
        title: 'Amazon Reports',
        date: new Date(),
        attachment: '0 files',
        isMessageSelected: false
      },
      {
        id: 2,
        sender: 'Ofir',
        profile: 'profile 1',
        title: 'New Gift',
        date: new Date(),
        attachment: '2 files',
        isMessageSelected: true
      },
      {
        id: 3,
        sender: 'Gal',
        profile: 'profile 2',
        title: 'Amazon Reports',
        date: new Date(),
        attachment: '0 files',
        isMessageSelected: false
      }
    ];

    vm.gridOptions.data = vm.userMessages;

    vm.gridOptions.data.forEach(function (entity) {
      entity.date = commonService.formatDateAndTime(entity.date);
    });
  }
})(window.angular);

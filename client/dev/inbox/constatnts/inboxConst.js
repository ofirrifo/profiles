(function (angular) {
  'use strict';

  angular.module('profiles')
    .constant('inboxConst', {
      gridOptions: {
        enableSorting: false,
        enableColumnMenus: false,
        columnDefs: [
          {
            name: 'sender',
            enableSorting: false,
            enableHiding: false
          },
          {
            name: 'profile',
            enableSorting: false,
            enableHiding: false
          },
          {
            name: 'title',
            enableSorting: false,
            enableHiding: false
          },
          {
            name: 'date',
            enableSorting: false,
            enableHiding: false
          },
          {
            name: 'attachment',
            enableSorting: false,
            enableHiding: false
          },
          {
            name: 'isMessageSelected',
            displayName: 'Star',
            width: 50,
            cellTemplate: '<div class="ui-grid-cell-contents cursor-pointer" ng-click="message.isMessageSelected = !message.isMessageSelected">' +
            '<i  class="glyphicon"  ng-class="{\'selected-message glyphicon-star\':message.isMessageSelected, \'glyphicon-star-empty\':!message.isMessageSelected}"></i>' +
            '</div>'
          }
        ]
      }
    });

})(window.angular);

'use strict';

/**
 * @ngdoc directive
 * @name mauroWebAngularApp.directive:myLinkSocial
 * @description
 * # myLinkSocial
 */
angular.module('mauroWebAngularApp')
  .directive('myLinkSocial', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the myLinkSocial directive');
      }
    };
  });

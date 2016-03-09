'use strict';

/**
 * @ngdoc service
 * @name mauroWebAngularApp.contacto
 * @description
 * # contacto
 * Factory in the mauroWebAngularApp.
 */
angular.module('mauroWebAngularApp')
  .factory('contacto', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });

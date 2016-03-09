'use strict';

describe('Directive: myLinkSocial', function () {

  // load the directive's module
  beforeEach(module('mauroWebAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-link-social></my-link-social>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myLinkSocial directive');
  }));
});

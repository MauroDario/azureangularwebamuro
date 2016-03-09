'use strict';

describe('Service: contacto', function () {

  // load the service's module
  beforeEach(module('mauroWebAngularApp'));

  // instantiate service
  var contacto;
  beforeEach(inject(function (_contacto_) {
    contacto = _contacto_;
  }));

  it('should do something', function () {
    expect(!!contacto).toBe(true);
  });

});

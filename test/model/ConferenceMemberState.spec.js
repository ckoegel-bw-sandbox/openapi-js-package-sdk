/**
 * FrankenSpec
 * Bandwidth's Frankensteined API Spec
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NodeSdk);
  }
}(this, function(expect, NodeSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NodeSdk.ConferenceMemberState();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ConferenceMemberState', function() {
    it('should create an instance of ConferenceMemberState', function() {
      // uncomment below and update the code to test ConferenceMemberState
      //var instane = new NodeSdk.ConferenceMemberState();
      //expect(instance).to.be.a(NodeSdk.ConferenceMemberState);
    });

    it('should have the property callId (base name: "callId")', function() {
      // uncomment below and update the code to test the property callId
      //var instance = new NodeSdk.ConferenceMemberState();
      //expect(instance).to.be();
    });

    it('should have the property conferenceId (base name: "conferenceId")', function() {
      // uncomment below and update the code to test the property conferenceId
      //var instance = new NodeSdk.ConferenceMemberState();
      //expect(instance).to.be();
    });

    it('should have the property memberUrl (base name: "memberUrl")', function() {
      // uncomment below and update the code to test the property memberUrl
      //var instance = new NodeSdk.ConferenceMemberState();
      //expect(instance).to.be();
    });

    it('should have the property mute (base name: "mute")', function() {
      // uncomment below and update the code to test the property mute
      //var instance = new NodeSdk.ConferenceMemberState();
      //expect(instance).to.be();
    });

    it('should have the property hold (base name: "hold")', function() {
      // uncomment below and update the code to test the property hold
      //var instance = new NodeSdk.ConferenceMemberState();
      //expect(instance).to.be();
    });

    it('should have the property callIdsToCoach (base name: "callIdsToCoach")', function() {
      // uncomment below and update the code to test the property callIdsToCoach
      //var instance = new NodeSdk.ConferenceMemberState();
      //expect(instance).to.be();
    });

  });

}));

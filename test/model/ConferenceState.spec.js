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
    instance = new NodeSdk.ConferenceState();
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

  describe('ConferenceState', function() {
    it('should create an instance of ConferenceState', function() {
      // uncomment below and update the code to test ConferenceState
      //var instane = new NodeSdk.ConferenceState();
      //expect(instance).to.be.a(NodeSdk.ConferenceState);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new NodeSdk.ConferenceState();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new NodeSdk.ConferenceState();
      //expect(instance).to.be();
    });

    it('should have the property createdTime (base name: "createdTime")', function() {
      // uncomment below and update the code to test the property createdTime
      //var instance = new NodeSdk.ConferenceState();
      //expect(instance).to.be();
    });

    it('should have the property completedTime (base name: "completedTime")', function() {
      // uncomment below and update the code to test the property completedTime
      //var instance = new NodeSdk.ConferenceState();
      //expect(instance).to.be();
    });

    it('should have the property conferenceEventUrl (base name: "conferenceEventUrl")', function() {
      // uncomment below and update the code to test the property conferenceEventUrl
      //var instance = new NodeSdk.ConferenceState();
      //expect(instance).to.be();
    });

    it('should have the property conferenceEventMethod (base name: "conferenceEventMethod")', function() {
      // uncomment below and update the code to test the property conferenceEventMethod
      //var instance = new NodeSdk.ConferenceState();
      //expect(instance).to.be();
    });

    it('should have the property tag (base name: "tag")', function() {
      // uncomment below and update the code to test the property tag
      //var instance = new NodeSdk.ConferenceState();
      //expect(instance).to.be();
    });

    it('should have the property activeMembers (base name: "activeMembers")', function() {
      // uncomment below and update the code to test the property activeMembers
      //var instance = new NodeSdk.ConferenceState();
      //expect(instance).to.be();
    });

  });

}));
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
    instance = new NodeSdk.CallCallback();
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

  describe('CallCallback', function() {
    it('should create an instance of CallCallback', function() {
      // uncomment below and update the code to test CallCallback
      //var instane = new NodeSdk.CallCallback();
      //expect(instance).to.be.a(NodeSdk.CallCallback);
    });

    it('should have the property eventType (base name: "eventType")', function() {
      // uncomment below and update the code to test the property eventType
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property eventTime (base name: "eventTime")', function() {
      // uncomment below and update the code to test the property eventTime
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property accountId (base name: "accountId")', function() {
      // uncomment below and update the code to test the property accountId
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property applicationId (base name: "applicationId")', function() {
      // uncomment below and update the code to test the property applicationId
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property from (base name: "from")', function() {
      // uncomment below and update the code to test the property from
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property to (base name: "to")', function() {
      // uncomment below and update the code to test the property to
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property direction (base name: "direction")', function() {
      // uncomment below and update the code to test the property direction
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property callId (base name: "callId")', function() {
      // uncomment below and update the code to test the property callId
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property callUrl (base name: "callUrl")', function() {
      // uncomment below and update the code to test the property callUrl
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property startTime (base name: "startTime")', function() {
      // uncomment below and update the code to test the property startTime
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property answerTime (base name: "answerTime")', function() {
      // uncomment below and update the code to test the property answerTime
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property transferCallerId (base name: "transferCallerId")', function() {
      // uncomment below and update the code to test the property transferCallerId
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property transferTo (base name: "transferTo")', function() {
      // uncomment below and update the code to test the property transferTo
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property cause (base name: "cause")', function() {
      // uncomment below and update the code to test the property cause
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property errorMessage (base name: "errorMessage")', function() {
      // uncomment below and update the code to test the property errorMessage
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property errorId (base name: "errorId")', function() {
      // uncomment below and update the code to test the property errorId
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property endTime (base name: "endTime")', function() {
      // uncomment below and update the code to test the property endTime
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property digit (base name: "digit")', function() {
      // uncomment below and update the code to test the property digit
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property parentCallId (base name: "parentCallId")', function() {
      // uncomment below and update the code to test the property parentCallId
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property recordingId (base name: "recordingId")', function() {
      // uncomment below and update the code to test the property recordingId
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property fileFormat (base name: "fileFormat")', function() {
      // uncomment below and update the code to test the property fileFormat
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property mediaUrl (base name: "mediaUrl")', function() {
      // uncomment below and update the code to test the property mediaUrl
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property tag (base name: "tag")', function() {
      // uncomment below and update the code to test the property tag
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property channels (base name: "channels")', function() {
      // uncomment below and update the code to test the property channels
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property digits (base name: "digits")', function() {
      // uncomment below and update the code to test the property digits
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property terminatingDigit (base name: "terminatingDigit")', function() {
      // uncomment below and update the code to test the property terminatingDigit
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property transcription (base name: "transcription")', function() {
      // uncomment below and update the code to test the property transcription
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

    it('should have the property diversion (base name: "diversion")', function() {
      // uncomment below and update the code to test the property diversion
      //var instance = new NodeSdk.CallCallback();
      //expect(instance).to.be();
    });

  });

}));

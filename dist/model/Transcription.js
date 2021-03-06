"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Transcription model module.
 * @module model/Transcription
 * @version 1.0.0
 */
var Transcription = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Transcription</code>.
   * @alias module:model/Transcription
   */
  function Transcription() {
    _classCallCheck(this, Transcription);

    Transcription.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Transcription, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Transcription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Transcription} obj Optional instance to populate.
     * @return {module:model/Transcription} The populated <code>Transcription</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Transcription();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('completedTime')) {
          obj['completedTime'] = _ApiClient["default"].convertToType(data['completedTime'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Transcription;
}();
/**
 * @member {String} id
 */


Transcription.prototype['id'] = undefined;
/**
 * @member {String} url
 */

Transcription.prototype['url'] = undefined;
/**
 * @member {String} status
 */

Transcription.prototype['status'] = undefined;
/**
 * @member {String} completedTime
 */

Transcription.prototype['completedTime'] = undefined;
var _default = Transcription;
exports["default"] = _default;
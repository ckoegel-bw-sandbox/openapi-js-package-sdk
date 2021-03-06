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
 * The Media model module.
 * @module model/Media
 * @version 1.0.0
 */
var Media = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Media</code>.
   * @alias module:model/Media
   */
  function Media() {
    _classCallCheck(this, Media);

    Media.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Media, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Media</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Media} obj Optional instance to populate.
     * @return {module:model/Media} The populated <code>Media</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Media();

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }

        if (data.hasOwnProperty('contentLength')) {
          obj['contentLength'] = _ApiClient["default"].convertToType(data['contentLength'], 'Number');
        }

        if (data.hasOwnProperty('mediaName')) {
          obj['mediaName'] = _ApiClient["default"].convertToType(data['mediaName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Media;
}();
/**
 * @member {String} content
 */


Media.prototype['content'] = undefined;
/**
 * @member {Number} contentLength
 */

Media.prototype['contentLength'] = undefined;
/**
 * @member {String} mediaName
 */

Media.prototype['mediaName'] = undefined;
var _default = Media;
exports["default"] = _default;
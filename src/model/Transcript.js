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

import ApiClient from '../ApiClient';

/**
 * The Transcript model module.
 * @module model/Transcript
 * @version 1.0.0
 */
class Transcript {
    /**
     * Constructs a new <code>Transcript</code>.
     * @alias module:model/Transcript
     */
    constructor() { 
        
        Transcript.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Transcript</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Transcript} obj Optional instance to populate.
     * @return {module:model/Transcript} The populated <code>Transcript</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Transcript();

            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('confidence')) {
                obj['confidence'] = ApiClient.convertToType(data['confidence'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} text
 */
Transcript.prototype['text'] = undefined;

/**
 * @member {Number} confidence
 */
Transcript.prototype['confidence'] = undefined;






export default Transcript;


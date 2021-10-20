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
import Transcript from './Transcript';

/**
 * The TranscriptionResponse model module.
 * @module model/TranscriptionResponse
 * @version 1.0.0
 */
class TranscriptionResponse {
    /**
     * Constructs a new <code>TranscriptionResponse</code>.
     * @alias module:model/TranscriptionResponse
     */
    constructor() { 
        
        TranscriptionResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TranscriptionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TranscriptionResponse} obj Optional instance to populate.
     * @return {module:model/TranscriptionResponse} The populated <code>TranscriptionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TranscriptionResponse();

            if (data.hasOwnProperty('transcripts')) {
                obj['transcripts'] = ApiClient.convertToType(data['transcripts'], [Transcript]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Transcript>} transcripts
 */
TranscriptionResponse.prototype['transcripts'] = undefined;






export default TranscriptionResponse;


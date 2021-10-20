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
 * The ModifyCallRecordingRequest model module.
 * @module model/ModifyCallRecordingRequest
 * @version 1.0.0
 */
class ModifyCallRecordingRequest {
    /**
     * Constructs a new <code>ModifyCallRecordingRequest</code>.
     * @alias module:model/ModifyCallRecordingRequest
     * @param state {module:model/ModifyCallRecordingRequest.StateEnum} 
     */
    constructor(state) { 
        
        ModifyCallRecordingRequest.initialize(this, state);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, state) { 
        obj['state'] = state;
    }

    /**
     * Constructs a <code>ModifyCallRecordingRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyCallRecordingRequest} obj Optional instance to populate.
     * @return {module:model/ModifyCallRecordingRequest} The populated <code>ModifyCallRecordingRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModifyCallRecordingRequest();

            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ModifyCallRecordingRequest.StateEnum} state
 */
ModifyCallRecordingRequest.prototype['state'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
ModifyCallRecordingRequest['StateEnum'] = {

    /**
     * value: "NOT_RECORDING"
     * @const
     */
    "NOT_RECORDING": "NOT_RECORDING",

    /**
     * value: "PAUSED"
     * @const
     */
    "PAUSED": "PAUSED",

    /**
     * value: "RECORDING"
     * @const
     */
    "RECORDING": "RECORDING"
};



export default ModifyCallRecordingRequest;


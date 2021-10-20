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
 * The TwoFactorVerifyRequestSchema model module.
 * @module model/TwoFactorVerifyRequestSchema
 * @version 1.0.0
 */
class TwoFactorVerifyRequestSchema {
    /**
     * Constructs a new <code>TwoFactorVerifyRequestSchema</code>.
     * @alias module:model/TwoFactorVerifyRequestSchema
     * @param to {String} The phone number to send the 2fa code to.
     * @param applicationId {String} The application unique ID, obtained from Bandwidth.
     * @param expirationTimeInMinutes {Number} The time period, in minutes, to validate the 2fa code.  By setting this to 3 minutes, it will mean any code generated within the last 3 minutes are still valid.  The valid range for expiration time is between 0 and 15 minutes, exclusively and inclusively, respectively.
     * @param code {String} The generated 2fa code to check if valid
     */
    constructor(to, applicationId, expirationTimeInMinutes, code) { 
        
        TwoFactorVerifyRequestSchema.initialize(this, to, applicationId, expirationTimeInMinutes, code);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, to, applicationId, expirationTimeInMinutes, code) { 
        obj['to'] = to;
        obj['applicationId'] = applicationId;
        obj['expirationTimeInMinutes'] = expirationTimeInMinutes;
        obj['code'] = code;
    }

    /**
     * Constructs a <code>TwoFactorVerifyRequestSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TwoFactorVerifyRequestSchema} obj Optional instance to populate.
     * @return {module:model/TwoFactorVerifyRequestSchema} The populated <code>TwoFactorVerifyRequestSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TwoFactorVerifyRequestSchema();

            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'String');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
            }
            if (data.hasOwnProperty('expirationTimeInMinutes')) {
                obj['expirationTimeInMinutes'] = ApiClient.convertToType(data['expirationTimeInMinutes'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The phone number to send the 2fa code to.
 * @member {String} to
 */
TwoFactorVerifyRequestSchema.prototype['to'] = undefined;

/**
 * The application unique ID, obtained from Bandwidth.
 * @member {String} applicationId
 */
TwoFactorVerifyRequestSchema.prototype['applicationId'] = undefined;

/**
 * An optional field to denote what scope or action the 2fa code is addressing.  If not supplied, defaults to \"2FA\".
 * @member {String} scope
 */
TwoFactorVerifyRequestSchema.prototype['scope'] = undefined;

/**
 * The time period, in minutes, to validate the 2fa code.  By setting this to 3 minutes, it will mean any code generated within the last 3 minutes are still valid.  The valid range for expiration time is between 0 and 15 minutes, exclusively and inclusively, respectively.
 * @member {Number} expirationTimeInMinutes
 */
TwoFactorVerifyRequestSchema.prototype['expirationTimeInMinutes'] = undefined;

/**
 * The generated 2fa code to check if valid
 * @member {String} code
 */
TwoFactorVerifyRequestSchema.prototype['code'] = undefined;






export default TwoFactorVerifyRequestSchema;

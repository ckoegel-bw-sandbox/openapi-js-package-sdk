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
import ConferenceMemberState from './ConferenceMemberState';

/**
 * The ConferenceState model module.
 * @module model/ConferenceState
 * @version 1.0.0
 */
class ConferenceState {
    /**
     * Constructs a new <code>ConferenceState</code>.
     * @alias module:model/ConferenceState
     */
    constructor() { 
        
        ConferenceState.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConferenceState</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConferenceState} obj Optional instance to populate.
     * @return {module:model/ConferenceState} The populated <code>ConferenceState</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConferenceState();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('createdTime')) {
                obj['createdTime'] = ApiClient.convertToType(data['createdTime'], 'Date');
            }
            if (data.hasOwnProperty('completedTime')) {
                obj['completedTime'] = ApiClient.convertToType(data['completedTime'], 'Date');
            }
            if (data.hasOwnProperty('conferenceEventUrl')) {
                obj['conferenceEventUrl'] = ApiClient.convertToType(data['conferenceEventUrl'], 'String');
            }
            if (data.hasOwnProperty('conferenceEventMethod')) {
                obj['conferenceEventMethod'] = ApiClient.convertToType(data['conferenceEventMethod'], 'String');
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
            }
            if (data.hasOwnProperty('activeMembers')) {
                obj['activeMembers'] = ApiClient.convertToType(data['activeMembers'], [ConferenceMemberState]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ConferenceState.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ConferenceState.prototype['name'] = undefined;

/**
 * @member {Date} createdTime
 */
ConferenceState.prototype['createdTime'] = undefined;

/**
 * @member {Date} completedTime
 */
ConferenceState.prototype['completedTime'] = undefined;

/**
 * @member {String} conferenceEventUrl
 */
ConferenceState.prototype['conferenceEventUrl'] = undefined;

/**
 * @member {module:model/ConferenceState.ConferenceEventMethodEnum} conferenceEventMethod
 */
ConferenceState.prototype['conferenceEventMethod'] = undefined;

/**
 * @member {String} tag
 */
ConferenceState.prototype['tag'] = undefined;

/**
 * @member {Array.<module:model/ConferenceMemberState>} activeMembers
 */
ConferenceState.prototype['activeMembers'] = undefined;





/**
 * Allowed values for the <code>conferenceEventMethod</code> property.
 * @enum {String}
 * @readonly
 */
ConferenceState['ConferenceEventMethodEnum'] = {

    /**
     * value: "POST"
     * @const
     */
    "POST": "POST",

    /**
     * value: "GET"
     * @const
     */
    "GET": "GET"
};



export default ConferenceState;


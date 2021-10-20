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
import BandwidthMessageItem from './BandwidthMessageItem';
import PageInfo from './PageInfo';

/**
 * The BandwidthMessagesList model module.
 * @module model/BandwidthMessagesList
 * @version 1.0.0
 */
class BandwidthMessagesList {
    /**
     * Constructs a new <code>BandwidthMessagesList</code>.
     * @alias module:model/BandwidthMessagesList
     */
    constructor() { 
        
        BandwidthMessagesList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BandwidthMessagesList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BandwidthMessagesList} obj Optional instance to populate.
     * @return {module:model/BandwidthMessagesList} The populated <code>BandwidthMessagesList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BandwidthMessagesList();

            if (data.hasOwnProperty('totalCount')) {
                obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
            }
            if (data.hasOwnProperty('pageInfo')) {
                obj['pageInfo'] = PageInfo.constructFromObject(data['pageInfo']);
            }
            if (data.hasOwnProperty('messages')) {
                obj['messages'] = ApiClient.convertToType(data['messages'], [BandwidthMessageItem]);
            }
        }
        return obj;
    }


}

/**
 * Total number of messages matched by the search
 * @member {Number} totalCount
 */
BandwidthMessagesList.prototype['totalCount'] = undefined;

/**
 * @member {module:model/PageInfo} pageInfo
 */
BandwidthMessagesList.prototype['pageInfo'] = undefined;

/**
 * @member {Array.<module:model/BandwidthMessageItem>} messages
 */
BandwidthMessagesList.prototype['messages'] = undefined;






export default BandwidthMessagesList;

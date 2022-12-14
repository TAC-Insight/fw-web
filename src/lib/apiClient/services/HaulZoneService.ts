/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HaulZoneModel } from '../models/HaulZoneModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class HaulZoneService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets all haul zones
     * Leaving location key and active null will return all haul zones
     * @returns HaulZoneModel Success
     * @throws ApiError
     */
    public getHaulZones({
locationKey,
active,
}: {
/**
 * Setting location key will return all haul zones associated with that location
 */
locationKey?: number,
/**
 * Setting active will return all haul zones that are either active (true) or inactive (false)
 */
active?: boolean,
}): CancelablePromise<Array<HaulZoneModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/haulZone',
            query: {
                'locationKey': locationKey,
                'active': active,
            },
        });
    }

    /**
     * Creates a new haulZone or updates an existing haulZone
     * To create a new haulZone, set the haulZone key to zero.  To update an existing haulZone, set the haulZone key to that haulZone's key
     * @returns HaulZoneModel Success
     * @throws ApiError
     */
    public saveHaulZone({
requestBody,
}: {
requestBody?: HaulZoneModel,
}): CancelablePromise<HaulZoneModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/haulZone',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets a haul zone by key
     * @returns HaulZoneModel Success
     * @throws ApiError
     */
    public getHaulZoneByKey({
haulZoneKey,
}: {
haulZoneKey: number,
}): CancelablePromise<HaulZoneModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/haulZone/{haulZoneKey}',
            path: {
                'haulZoneKey': haulZoneKey,
            },
        });
    }

    /**
     * Deletes a haulZone by key
     * @returns any Success
     * @throws ApiError
     */
    public deleteHaulZone({
haulZoneKey,
}: {
haulZoneKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/haulZone/{haulZoneKey}',
            path: {
                'haulZoneKey': haulZoneKey,
            },
        });
    }

}

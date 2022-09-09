/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FWT_Regions_Models_LocationModel } from '../models/FWT_Regions_Models_LocationModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LocationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets all locations
     * @returns FWT_Regions_Models_LocationModel Success
     * @throws ApiError
     */
    public getLocations({
regionKey,
}: {
/**
 * Returns only locations for the specified region key
 */
regionKey?: number,
}): CancelablePromise<Array<FWT_Regions_Models_LocationModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/location',
            query: {
                'regionKey': regionKey,
            },
        });
    }

    /**
     * Creates a new location or updates an existing location
     * To create a new location, set the location key to zero.  To update an existing location, set the location key to that location's key
     * @returns FWT_Regions_Models_LocationModel Success
     * @throws ApiError
     */
    public saveLocation({
requestBody,
}: {
requestBody?: FWT_Regions_Models_LocationModel,
}): CancelablePromise<FWT_Regions_Models_LocationModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/location',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets a location by key
     * @returns FWT_Regions_Models_LocationModel Success
     * @throws ApiError
     */
    public getLocationByKey({
locationKey,
}: {
locationKey: number,
}): CancelablePromise<FWT_Regions_Models_LocationModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/location/{locationKey}',
            path: {
                'locationKey': locationKey,
            },
        });
    }

    /**
     * Deletes a location by key
     * @returns any Success
     * @throws ApiError
     */
    public deleteLocation({
locationKey,
}: {
locationKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/location/{locationKey}',
            path: {
                'locationKey': locationKey,
            },
        });
    }

}

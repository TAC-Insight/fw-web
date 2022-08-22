/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RegionModel } from '../models/RegionModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RegionService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets regions
     * Leaving customerKey and haulerKey null will return all regions
     * @returns RegionModel Success
     * @throws ApiError
     */
    public getRegions({
customerKey,
haulerKey,
}: {
/**
 * Setting the customerKey will return all regions associated with that customer
 */
customerKey?: number,
/**
 * Setting the haulerKey will return all regions associated with that hauler
 */
haulerKey?: number,
}): CancelablePromise<Array<RegionModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/region',
            query: {
                'customerKey': customerKey,
                'haulerKey': haulerKey,
            },
        });
    }

    /**
     * Creates a new region or updates an existing region
     * To create a new region, set the region key to zero.  To update an existing region, set the region key to that region's key
     * @returns RegionModel Success
     * @throws ApiError
     */
    public saveRegion({
requestBody,
}: {
requestBody?: RegionModel,
}): CancelablePromise<RegionModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/region',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets a region by key
     * @returns RegionModel Success
     * @throws ApiError
     */
    public getRegionByKey({
regionKey,
}: {
regionKey: number,
}): CancelablePromise<RegionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/region/{regionKey}',
            path: {
                'regionKey': regionKey,
            },
        });
    }

    /**
     * Deletes a region by key
     * @returns any Success
     * @throws ApiError
     */
    public deleteRegion({
regionKey,
}: {
regionKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/region/{regionKey}',
            path: {
                'regionKey': regionKey,
            },
        });
    }

}

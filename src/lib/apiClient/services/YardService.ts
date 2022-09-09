/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FWT_Regions_Models_YardModel } from '../models/FWT_Regions_Models_YardModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class YardService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets all yards
     * @returns FWT_Regions_Models_YardModel Success
     * @throws ApiError
     */
    public getYards({
locationKey,
}: {
/**
 * Returns only yards for the specified location key
 */
locationKey?: number,
}): CancelablePromise<Array<FWT_Regions_Models_YardModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/yard',
            query: {
                'locationKey': locationKey,
            },
        });
    }

    /**
     * Creates a new yard or updates an existing yard
     * To create a new yard, set the yard key to zero.  To update an existing yard, set the yard key to that yard's key
     * @returns FWT_Regions_Models_YardModel Success
     * @throws ApiError
     */
    public saveYard({
requestBody,
}: {
requestBody?: FWT_Regions_Models_YardModel,
}): CancelablePromise<FWT_Regions_Models_YardModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/yard',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets a yard by key
     * @returns FWT_Regions_Models_YardModel Success
     * @throws ApiError
     */
    public getYardByKey({
yardKey,
}: {
yardKey: number,
}): CancelablePromise<FWT_Regions_Models_YardModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/yard/{yardKey}',
            path: {
                'yardKey': yardKey,
            },
        });
    }

    /**
     * Deletes a yard by key
     * @returns any Success
     * @throws ApiError
     */
    public deleteYard({
yardKey,
}: {
yardKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/yard/{yardKey}',
            path: {
                'yardKey': yardKey,
            },
        });
    }

}

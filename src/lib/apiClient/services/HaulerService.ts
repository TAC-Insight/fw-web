/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HaulerModel } from '../models/HaulerModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class HaulerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets haulers
     * Leaving all parameters null will return all haulers
     * @returns HaulerModel Success
     * @throws ApiError
     */
    public getHaulers({
regionKey,
dispatchingEnabled,
haulerType,
}: {
/**
 * Setting the regionKey will return all haulers associated with that region
 */
regionKey?: number,
/**
 * When set, will only return haulers with dispatching enabled (true) or disabled (false)
 */
dispatchingEnabled?: boolean,
/**
 * When set, will only return haulers based on type (External or Internal)
 */
haulerType?: string,
}): CancelablePromise<Array<HaulerModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/hauler',
            query: {
                'regionKey': regionKey,
                'dispatchingEnabled': dispatchingEnabled,
                'haulerType': haulerType,
            },
        });
    }

    /**
     * Creates a new hauler or updates an existing hauler
     * To create a new hauler, set the hauler key to zero.  To update an existing hauler, set the hauler key to that hauler's key
     * @returns HaulerModel Success
     * @throws ApiError
     */
    public saveHauler({
requestBody,
}: {
requestBody?: HaulerModel,
}): CancelablePromise<HaulerModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/hauler',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets a hauler by key
     * @returns HaulerModel Success
     * @throws ApiError
     */
    public getHaulerByKey({
haulerKey,
}: {
haulerKey: number,
}): CancelablePromise<HaulerModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/hauler/{haulerKey}',
            path: {
                'haulerKey': haulerKey,
            },
        });
    }

    /**
     * Deletes a hauler by key
     * @returns any Success
     * @throws ApiError
     */
    public deleteHauler({
haulerKey,
}: {
haulerKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/hauler/{haulerKey}',
            path: {
                'haulerKey': haulerKey,
            },
        });
    }

    /**
     * Returns valid hauler types
     * @returns string Success
     * @throws ApiError
     */
    public getHaulerTypes(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/hauler/types',
        });
    }

}

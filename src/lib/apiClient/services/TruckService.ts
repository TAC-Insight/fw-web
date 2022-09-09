/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FWT_Haulers_Models_TruckAssignmentModel } from '../models/FWT_Haulers_Models_TruckAssignmentModel';
import type { FWT_Haulers_Models_TruckImageModel } from '../models/FWT_Haulers_Models_TruckImageModel';
import type { FWT_Haulers_Models_TruckModel } from '../models/FWT_Haulers_Models_TruckModel';
import type { FWT_Haulers_Models_TruckTypeModel } from '../models/FWT_Haulers_Models_TruckTypeModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TruckService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets trucks
     * Leaving hauler key, region key and active null will return all trucks
     * @returns FWT_Haulers_Models_TruckModel Success
     * @throws ApiError
     */
    public getTrucks({
haulerKey,
regionKey,
active,
}: {
/**
 * Setting hauler key will return all trucks associated with that hauler
 */
haulerKey?: number,
/**
 * Setting region key will return all trucks associated with that region
 */
regionKey?: number,
/**
 * Setting active will return all trucks that are either active (true) or inactive (false)
 */
active?: boolean,
}): CancelablePromise<Array<FWT_Haulers_Models_TruckModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/truck',
            query: {
                'haulerKey': haulerKey,
                'regionKey': regionKey,
                'active': active,
            },
        });
    }

    /**
     * Creates a new truck or updates an existing truck
     * To create a new truck, set the truck key to zero.  To update an existing truck, set the truck key to that truck's key
     * @returns FWT_Haulers_Models_TruckModel Success
     * @throws ApiError
     */
    public saveTruck({
requestBody,
}: {
requestBody?: FWT_Haulers_Models_TruckModel,
}): CancelablePromise<FWT_Haulers_Models_TruckModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/truck',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets a truck by key
     * @returns FWT_Haulers_Models_TruckModel Success
     * @throws ApiError
     */
    public getTruckByKey({
truckKey,
}: {
truckKey: number,
}): CancelablePromise<FWT_Haulers_Models_TruckModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/truck/{truckKey}',
            path: {
                'truckKey': truckKey,
            },
        });
    }

    /**
     * Deletes a truck by key
     * @returns any Success
     * @throws ApiError
     */
    public deleteTruck({
truckKey,
}: {
truckKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/truck/{truckKey}',
            path: {
                'truckKey': truckKey,
            },
        });
    }

    /**
     * Gets all images for a truck
     * @returns FWT_Haulers_Models_TruckImageModel Success
     * @throws ApiError
     */
    public getTruckImagesByKey({
truckKey,
}: {
truckKey: number,
}): CancelablePromise<Array<FWT_Haulers_Models_TruckImageModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/truck/{truckKey}/truckimage',
            path: {
                'truckKey': truckKey,
            },
        });
    }

    /**
     * Creates a new truck image or updates an existing truck image
     * To create a new truck image, set the truck image key to zero.  To update an existing truck image, set the truck image key to that image's key
     * @returns FWT_Haulers_Models_TruckImageModel Success
     * @throws ApiError
     */
    public saveTruckImage({
truckKey,
requestBody,
}: {
truckKey: number,
requestBody?: FWT_Haulers_Models_TruckImageModel,
}): CancelablePromise<FWT_Haulers_Models_TruckImageModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/truck/{truckKey}/truckimage',
            path: {
                'truckKey': truckKey,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Deletes a truck image by key
     * @returns any Success
     * @throws ApiError
     */
    public deleteTruckImage({
truckKey,
truckImageKey,
}: {
truckKey: number,
truckImageKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/truck/{truckKey}/truckimage/{truckImageKey}',
            path: {
                'truckKey': truckKey,
                'truckImageKey': truckImageKey,
            },
        });
    }

    /**
     * Gets all truck assignments
     * @returns FWT_Haulers_Models_TruckAssignmentModel Success
     * @throws ApiError
     */
    public getTruckAssignments(): CancelablePromise<Array<FWT_Haulers_Models_TruckAssignmentModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/truck/assignment',
        });
    }

    /**
     * Clears all truck assignments for a single truck or all trucks
     * Leaving the truck key null will clear all truck assignments
     * @returns any Success
     * @throws ApiError
     */
    public clearTruckAssignments({
truckKey,
}: {
/**
 * Optional truck key to clear assigned order product for
 */
truckKey?: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/truck/assignment',
            query: {
                'truckKey': truckKey,
            },
        });
    }

    /**
     * Sets assigned order product key for all trucks listed
     * @returns any Success
     * @throws ApiError
     */
    public saveTruckAssignments({
orderProductKey,
requestBody,
}: {
/**
 * Order product key to assign
 */
orderProductKey: number,
/**
 * Truck keys to have assigned order product key set
 */
requestBody?: Array<number>,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/truck/assignment{orderProductKey}',
            path: {
                'orderProductKey': orderProductKey,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets all truck types
     * @returns FWT_Haulers_Models_TruckTypeModel Success
     * @throws ApiError
     */
    public getTruckTypes(): CancelablePromise<Array<FWT_Haulers_Models_TruckTypeModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/truck/type',
        });
    }

    /**
     * Creates a new truck type or updates an existing truck type
     * To create a new truck type, set the truck type key to zero.  To update an existing truck type, set the truck type key to that truck type's key
     * @returns FWT_Haulers_Models_TruckTypeModel Success
     * @throws ApiError
     */
    public saveTruckType({
requestBody,
}: {
requestBody?: FWT_Haulers_Models_TruckTypeModel,
}): CancelablePromise<FWT_Haulers_Models_TruckTypeModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/truck/type',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets a truck type by key
     * @returns FWT_Haulers_Models_TruckTypeModel Success
     * @throws ApiError
     */
    public getTruckTypeByKey({
truckTypeKey,
}: {
truckTypeKey: number,
}): CancelablePromise<FWT_Haulers_Models_TruckTypeModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/truck/type/{truckTypeKey}',
            path: {
                'truckTypeKey': truckTypeKey,
            },
        });
    }

    /**
     * Deletes a truck type by key
     * @returns any Success
     * @throws ApiError
     */
    public deleteTruckType({
truckTypeKey,
}: {
truckTypeKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/truck/type/{truckTypeKey}',
            path: {
                'truckTypeKey': truckTypeKey,
            },
        });
    }

}

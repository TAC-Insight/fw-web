/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FWT_Products_Models_ProductLocationModel } from '../models/FWT_Products_Models_ProductLocationModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PricingService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get product locations by product key
     * @returns FWT_Products_Models_ProductLocationModel Success
     * @throws ApiError
     */
    public getProductLocationsByProductKey({
productKey,
}: {
productKey: number,
}): CancelablePromise<Array<FWT_Products_Models_ProductLocationModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/pricing/location/{productKey}',
            path: {
                'productKey': productKey,
            },
        });
    }

    /**
     * Creates a new product location or updates an existing product location
     * To create a new product location, set the product location key to zero.  To update an existing product location, set the product location key to that product location's key
     * @returns FWT_Products_Models_ProductLocationModel Success
     * @throws ApiError
     */
    public saveProductLocation({
requestBody,
}: {
requestBody?: FWT_Products_Models_ProductLocationModel,
}): CancelablePromise<FWT_Products_Models_ProductLocationModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/pricing/location',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

}

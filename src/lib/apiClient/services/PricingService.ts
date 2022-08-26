/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductLocationModel } from '../models/ProductLocationModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PricingService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get product locations by product key
     * @returns ProductLocationModel Success
     * @throws ApiError
     */
    public getProductLocationsByProductKey({
productKey,
}: {
productKey: number,
}): CancelablePromise<Array<ProductLocationModel>> {
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
     * @returns ProductLocationModel Success
     * @throws ApiError
     */
    public saveProductLocation({
requestBody,
}: {
requestBody?: ProductLocationModel,
}): CancelablePromise<ProductLocationModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/pricing/location',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

}

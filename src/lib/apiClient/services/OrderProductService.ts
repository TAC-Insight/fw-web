/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CodeValueModel } from '../models/CodeValueModel';
import type { OrderProductModel } from '../models/OrderProductModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OrderProductService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets order products for specified order
     * @returns OrderProductModel Success
     * @throws ApiError
     */
    public getOrderProductsByOrder({
orderKey,
}: {
orderKey: number,
}): CancelablePromise<Array<OrderProductModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orderProduct/order/{orderKey}',
            path: {
                'orderKey': orderKey,
            },
        });
    }

    /**
     * Gets specified order product
     * @returns OrderProductModel Success
     * @throws ApiError
     */
    public getOrderProductByKey({
orderProductKey,
}: {
orderProductKey: number,
}): CancelablePromise<OrderProductModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orderProduct/{orderProductKey}',
            path: {
                'orderProductKey': orderProductKey,
            },
        });
    }

    /**
     * Deletes a orderProduct by key
     * @returns any Success
     * @throws ApiError
     */
    public deleteOrderProduct({
orderProductKey,
}: {
orderProductKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/orderProduct/{orderProductKey}',
            path: {
                'orderProductKey': orderProductKey,
            },
        });
    }

    /**
     * Creates a new order product or updates an existing order product
     * To create a new order product, set the order product key to zero.  To update an existing order product, set the order product key to that order product's key
     * @returns OrderProductModel Success
     * @throws ApiError
     */
    public saveOrderProduct({
requestBody,
}: {
requestBody?: OrderProductModel,
}): CancelablePromise<OrderProductModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orderProduct',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Returns freight/surcharge quantity types
     * @returns CodeValueModel Success
     * @throws ApiError
     */
    public getQuantityTypes(): CancelablePromise<Array<CodeValueModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orderProduct/quantitytypes',
        });
    }

    /**
     * Returns order product statuses
     * @returns CodeValueModel Success
     * @throws ApiError
     */
    public getOrderStatuses(): CancelablePromise<Array<CodeValueModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orderProduct/statuses',
        });
    }

}

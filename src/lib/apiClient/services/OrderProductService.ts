/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FWT_Domain_Models_CodeValueModel } from '../models/FWT_Domain_Models_CodeValueModel';
import type { FWT_Orders_Models_OrderProductModel } from '../models/FWT_Orders_Models_OrderProductModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OrderProductService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets order products for specified order
     * @returns FWT_Orders_Models_OrderProductModel Success
     * @throws ApiError
     */
    public getOrderProductsByOrder({
orderKey,
}: {
orderKey: number,
}): CancelablePromise<Array<FWT_Orders_Models_OrderProductModel>> {
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
     * @returns FWT_Orders_Models_OrderProductModel Success
     * @throws ApiError
     */
    public getOrderProductByKey({
orderProductKey,
}: {
orderProductKey: number,
}): CancelablePromise<FWT_Orders_Models_OrderProductModel> {
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
     * @returns FWT_Orders_Models_OrderProductModel Success
     * @throws ApiError
     */
    public saveOrderProduct({
requestBody,
}: {
requestBody?: FWT_Orders_Models_OrderProductModel,
}): CancelablePromise<FWT_Orders_Models_OrderProductModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orderProduct',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Returns freight/surcharge quantity types
     * @returns FWT_Domain_Models_CodeValueModel Success
     * @throws ApiError
     */
    public getQuantityTypes(): CancelablePromise<Array<FWT_Domain_Models_CodeValueModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orderProduct/quantitytypes',
        });
    }

    /**
     * Returns order product statuses
     * @returns FWT_Domain_Models_CodeValueModel Success
     * @throws ApiError
     */
    public getOrderStatuses(): CancelablePromise<Array<FWT_Domain_Models_CodeValueModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orderProduct/statuses',
        });
    }

}

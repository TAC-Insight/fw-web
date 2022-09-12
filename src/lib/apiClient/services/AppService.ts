/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppModel } from '../models/AppModel';
import type { AppTicketModel } from '../models/AppTicketModel';
import type { CondensedOrderModel } from '../models/CondensedOrderModel';
import type { OrderProductStatusModel } from '../models/OrderProductStatusModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AppService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets app info for logged in device
     * @returns AppModel Success
     * @throws ApiError
     */
    public appInfo(): CancelablePromise<AppModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/app',
        });
    }

    /**
     * @returns number Success
     * @throws ApiError
     */
    public createTicket({
requestBody,
}: {
requestBody?: AppTicketModel,
}): CancelablePromise<number> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/app/ticket',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Returns condensed version of all active orders with order products set up in the device's region/location
     * @returns CondensedOrderModel Success
     * @throws ApiError
     */
    public getCondensedOrders({
inactiveOnly = false,
includeOpenOrders = false,
}: {
/**
 * Set to true to return only inactive orders
 */
inactiveOnly?: boolean,
/**
 * Optionally return open product orders with pricing templates set up for the device's location
 */
includeOpenOrders?: boolean,
}): CancelablePromise<Array<CondensedOrderModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/app/order/condensed',
            query: {
                'inactiveOnly': inactiveOnly,
                'includeOpenOrders': includeOpenOrders,
            },
        });
    }

    /**
     * Returns status of order, orderproduct and customer credit status
     * @returns OrderProductStatusModel Success
     * @throws ApiError
     */
    public getOrderProductStatus({
orderKey,
orderProductKey,
}: {
/**
 * Order key
 */
orderKey: number,
/**
 * Order product key
 */
orderProductKey: number,
}): CancelablePromise<OrderProductStatusModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/app/order/{orderKey}/orderproduct{orderProductKey}/status',
            path: {
                'orderKey': orderKey,
                'orderProductKey': orderProductKey,
            },
        });
    }

}

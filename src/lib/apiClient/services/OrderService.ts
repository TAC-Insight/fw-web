/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CodeValueModel } from '../models/CodeValueModel';
import type { OrderModel } from '../models/OrderModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OrderService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets orders
     * Leaving all parameters null will return all orders
     * @returns OrderModel Success
     * @throws ApiError
     */
    public orderQuery({
regionKey,
locationKey,
customerKey,
status,
hideInactiveCustomers,
ticketSource,
lastHaulDate,
openOrder,
pod,
}: {
/**
 * Setting the region key will return all orders associated with that region
 */
regionKey?: number,
/**
 * Setting the location key will return all orders associated with that location
 */
locationKey?: number,
/**
 * Setting the customer key will return all orders for that customer
 */
customerKey?: number,
/**
 * Order status: A: Active, C: Closed, I:Inactve
 */
status?: string,
/**
 * Setting to true will only return customers that do not have a credit status of Do Not Sell
 */
hideInactiveCustomers?: boolean,
/**
 * Ticket source: All, Portal Only, Mobile, Scale House.  Setting ticket source will always return "All" as well as specified source
 */
ticketSource?: string,
/**
 * Setting the last haul date will return all orders that have hauled since that date
 */
lastHaulDate?: string,
/**
 * Setting to true will only return open product orders
 */
openOrder?: boolean,
/**
 * Setting to true will only returnn orders set to use proof of delivery
 */
pod?: boolean,
}): CancelablePromise<Array<OrderModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/order',
            query: {
                'regionKey': regionKey,
                'locationKey': locationKey,
                'customerKey': customerKey,
                'status': status,
                'hideInactiveCustomers': hideInactiveCustomers,
                'ticketSource': ticketSource,
                'lastHaulDate': lastHaulDate,
                'openOrder': openOrder,
                'pod': pod,
            },
        });
    }

    /**
     * Creates a new order or updates an existing order
     * To create a new order, set the order key to zero.  To update an existing order, set the order key to that order's key
     * @returns OrderModel Success
     * @throws ApiError
     */
    public saveOrder({
requestBody,
}: {
requestBody?: OrderModel,
}): CancelablePromise<OrderModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/order',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets a order by key
     * @returns OrderModel Success
     * @throws ApiError
     */
    public getOrderByKey({
orderKey,
}: {
orderKey: number,
}): CancelablePromise<OrderModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/order/key/{orderKey}',
            path: {
                'orderKey': orderKey,
            },
        });
    }

    /**
     * Gets a order by order number
     * @returns OrderModel Success
     * @throws ApiError
     */
    public getOrderByNumber({
orderNumber,
}: {
orderNumber: number,
}): CancelablePromise<Array<OrderModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/order/number/{orderNumber}',
            path: {
                'orderNumber': orderNumber,
            },
        });
    }

    /**
     * Deletes a order by key
     * @returns any Success
     * @throws ApiError
     */
    public deleteOrder({
orderKey,
}: {
orderKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/order/{orderKey}',
            path: {
                'orderKey': orderKey,
            },
        });
    }

    /**
     * Returns order directions
     * @returns CodeValueModel Success
     * @throws ApiError
     */
    public getOrderDirections(): CancelablePromise<Array<CodeValueModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/order/directions',
        });
    }

    /**
     * Returns order pay types
     * @returns CodeValueModel Success
     * @throws ApiError
     */
    public getOrderPayTypes(): CancelablePromise<Array<CodeValueModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/order/paytypes',
        });
    }

    /**
     * Returns order statuses
     * @returns CodeValueModel Success
     * @throws ApiError
     */
    public getOrderStatuses(): CancelablePromise<Array<CodeValueModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/order/statuses',
        });
    }

    /**
     * Returns ticket sources
     * @returns string Success
     * @throws ApiError
     */
    public getTicketSources(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/order/ticketsources',
        });
    }

}

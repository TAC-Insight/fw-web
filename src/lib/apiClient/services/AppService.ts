/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppCustomerModel } from '../models/AppCustomerModel';
import type { AppModel } from '../models/AppModel';
import type { AppOrderModel } from '../models/AppOrderModel';
import type { AppTicketModel } from '../models/AppTicketModel';

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
     * Gets all customers with order products set up for logged in device's location
     * @returns AppCustomerModel Success
     * @throws ApiError
     */
    public getCustomers({
includeAll = false,
includeOpenOrders = false,
}: {
/**
 * Optionally return all customers for device's region
 */
includeAll?: boolean,
/**
 * Optionally return customers that have open product orders with pricing for device's location
 */
includeOpenOrders?: boolean,
}): CancelablePromise<Array<AppCustomerModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/app/customer',
            query: {
                'includeAll': includeAll,
                'includeOpenOrders': includeOpenOrders,
            },
        });
    }

    /**
     * Gets a specific customer
     * @returns AppCustomerModel Success
     * @throws ApiError
     */
    public getCustomerByKey({
customerKey,
}: {
customerKey: number,
}): CancelablePromise<AppCustomerModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/app/customer/{customerKey}',
            path: {
                'customerKey': customerKey,
            },
        });
    }

    /**
     * Gets all orders with order products set up for logged in device's location
     * @returns AppOrderModel Success
     * @throws ApiError
     */
    public getOrders({
orderProductKey,
includeOpenOrders = false,
}: {
/**
 * Optionally only returns order and the order product associated with given order product key
 */
orderProductKey?: number,
/**
 * Optionally return orders that have open product orders with pricing for device's location
 */
includeOpenOrders?: boolean,
}): CancelablePromise<Array<AppOrderModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/app/order',
            query: {
                'orderProductKey': orderProductKey,
                'includeOpenOrders': includeOpenOrders,
            },
        });
    }

    /**
     * Gets a specific order
     * @returns AppOrderModel Success
     * @throws ApiError
     */
    public getOrderByKey({
orderKey,
}: {
orderKey: number,
}): CancelablePromise<AppOrderModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/app/order/{orderKey}',
            path: {
                'orderKey': orderKey,
            },
        });
    }

}

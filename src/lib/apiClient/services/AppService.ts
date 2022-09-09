/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FWT_App_Models_AppModel } from '../models/FWT_App_Models_AppModel';
import type { FWT_App_Models_AppTicketModel } from '../models/FWT_App_Models_AppTicketModel';
import type { FWT_App_Models_Resources_CondensedOrderModel } from '../models/FWT_App_Models_Resources_CondensedOrderModel';
import type { FWT_App_Models_Resources_CustomerModel } from '../models/FWT_App_Models_Resources_CustomerModel';
import type { FWT_App_Models_Resources_HaulerModel } from '../models/FWT_App_Models_Resources_HaulerModel';
import type { FWT_App_Models_Resources_HaulZoneModel } from '../models/FWT_App_Models_Resources_HaulZoneModel';
import type { FWT_App_Models_Resources_OrderModel } from '../models/FWT_App_Models_Resources_OrderModel';
import type { FWT_App_Models_Resources_OrderProductStatusModel } from '../models/FWT_App_Models_Resources_OrderProductStatusModel';
import type { FWT_App_Models_Resources_PricingAdjustmentModel } from '../models/FWT_App_Models_Resources_PricingAdjustmentModel';
import type { FWT_App_Models_Resources_ProductModel } from '../models/FWT_App_Models_Resources_ProductModel';
import type { FWT_App_Models_Resources_TruckModel } from '../models/FWT_App_Models_Resources_TruckModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AppService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets app info for logged in device
     * @returns FWT_App_Models_AppModel Success
     * @throws ApiError
     */
    public appInfo(): CancelablePromise<FWT_App_Models_AppModel> {
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
requestBody?: FWT_App_Models_AppTicketModel,
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
     * @returns FWT_App_Models_Resources_CustomerModel Success
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
}): CancelablePromise<Array<FWT_App_Models_Resources_CustomerModel>> {
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
     * @returns FWT_App_Models_Resources_CustomerModel Success
     * @throws ApiError
     */
    public getCustomerByKey({
customerKey,
}: {
customerKey: number,
}): CancelablePromise<FWT_App_Models_Resources_CustomerModel> {
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
     * @returns FWT_App_Models_Resources_OrderModel Success
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
}): CancelablePromise<Array<FWT_App_Models_Resources_OrderModel>> {
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
     * @returns FWT_App_Models_Resources_OrderModel Success
     * @throws ApiError
     */
    public getOrderByKey({
orderKey,
}: {
orderKey: number,
}): CancelablePromise<FWT_App_Models_Resources_OrderModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/app/order/{orderKey}',
            path: {
                'orderKey': orderKey,
            },
        });
    }

    /**
     * Returns condensed version of all active orders with order products set up in the device's region/location
     * @returns FWT_App_Models_Resources_CondensedOrderModel Success
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
}): CancelablePromise<Array<FWT_App_Models_Resources_CondensedOrderModel>> {
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
     * @returns FWT_App_Models_Resources_OrderProductStatusModel Success
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
}): CancelablePromise<FWT_App_Models_Resources_OrderProductStatusModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/app/order/{orderKey}/orderproduct{orderProductKey}/status',
            path: {
                'orderKey': orderKey,
                'orderProductKey': orderProductKey,
            },
        });
    }

    /**
     * Returns haulers for device's region
     * @returns FWT_App_Models_Resources_HaulerModel Success
     * @throws ApiError
     */
    public getHaulers(): CancelablePromise<Array<FWT_App_Models_Resources_HaulerModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/app/hauler',
        });
    }

    /**
     * Returns all haulers for device's location
     * @returns FWT_App_Models_Resources_HaulZoneModel Success
     * @throws ApiError
     */
    public getHaulZones(): CancelablePromise<Array<FWT_App_Models_Resources_HaulZoneModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/app/haulzone',
        });
    }

    /**
     * Returns all products and pricings for device's location
     * @returns FWT_App_Models_Resources_ProductModel Success
     * @throws ApiError
     */
    public getProducts({
productKey,
}: {
/**
 * Optionally only returns product associated with given product key
 */
productKey?: number,
}): CancelablePromise<Array<FWT_App_Models_Resources_ProductModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/app/product',
            query: {
                'productKey': productKey,
            },
        });
    }

    /**
     * Returns pricing adjustments
     * @returns FWT_App_Models_Resources_PricingAdjustmentModel Success
     * @throws ApiError
     */
    public getPricingAdjustments({
adjustmentKey,
}: {
/**
 * Optionally only return adjustment for adjustment key
 */
adjustmentKey?: number,
}): CancelablePromise<Array<FWT_App_Models_Resources_PricingAdjustmentModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/app/pricingadjustment',
            query: {
                'adjustmentKey': adjustmentKey,
            },
        });
    }

    /**
     * Returns all trucks for device's region
     * @returns FWT_App_Models_Resources_TruckModel Success
     * @throws ApiError
     */
    public getTrucks({
active,
}: {
/**
 * Leaving active null returns all trucks for region.  Setting active to true|false filters by active status
 */
active?: boolean,
}): CancelablePromise<Array<FWT_App_Models_Resources_TruckModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/app/truck',
            query: {
                'active': active,
            },
        });
    }

    /**
     * @returns FWT_App_Models_Resources_TruckModel Success
     * @throws ApiError
     */
    public getTruckByKey({
truckKey,
}: {
truckKey: number,
}): CancelablePromise<FWT_App_Models_Resources_TruckModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/app/truck/{truckKey}',
            path: {
                'truckKey': truckKey,
            },
        });
    }

}

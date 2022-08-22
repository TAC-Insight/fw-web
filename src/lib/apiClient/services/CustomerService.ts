/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CodeValueModel } from '../models/CodeValueModel';
import type { CustomerModel } from '../models/CustomerModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CustomerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets customers
     * Leaving regionKey and haulerKey null will return all customers
     * @returns CustomerModel Success
     * @throws ApiError
     */
    public getCustomers({
regionKey,
haulerKey,
}: {
/**
 * Setting the regionKey will return all customers associated with that region
 */
regionKey?: number,
/**
 * Setting the haulerKey will return all customers associated with that hauler
 */
haulerKey?: number,
}): CancelablePromise<Array<CustomerModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/customer',
            query: {
                'regionKey': regionKey,
                'haulerKey': haulerKey,
            },
        });
    }

    /**
     * Creates a new customer or updates an existing customer
     * To create a new customer, set the customer key to zero.  To update an existing customer, set the customer key to that customer's key
     * @returns CustomerModel Success
     * @throws ApiError
     */
    public saveCustomer({
requestBody,
}: {
requestBody?: CustomerModel,
}): CancelablePromise<CustomerModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/customer',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets a customer by key
     * @returns CustomerModel Success
     * @throws ApiError
     */
    public getCustomerByKey({
customerKey,
}: {
customerKey: number,
}): CancelablePromise<CustomerModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/customer/{customerKey}',
            path: {
                'customerKey': customerKey,
            },
        });
    }

    /**
     * Deletes a customer by key
     * @returns any Success
     * @throws ApiError
     */
    public deleteCustomer({
customerKey,
}: {
customerKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/customer/{customerKey}',
            path: {
                'customerKey': customerKey,
            },
        });
    }

    /**
     * Returns valid customer credit status codes/values
     * @returns CodeValueModel Success
     * @throws ApiError
     */
    public getCreditStatuses(): CancelablePromise<Array<CodeValueModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/customer/creditstatuses',
        });
    }

    /**
     * Returns valid payment methods/values
     * @returns string Success
     * @throws ApiError
     */
    public getPaymentMethods(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/customer/paymentmethods',
        });
    }

}

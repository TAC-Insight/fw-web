/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerContactModel } from '../models/CustomerContactModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CustomerContactService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets customer contacts for specified customer
     * @returns CustomerContactModel Success
     * @throws ApiError
     */
    public getCustomerContacts({
customerKey,
}: {
customerKey: number,
}): CancelablePromise<Array<CustomerContactModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/customercontact/customer/{customerKey}',
            path: {
                'customerKey': customerKey,
            },
        });
    }

    /**
     * Gets a customer contact by key
     * @returns CustomerContactModel Success
     * @throws ApiError
     */
    public getCustomerContactByKey({
contactKey,
}: {
contactKey: number,
}): CancelablePromise<CustomerContactModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/customercontact/{contactKey}',
            path: {
                'contactKey': contactKey,
            },
        });
    }

    /**
     * Deletes a customer by key
     * @returns any Success
     * @throws ApiError
     */
    public deleteCustomerContact({
contactKey,
}: {
contactKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/customercontact/{contactKey}',
            path: {
                'contactKey': contactKey,
            },
        });
    }

    /**
     * Creates a new customer contact or updates an existing customer contact
     * To create a new customer contact, set the contact key to zero.  To update an existing customer contact, set the contact key to that contact's key
     * @returns CustomerContactModel Success
     * @throws ApiError
     */
    public saveCustomerContact({
requestBody,
}: {
requestBody?: CustomerContactModel,
}): CancelablePromise<CustomerContactModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/customercontact',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

}

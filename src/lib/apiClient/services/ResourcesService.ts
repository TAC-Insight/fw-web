/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillingModeModel } from '../models/BillingModeModel';
import type { CostTypeModel } from '../models/CostTypeModel';
import type { SalespersonModel } from '../models/SalespersonModel';
import type { TermsModel } from '../models/TermsModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ResourcesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets all billing modes
     * @returns BillingModeModel Success
     * @throws ApiError
     */
    public getBillingModes(): CancelablePromise<Array<BillingModeModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/resources/billingmode',
        });
    }

    /**
     * Creates a new billing mode or updates an existing billingMode
     * To create a new billing mode, set the billing mode key to zero.  To update an existing billing mode, set the billing mode key to that billing mode's key
     * @returns BillingModeModel Success
     * @throws ApiError
     */
    public saveBillingMode({
requestBody,
}: {
requestBody?: BillingModeModel,
}): CancelablePromise<BillingModeModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/resources/billingmode',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets a billing mode by key
     * @returns BillingModeModel Success
     * @throws ApiError
     */
    public getBillingModeByKey({
billingModeKey,
}: {
billingModeKey: number,
}): CancelablePromise<BillingModeModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/resources/billingmode/{billingModeKey}',
            path: {
                'billingModeKey': billingModeKey,
            },
        });
    }

    /**
     * Deletes a billing mode by key
     * @returns any Success
     * @throws ApiError
     */
    public deleteBillingMode({
billingModeKey,
}: {
billingModeKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/resources/billingmode/{billingModeKey}',
            path: {
                'billingModeKey': billingModeKey,
            },
        });
    }

    /**
     * Gets all cost types
     * @returns CostTypeModel Success
     * @throws ApiError
     */
    public getCostTypes(): CancelablePromise<Array<CostTypeModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/resources/costtype',
        });
    }

    /**
     * Creates a new cost type or updates an existing costType
     * To create a new cost type, set the cost type key to zero.  To update an existing cost type, set the cost type key to that cost type's key
     * @returns CostTypeModel Success
     * @throws ApiError
     */
    public saveCostType({
requestBody,
}: {
requestBody?: CostTypeModel,
}): CancelablePromise<CostTypeModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/resources/costtype',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets a cost type by key
     * @returns CostTypeModel Success
     * @throws ApiError
     */
    public getCostTypeByKey({
costTypeKey,
}: {
costTypeKey: number,
}): CancelablePromise<CostTypeModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/resources/costtype/{costTypeKey}',
            path: {
                'costTypeKey': costTypeKey,
            },
        });
    }

    /**
     * Deletes a cost type by key
     * @returns any Success
     * @throws ApiError
     */
    public deleteCostType({
costTypeKey,
}: {
costTypeKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/resources/costtype/{costTypeKey}',
            path: {
                'costTypeKey': costTypeKey,
            },
        });
    }

    /**
     * Gets all sales people
     * @returns SalespersonModel Success
     * @throws ApiError
     */
    public getSalespersons(): CancelablePromise<Array<SalespersonModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/resources/salesperson',
        });
    }

    /**
     * Creates a new salesperson or updates an existing salesperson
     * To create a new salesperson, set the salesperson key to zero.  To update an existing salesperson, set the salesperson key to that salesperson's key
     * @returns SalespersonModel Success
     * @throws ApiError
     */
    public saveSalesperson({
requestBody,
}: {
requestBody?: SalespersonModel,
}): CancelablePromise<SalespersonModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/resources/salesperson',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets a salesperson by key
     * @returns SalespersonModel Success
     * @throws ApiError
     */
    public getSalespersonByKey({
salespersonKey,
}: {
salespersonKey: number,
}): CancelablePromise<SalespersonModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/resources/salesperson/{salespersonKey}',
            path: {
                'salespersonKey': salespersonKey,
            },
        });
    }

    /**
     * Deletes a salesperson by key
     * @returns any Success
     * @throws ApiError
     */
    public deleteSalesperson({
salespersonKey,
}: {
salespersonKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/resources/salesperson/{salespersonKey}',
            path: {
                'salespersonKey': salespersonKey,
            },
        });
    }

    /**
     * Gets all terms
     * @returns TermsModel Success
     * @throws ApiError
     */
    public getTerms(): CancelablePromise<Array<TermsModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/resources/terms',
        });
    }

    /**
     * Creates a new term or updates an existing term
     * To create a new term, set the term key to zero.  To update an existing term, set the term key to that term's key
     * @returns TermsModel Success
     * @throws ApiError
     */
    public saveTerm({
requestBody,
}: {
requestBody?: TermsModel,
}): CancelablePromise<TermsModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/resources/terms',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets a term by key
     * @returns TermsModel Success
     * @throws ApiError
     */
    public getTermByKey({
termKey,
}: {
termKey: number,
}): CancelablePromise<TermsModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/resources/terms/{termKey}',
            path: {
                'termKey': termKey,
            },
        });
    }

    /**
     * Deletes a term by key
     * @returns any Success
     * @throws ApiError
     */
    public deleteTerm({
termKey,
}: {
termKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/resources/terms/{termKey}',
            path: {
                'termKey': termKey,
            },
        });
    }

}

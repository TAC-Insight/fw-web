/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaxCodeGroupModel } from '../models/TaxCodeGroupModel';
import type { TaxCodeModel } from '../models/TaxCodeModel';
import type { TaxSubcodeModel } from '../models/TaxSubcodeModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TaxCodeService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets tax codes
     * @returns TaxCodeModel Success
     * @throws ApiError
     */
    public getTaxCodes(): CancelablePromise<Array<TaxCodeModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/taxcode',
        });
    }

    /**
     * Creates a new taxCode or updates an existing taxCode
     * To create a new taxCode, set the taxCode key to zero.  To update an existing taxCode, set the taxCode key to that taxCode's key
     * @returns TaxCodeModel Success
     * @throws ApiError
     */
    public saveTaxCode({
requestBody,
}: {
requestBody?: TaxCodeModel,
}): CancelablePromise<TaxCodeModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/taxcode',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets a tax code by key
     * @returns TaxCodeModel Success
     * @throws ApiError
     */
    public getTaxCodeByKey({
taxCodeKey,
}: {
taxCodeKey: number,
}): CancelablePromise<TaxCodeModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/taxcode/{taxCodeKey}',
            path: {
                'taxCodeKey': taxCodeKey,
            },
        });
    }

    /**
     * Deletes a taxCode by key
     * @returns any Success
     * @throws ApiError
     */
    public deleteTaxCode({
taxCodeKey,
}: {
taxCodeKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/taxcode/{taxCodeKey}',
            path: {
                'taxCodeKey': taxCodeKey,
            },
        });
    }

    /**
     * Gets all tax sub codes
     * @returns TaxSubcodeModel Success
     * @throws ApiError
     */
    public getTaxSubcodes(): CancelablePromise<Array<TaxSubcodeModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/taxcode/subcode',
        });
    }

    /**
     * Creates a new tax sub code or updates an existing tax sub code
     * To create a new tax sub code, set the tax sub code key to zero.  To update an existing tax sub code, set the tax sub code key to that tax sub code's key
     * @returns TaxSubcodeModel Success
     * @throws ApiError
     */
    public saveTaxSubcode({
requestBody,
}: {
requestBody?: TaxSubcodeModel,
}): CancelablePromise<TaxSubcodeModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/taxcode/subcode',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets a tax sub code by key
     * @returns TaxSubcodeModel Success
     * @throws ApiError
     */
    public getTaxSubcodeByKey({
taxSubcodeKey,
}: {
taxSubcodeKey: number,
}): CancelablePromise<TaxSubcodeModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/taxcode/subcode/{taxSubcodeKey}',
            path: {
                'taxSubcodeKey': taxSubcodeKey,
            },
        });
    }

    /**
     * Deletes a tax sub code by key
     * @returns any Success
     * @throws ApiError
     */
    public deleteTaxSubcode({
taxSubcodeKey,
}: {
taxSubcodeKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/taxcode/subcode/{taxSubcodeKey}',
            path: {
                'taxSubcodeKey': taxSubcodeKey,
            },
        });
    }

    /**
     * Gets all tax code groups
     * @returns TaxCodeGroupModel Success
     * @throws ApiError
     */
    public getTaxCodeGroups(): CancelablePromise<Array<TaxCodeGroupModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/taxcode/group',
        });
    }

    /**
     * Creates a new tax code group or updates an existing tax code group
     * To create a new tax code group, set the tax code group key to zero.  To update an existing tax code group, set the tax code group key to that tax code group's key
     * @returns TaxCodeGroupModel Success
     * @throws ApiError
     */
    public saveTaxCodeGroup({
requestBody,
}: {
requestBody?: TaxCodeGroupModel,
}): CancelablePromise<TaxCodeGroupModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/taxcode/group',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets a tax code group by key
     * @returns TaxCodeGroupModel Success
     * @throws ApiError
     */
    public getTaxCodeGroupByKey({
groupKey,
}: {
groupKey: number,
}): CancelablePromise<TaxCodeGroupModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/taxcode/group/{groupKey}',
            path: {
                'groupKey': groupKey,
            },
        });
    }

    /**
     * Deletes a tax code group by key
     * @returns any Success
     * @throws ApiError
     */
    public deleteTaxCodeGroup({
groupKey,
}: {
groupKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/taxcode/group/{groupKey}',
            path: {
                'groupKey': groupKey,
            },
        });
    }

    /**
     * Adds a tax code to a tax code group
     * @returns any Success
     * @throws ApiError
     */
    public addTaxCodeToGroup({
groupKey,
taxCodeKey,
}: {
/**
 * Tax code group key
 */
groupKey: number,
/**
 * Tax code key to add to group
 */
taxCodeKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/taxcode/group/{groupKey}/taxcodes/{taxCodeKey}',
            path: {
                'groupKey': groupKey,
                'taxCodeKey': taxCodeKey,
            },
        });
    }

    /**
     * Removes a tax code from a tax code group
     * @returns any Success
     * @throws ApiError
     */
    public removeTaxCodeFromGroup({
groupKey,
taxCodeKey,
}: {
/**
 * Tax code group key
 */
groupKey: number,
/**
 * Tax code key to remove from group
 */
taxCodeKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/taxcode/group/{groupKey}/taxcodes/{taxCodeKey}',
            path: {
                'groupKey': groupKey,
                'taxCodeKey': taxCodeKey,
            },
        });
    }

    /**
     * Gets all tax codes for a group
     * @returns TaxCodeModel Success
     * @throws ApiError
     */
    public getTaxCodesByGroupKey({
groupKey,
}: {
groupKey: number,
}): CancelablePromise<Array<TaxCodeModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/taxcode/group/{groupKey}/taxcodes',
            path: {
                'groupKey': groupKey,
            },
        });
    }

}

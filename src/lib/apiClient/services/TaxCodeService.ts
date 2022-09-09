/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FWT_TaxCodes_Models_TaxCodeGroupModel } from '../models/FWT_TaxCodes_Models_TaxCodeGroupModel';
import type { FWT_TaxCodes_Models_TaxCodeModel } from '../models/FWT_TaxCodes_Models_TaxCodeModel';
import type { FWT_TaxCodes_Models_TaxSubcodeModel } from '../models/FWT_TaxCodes_Models_TaxSubcodeModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TaxCodeService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets tax codes
     * @returns FWT_TaxCodes_Models_TaxCodeModel Success
     * @throws ApiError
     */
    public getTaxCodes(): CancelablePromise<Array<FWT_TaxCodes_Models_TaxCodeModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/taxcode',
        });
    }

    /**
     * Creates a new taxCode or updates an existing taxCode
     * To create a new taxCode, set the taxCode key to zero.  To update an existing taxCode, set the taxCode key to that taxCode's key
     * @returns FWT_TaxCodes_Models_TaxCodeModel Success
     * @throws ApiError
     */
    public saveTaxCode({
requestBody,
}: {
requestBody?: FWT_TaxCodes_Models_TaxCodeModel,
}): CancelablePromise<FWT_TaxCodes_Models_TaxCodeModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/taxcode',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets a tax code by key
     * @returns FWT_TaxCodes_Models_TaxCodeModel Success
     * @throws ApiError
     */
    public getTaxCodeByKey({
taxCodeKey,
}: {
taxCodeKey: number,
}): CancelablePromise<FWT_TaxCodes_Models_TaxCodeModel> {
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
     * @returns FWT_TaxCodes_Models_TaxSubcodeModel Success
     * @throws ApiError
     */
    public getTaxSubcodes(): CancelablePromise<Array<FWT_TaxCodes_Models_TaxSubcodeModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/taxcode/subcode',
        });
    }

    /**
     * Creates a new tax sub code or updates an existing tax sub code
     * To create a new tax sub code, set the tax sub code key to zero.  To update an existing tax sub code, set the tax sub code key to that tax sub code's key
     * @returns FWT_TaxCodes_Models_TaxSubcodeModel Success
     * @throws ApiError
     */
    public saveTaxSubcode({
requestBody,
}: {
requestBody?: FWT_TaxCodes_Models_TaxSubcodeModel,
}): CancelablePromise<FWT_TaxCodes_Models_TaxSubcodeModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/taxcode/subcode',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets a tax sub code by key
     * @returns FWT_TaxCodes_Models_TaxSubcodeModel Success
     * @throws ApiError
     */
    public getTaxSubcodeByKey({
taxSubcodeKey,
}: {
taxSubcodeKey: number,
}): CancelablePromise<FWT_TaxCodes_Models_TaxSubcodeModel> {
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
     * @returns FWT_TaxCodes_Models_TaxCodeGroupModel Success
     * @throws ApiError
     */
    public getTaxCodeGroups(): CancelablePromise<Array<FWT_TaxCodes_Models_TaxCodeGroupModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/taxcode/group',
        });
    }

    /**
     * Creates a new tax code group or updates an existing tax code group
     * To create a new tax code group, set the tax code group key to zero.  To update an existing tax code group, set the tax code group key to that tax code group's key
     * @returns FWT_TaxCodes_Models_TaxCodeGroupModel Success
     * @throws ApiError
     */
    public saveTaxCodeGroup({
requestBody,
}: {
requestBody?: FWT_TaxCodes_Models_TaxCodeGroupModel,
}): CancelablePromise<FWT_TaxCodes_Models_TaxCodeGroupModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/taxcode/group',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets a tax code group by key
     * @returns FWT_TaxCodes_Models_TaxCodeGroupModel Success
     * @throws ApiError
     */
    public getTaxCodeGroupByKey({
groupKey,
}: {
groupKey: number,
}): CancelablePromise<FWT_TaxCodes_Models_TaxCodeGroupModel> {
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
     * @returns FWT_TaxCodes_Models_TaxCodeModel Success
     * @throws ApiError
     */
    public getTaxCodesByGroupKey({
groupKey,
}: {
groupKey: number,
}): CancelablePromise<Array<FWT_TaxCodes_Models_TaxCodeModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/taxcode/group/{groupKey}/taxcodes',
            path: {
                'groupKey': groupKey,
            },
        });
    }

}

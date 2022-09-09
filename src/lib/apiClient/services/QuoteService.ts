/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FWT_Domain_Models_CodeValueModel } from '../models/FWT_Domain_Models_CodeValueModel';
import type { FWT_Quotes_Models_QuoteDashboardModel } from '../models/FWT_Quotes_Models_QuoteDashboardModel';
import type { FWT_Quotes_Models_QuoteModel } from '../models/FWT_Quotes_Models_QuoteModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class QuoteService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets quotes
     * Leaving all parameters null will return all quotes
     * @returns FWT_Quotes_Models_QuoteModel Success
     * @throws ApiError
     */
    public quoteQuery({
regionKey,
locationKey,
projectKey,
status,
}: {
/**
 * Setting the region key will return all quotes associated with that region
 */
regionKey?: number,
/**
 * Setting the location key will return all quotes associated with that location
 */
locationKey?: number,
/**
 * Setting the project key will return all quotes for that project
 */
projectKey?: number,
/**
 * Quote status: A: Active, C: Closed, I:Inactve
 */
status?: string,
}): CancelablePromise<Array<FWT_Quotes_Models_QuoteModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/quote',
            query: {
                'regionKey': regionKey,
                'locationKey': locationKey,
                'projectKey': projectKey,
                'status': status,
            },
        });
    }

    /**
     * Creates a new quote or updates an existing quote
     * To create a new quote, set the quote key to zero.  To update an existing quote, set the quote key to that quote's key
     * @returns FWT_Quotes_Models_QuoteModel Success
     * @throws ApiError
     */
    public saveQuote({
requestBody,
}: {
requestBody?: FWT_Quotes_Models_QuoteModel,
}): CancelablePromise<FWT_Quotes_Models_QuoteModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/quote',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets a quote by key
     * @returns FWT_Quotes_Models_QuoteModel Success
     * @throws ApiError
     */
    public getQuoteByKey({
quoteKey,
}: {
quoteKey: number,
}): CancelablePromise<FWT_Quotes_Models_QuoteModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/quote/key/{quoteKey}',
            path: {
                'quoteKey': quoteKey,
            },
        });
    }

    /**
     * Gets a quote by quote number
     * @returns FWT_Quotes_Models_QuoteModel Success
     * @throws ApiError
     */
    public getQuoteByNumber({
quoteNumber,
}: {
quoteNumber: number,
}): CancelablePromise<FWT_Quotes_Models_QuoteModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/quote/number/{quoteNumber}',
            path: {
                'quoteNumber': quoteNumber,
            },
        });
    }

    /**
     * Deletes a quote by key
     * @returns any Success
     * @throws ApiError
     */
    public deleteQuote({
quoteKey,
}: {
quoteKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/quote/{quoteKey}',
            path: {
                'quoteKey': quoteKey,
            },
        });
    }

    /**
     * Creates a new quote as a copy of the specified quote
     * @returns FWT_Quotes_Models_QuoteModel Success
     * @throws ApiError
     */
    public copyQuote({
quoteKey,
}: {
/**
 * Quote key of quote to copy
 */
quoteKey: number,
}): CancelablePromise<FWT_Quotes_Models_QuoteModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/quote/{quoteKey}/copy',
            path: {
                'quoteKey': quoteKey,
            },
        });
    }

    /**
     * Creates a new order from the specified quote
     * @returns number Success
     * @throws ApiError
     */
    public awardQuote({
quoteKey,
}: {
/**
 * Quote key of quote to award
 */
quoteKey: number,
}): CancelablePromise<number> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/quote/{quoteKey}/award',
            path: {
                'quoteKey': quoteKey,
            },
        });
    }

    /**
     * @returns FWT_Quotes_Models_QuoteDashboardModel Success
     * @throws ApiError
     */
    public dashboardQuery({
regionKey,
locationKey,
productKey,
salespersonKey,
fromDate,
toDate,
}: {
regionKey?: number,
locationKey?: number,
productKey?: number,
salespersonKey?: number,
fromDate?: string,
toDate?: string,
}): CancelablePromise<Array<FWT_Quotes_Models_QuoteDashboardModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/quote/dashboard',
            query: {
                'regionKey': regionKey,
                'locationKey': locationKey,
                'productKey': productKey,
                'salespersonKey': salespersonKey,
                'fromDate': fromDate,
                'toDate': toDate,
            },
        });
    }

    /**
     * Returns order directions
     * @returns FWT_Domain_Models_CodeValueModel Success
     * @throws ApiError
     */
    public getQuoteDirections(): CancelablePromise<Array<FWT_Domain_Models_CodeValueModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/quote/directions',
        });
    }

    /**
     * Returns quote pay types
     * @returns FWT_Domain_Models_CodeValueModel Success
     * @throws ApiError
     */
    public getQuotePayTypes(): CancelablePromise<Array<FWT_Domain_Models_CodeValueModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/quote/paytypes',
        });
    }

    /**
     * Returns order statuses
     * @returns FWT_Domain_Models_CodeValueModel Success
     * @throws ApiError
     */
    public getQuoteStatuses(): CancelablePromise<Array<FWT_Domain_Models_CodeValueModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/quote/statuses',
        });
    }

}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CodeValueModel } from '../models/CodeValueModel';
import type { QuoteProductModel } from '../models/QuoteProductModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class QuoteProductService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets quote products for specified quote
     * @returns QuoteProductModel Success
     * @throws ApiError
     */
    public getQuoteProductsByQuote({
quoteKey,
}: {
quoteKey: number,
}): CancelablePromise<Array<QuoteProductModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/quoteProduct/quote/{quoteKey}',
            path: {
                'quoteKey': quoteKey,
            },
        });
    }

    /**
     * Gets specified quote product
     * @returns QuoteProductModel Success
     * @throws ApiError
     */
    public getQuoteProductByKey({
quoteProductKey,
}: {
quoteProductKey: number,
}): CancelablePromise<QuoteProductModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/quoteProduct/{quoteProductKey}',
            path: {
                'quoteProductKey': quoteProductKey,
            },
        });
    }

    /**
     * Deletes a quoteProduct by key
     * @returns any Success
     * @throws ApiError
     */
    public deleteQuoteProduct({
quoteProductKey,
}: {
quoteProductKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/quoteProduct/{quoteProductKey}',
            path: {
                'quoteProductKey': quoteProductKey,
            },
        });
    }

    /**
     * Creates a new quote product or updates an existing quote product
     * To create a new quote product, set the quote product key to zero.  To update an existing quote product, set the quote product key to that quote product's key
     * @returns QuoteProductModel Success
     * @throws ApiError
     */
    public saveQuoteProduct({
requestBody,
}: {
requestBody?: QuoteProductModel,
}): CancelablePromise<QuoteProductModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/quoteProduct',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Returns freight/surcharge quantity types
     * @returns CodeValueModel Success
     * @throws ApiError
     */
    public getQuantityTypes(): CancelablePromise<Array<CodeValueModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/quoteProduct/quantitytypes',
        });
    }

}

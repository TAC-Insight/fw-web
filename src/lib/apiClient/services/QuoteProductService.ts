/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FWT_Domain_Models_CodeValueModel } from '../models/FWT_Domain_Models_CodeValueModel';
import type { FWT_Quotes_Models_QuoteProductModel } from '../models/FWT_Quotes_Models_QuoteProductModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class QuoteProductService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets quote products for specified quote
     * @returns FWT_Quotes_Models_QuoteProductModel Success
     * @throws ApiError
     */
    public getQuoteProductsByQuote({
quoteKey,
}: {
quoteKey: number,
}): CancelablePromise<Array<FWT_Quotes_Models_QuoteProductModel>> {
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
     * @returns FWT_Quotes_Models_QuoteProductModel Success
     * @throws ApiError
     */
    public getQuoteProductByKey({
quoteProductKey,
}: {
quoteProductKey: number,
}): CancelablePromise<FWT_Quotes_Models_QuoteProductModel> {
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
     * @returns FWT_Quotes_Models_QuoteProductModel Success
     * @throws ApiError
     */
    public saveQuoteProduct({
requestBody,
}: {
requestBody?: FWT_Quotes_Models_QuoteProductModel,
}): CancelablePromise<FWT_Quotes_Models_QuoteProductModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/quoteProduct',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Returns freight/surcharge quantity types
     * @returns FWT_Domain_Models_CodeValueModel Success
     * @throws ApiError
     */
    public getQuantityTypes(): CancelablePromise<Array<FWT_Domain_Models_CodeValueModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/quoteProduct/quantitytypes',
        });
    }

}

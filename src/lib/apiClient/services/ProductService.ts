/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductModel } from '../models/ProductModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProductService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets all products
     * @returns ProductModel Success
     * @throws ApiError
     */
    public getProducts(): CancelablePromise<Array<ProductModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/product',
        });
    }

    /**
     * Creates a new product or updates an existing product
     * To create a new product, set the product key to zero.  To update an existing product, set the product key to that product's key
     * @returns ProductModel Success
     * @throws ApiError
     */
    public saveProduct({
requestBody,
}: {
requestBody?: ProductModel,
}): CancelablePromise<ProductModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/product',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets a product by key
     * @returns ProductModel Success
     * @throws ApiError
     */
    public getProductByKey({
productKey,
}: {
productKey: number,
}): CancelablePromise<ProductModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/product/{productKey}',
            path: {
                'productKey': productKey,
            },
        });
    }

    /**
     * Deletes a product by key
     * @returns any Success
     * @throws ApiError
     */
    public deleteProduct({
productKey,
}: {
productKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/product/{productKey}',
            path: {
                'productKey': productKey,
            },
        });
    }

    /**
     * @returns string Success
     * @throws ApiError
     */
    public getUnitsOfMeasure(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/product/unitsofmeasure',
        });
    }

}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductCategoryModel } from '../models/ProductCategoryModel';
import type { ProductLocationModel } from '../models/ProductLocationModel';
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

    /**
     * Gets all product categories
     * @returns ProductCategoryModel Success
     * @throws ApiError
     */
    public getProductCategories(): CancelablePromise<Array<ProductCategoryModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/product/category',
        });
    }

    /**
     * Creates a new product category or updates an existing product category
     * To create a new product category, set the product category key to zero.  To update an existing product category, set the product category key to that product category's key
     * @returns ProductCategoryModel Success
     * @throws ApiError
     */
    public saveProductCategory({
requestBody,
}: {
requestBody?: ProductCategoryModel,
}): CancelablePromise<ProductCategoryModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/product/category',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets a product category by key
     * @returns ProductCategoryModel Success
     * @throws ApiError
     */
    public getProductCategoryByKey({
productCategoryKey,
}: {
productCategoryKey: number,
}): CancelablePromise<ProductCategoryModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/product/category/{productCategoryKey}',
            path: {
                'productCategoryKey': productCategoryKey,
            },
        });
    }

    /**
     * Deletes a product category by key
     * @returns any Success
     * @throws ApiError
     */
    public deleteProductCategory({
productCategoryKey,
}: {
productCategoryKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/product/category/{productCategoryKey}',
            path: {
                'productCategoryKey': productCategoryKey,
            },
        });
    }

    /**
     * Get product locations by product key
     * @returns ProductLocationModel Success
     * @throws ApiError
     */
    public getProductLocationsByProductKey({
productKey,
}: {
productKey: number,
}): CancelablePromise<Array<ProductLocationModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/product/pricing/location/{productKey}',
            path: {
                'productKey': productKey,
            },
        });
    }

    /**
     * Creates a new product location or updates an existing product location
     * To create a new product location, set the product location key to zero.  To update an existing product location, set the product location key to that product location's key
     * @returns ProductLocationModel Success
     * @throws ApiError
     */
    public saveProductLocation({
requestBody,
}: {
requestBody?: ProductLocationModel,
}): CancelablePromise<ProductLocationModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/product/pricing/location',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

}

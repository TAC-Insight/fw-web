/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UDFModel } from '../models/UDFModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UdfService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets customer udfs
     * @returns UDFModel Success
     * @throws ApiError
     */
    public getCustomerUdf(): CancelablePromise<UDFModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/udf/customer',
        });
    }

    /**
     * Saves customer udfs
     * @returns any Success
     * @throws ApiError
     */
    public saveCustomerUdf({
requestBody,
}: {
requestBody?: UDFModel,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/udf/customer',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets truck udfs
     * @returns UDFModel Success
     * @throws ApiError
     */
    public getTruckUdf(): CancelablePromise<UDFModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/udf/truck',
        });
    }

    /**
     * Saves truck udfs
     * @returns any Success
     * @throws ApiError
     */
    public saveTruckUdf({
requestBody,
}: {
requestBody?: UDFModel,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/udf/truck',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets order udfs
     * @returns UDFModel Success
     * @throws ApiError
     */
    public getOrderUdf(): CancelablePromise<UDFModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/udf/order',
        });
    }

    /**
     * Saves order udfs
     * @returns any Success
     * @throws ApiError
     */
    public saveOrderUdf({
requestBody,
}: {
requestBody?: UDFModel,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/udf/order',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets ticket udfs
     * @returns UDFModel Success
     * @throws ApiError
     */
    public getTicketUdf(): CancelablePromise<UDFModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/udf/ticket',
        });
    }

    /**
     * Saves ticket udfs
     * @returns any Success
     * @throws ApiError
     */
    public saveTicketUdf({
requestBody,
}: {
requestBody?: UDFModel,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/udf/ticket',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets device udfs by device key
     * @returns UDFModel Success
     * @throws ApiError
     */
    public getDeviceUdf({
deviceKey,
}: {
deviceKey: number,
}): CancelablePromise<UDFModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/udf/device/{deviceKey}',
            path: {
                'deviceKey': deviceKey,
            },
        });
    }

    /**
     * Saves device udfs
     * @returns any Success
     * @throws ApiError
     */
    public saveDeviceUdf({
deviceKey,
requestBody,
}: {
deviceKey: number,
requestBody?: UDFModel,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/udf/device/{deviceKey}',
            path: {
                'deviceKey': deviceKey,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Returns all udf data types
     * @returns string Success
     * @throws ApiError
     */
    public getUdfDataTypes(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/udf/datatype',
        });
    }

}

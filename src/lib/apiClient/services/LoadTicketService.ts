/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FWT_LoadTickets_Models_LoadTicketQueryModel } from '../models/FWT_LoadTickets_Models_LoadTicketQueryModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LoadTicketService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns FWT_LoadTickets_Models_LoadTicketQueryModel Success
     * @throws ApiError
     */
    public query({
fromDate,
toDate,
orderKey,
regionKey,
locationKey,
yardKey,
customerKey,
productKey,
haulerKey,
truckKey,
operatorId,
ticketNumber,
includeVoid,
batchNum,
invoiceNum,
mpTicketNumber,
poNumber,
invoiceHistoryKey,
}: {
fromDate: string,
toDate?: string,
orderKey?: number,
regionKey?: number,
locationKey?: number,
yardKey?: number,
customerKey?: number,
productKey?: number,
haulerKey?: number,
truckKey?: number,
operatorId?: string,
ticketNumber?: number,
includeVoid?: boolean,
batchNum?: string,
invoiceNum?: number,
mpTicketNumber?: number,
poNumber?: string,
invoiceHistoryKey?: number,
}): CancelablePromise<Array<FWT_LoadTickets_Models_LoadTicketQueryModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/loadticket/query',
            query: {
                'fromDate': fromDate,
                'toDate': toDate,
                'orderKey': orderKey,
                'regionKey': regionKey,
                'locationKey': locationKey,
                'yardKey': yardKey,
                'customerKey': customerKey,
                'productKey': productKey,
                'haulerKey': haulerKey,
                'truckKey': truckKey,
                'operatorID': operatorId,
                'ticketNumber': ticketNumber,
                'includeVoid': includeVoid,
                'batchNum': batchNum,
                'invoiceNum': invoiceNum,
                'mpTicketNumber': mpTicketNumber,
                'poNumber': poNumber,
                'invoiceHistoryKey': invoiceHistoryKey,
            },
        });
    }

}

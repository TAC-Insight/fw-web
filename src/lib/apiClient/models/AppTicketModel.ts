/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CashSaleModel } from './CashSaleModel';

export type AppTicketModel = {
    ticketNumber?: number;
    orderKey?: number;
    orderProductKey?: number;
    job?: string | null;
    phase?: string | null;
    costType?: string | null;
    ticketDateTime?: string;
    printDateTime?: string;
    operator?: string | null;
    truckKey?: number;
    grossWeight?: number | null;
    tareWeight?: number | null;
    netWeight?: number;
    void?: boolean;
    jobCompanyCode?: string | null;
    mpTicketNumber?: number | null;
    udF1?: string | null;
    udF2?: string | null;
    udF3?: string | null;
    cashReference?: string | null;
    utcOffset?: number;
    manualWeight?: boolean;
    haulZoneKey?: number | null;
    note?: string | null;
    pdf?: string | null;
    signature?: string | null;
    image?: string | null;
    fieldID?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    delivered?: boolean | null;
    taxCodeKey?: number | null;
    requestKey?: number | null;
    cashSale?: CashSaleModel;
};

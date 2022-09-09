/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FWT_Orders_Models_OrderModel = {
    orderKey?: number;
    regionKey?: number;
    orderNumber?: number;
    customerKey?: number;
    direction: string;
    payType: string;
    poNumber?: string | null;
    defaultJob?: string | null;
    defaultPhase?: string | null;
    costType?: string | null;
    deliveryLocation?: string | null;
    status: string;
    dateAdded: string;
    addedBy: string;
    loadDefault?: number | null;
    useTruckCapacity: boolean;
    ticketSource: string;
    jobRequisition: boolean;
    description?: string | null;
    openProductOrder: boolean;
    defaultJobCompanyCode?: string | null;
    certified?: boolean | null;
    amountMinimum?: number | null;
    lastHaulDate?: string | null;
    useHaulZones?: boolean | null;
    usePOD?: boolean | null;
    orderUDF1?: string | null;
    orderUDF2?: string | null;
    orderUDF3?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    reviewRequired?: boolean | null;
    note?: string | null;
    salespersonKey?: number | null;
    entityUseCode?: string | null;
    externalOrderID?: string | null;
    pricingTemplateKey?: number | null;
    address1?: string | null;
    address2?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    country?: string | null;
    readonly modifiedDate?: string;
    geofenceRadius?: number | null;
    readonly regionDisplay?: string | null;
    readonly customerDisplay?: string | null;
    readonly salespersonDisplay?: string | null;
    readonly pricingTemplateDisplay?: string | null;
};

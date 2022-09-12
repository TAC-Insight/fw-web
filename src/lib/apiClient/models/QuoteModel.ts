/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type QuoteModel = {
    quoteKey?: number;
    projectKey?: number | null;
    description: string;
    regionKey?: number;
    customerKey?: number;
    direction: string;
    payType: string;
    poNumber?: string | null;
    jobNumber?: string | null;
    startDate?: string | null;
    awardDate?: string | null;
    status: string;
    orderKey?: number | null;
    quoteNumber?: number | null;
    note?: string | null;
    deliveryLocation?: string | null;
    quoteUDF1?: string | null;
    quoteUDF2?: string | null;
    quoteUDF3?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    certified?: boolean | null;
    salespersonKey?: number | null;
    createDate?: string | null;
    expireDate?: string | null;
    distributionFormat?: string | null;
    distributionStatus?: string | null;
    distributionStatusDate?: string | null;
    distributionStatusUser?: string | null;
    entityUseCode?: string | null;
    pricingTemplateKey?: number | null;
    address1?: string | null;
    address2?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    country?: string | null;
    geofenceRadius?: number | null;
    readonly regionDisplay?: string | null;
    readonly customerDisplay?: string | null;
    readonly salespersonDisplay?: string | null;
    readonly pricingTemplateDisplay?: string | null;
    readonly materialAmount?: number;
    readonly freightAmount?: number;
    readonly surchargeAmount?: number;
    readonly taxAmount?: number;
    readonly totalAmount?: number;
};

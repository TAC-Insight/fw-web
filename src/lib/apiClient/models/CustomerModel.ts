/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomerRegionModel } from './CustomerRegionModel';

export type CustomerModel = {
    customerKey?: number;
    customerID: string;
    customerName: string;
    address1?: string | null;
    address2?: string | null;
    city?: string | null;
    phone?: string | null;
    creditStatus: string;
    allRegion: boolean;
    companyCode?: string | null;
    termsCode?: string | null;
    state?: string | null;
    zip?: string | null;
    taxCodeKey?: number | null;
    defaultOrderKey?: number | null;
    billingModeCode?: string | null;
    prospect?: boolean | null;
    country?: string | null;
    taxExemptRefNum?: string | null;
    ticketCopies?: number | null;
    qbid?: string | null;
    salespersonKey?: number | null;
    webKey?: string | null;
    entityUseCode?: string | null;
    pricingTemplateKey: number;
    customerUDF1?: string | null;
    customerUDF2?: string | null;
    customerUDF3?: string | null;
    creditLimit?: number | null;
    creditBalance?: number | null;
    readonly paymentProviderID?: string | null;
    sharedCashCustomer?: boolean | null;
    allowedPaymentMethods?: string | null;
    paymentFeeKey?: number | null;
    lateFeeKey?: number | null;
    readonly modifiedDate?: string;
    regions?: Array<CustomerRegionModel> | null;
    readonly taxCodeDisplay?: string | null;
    readonly creditStatusDisplay?: string | null;
    readonly salespersonDisplay?: string | null;
    readonly paymentFeeDisplay?: string | null;
    readonly lateFeeDisplay?: string | null;
    readonly pricingTemplateDisplay?: string | null;
    readonly termsDisplay?: string | null;
    readonly billingModeDisplay?: string | null;
    readonly defaultOrderDisplay?: string | null;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AppOrderProductModel = {
    orderProductKey?: number;
    orderKey?: number;
    productKey?: number;
    yardKey?: number;
    unitPrice?: number;
    haulerRate?: number;
    freightRate?: number;
    freightType?: string | null;
    taxCodeKey?: number;
    surcharge?: number;
    surchargeType?: string | null;
    orderQuantity?: number | null;
    orderQuantityType?: string | null;
    status?: string | null;
    expirationDate?: string | null;
    deliveryDate?: string | null;
    defaultPhase?: string | null;
    costType?: string | null;
    adjustmentKey1?: number | null;
    adjustmentKey2?: number | null;
    adjustmentKey3?: number | null;
    taxGroupKey?: number | null;
    haulerKey?: number | null;
    pricingDescription?: string | null;
};

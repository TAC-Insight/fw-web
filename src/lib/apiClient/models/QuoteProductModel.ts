/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type QuoteProductModel = {
    quoteProductKey: number;
    tenantID: string;
    quoteKey: number;
    productKey: number;
    locationKey: number;
    yardKey: number;
    unitPrice: number;
    freightRate: number;
    freightType: string;
    taxCodeKey: number;
    orderQuantity: number;
    materialAmount?: number | null;
    freightAmount?: number | null;
    taxAmount?: number | null;
    totalAmount?: number | null;
    surchargeType?: string | null;
    surcharge?: number | null;
    surchargeAmount?: number | null;
    orderQuantityType?: string | null;
    adjustmentKey1?: number | null;
    adjustmentKey2?: number | null;
    adjustmentKey3?: number | null;
    taxCodeGroupKey?: number | null;
    haulerKey?: number | null;
    description?: string | null;
    haulerRate?: number | null;
    activeDate?: string | null;
    expirationDate?: string | null;
    deliveryDate?: string | null;
    readonly productDisplay?: string | null;
    readonly locationDisplay?: string | null;
    readonly yardDisplay?: string | null;
    readonly taxCodeDisplay?: string | null;
    readonly haulerDisplay?: string | null;
    readonly taxCodeGroupDisplay?: string | null;
    readonly adjustment1Display?: string | null;
    readonly adjustment2Display?: string | null;
    readonly adjustment3Display?: string | null;
};

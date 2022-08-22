/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OrderProductModel = {
    orderProductKey?: number;
    orderKey?: number;
    productKey?: number;
    locationKey?: number;
    yardKey?: number;
    unitPrice: number;
    freightRate: number;
    haulerRate: number;
    freightType: string;
    taxCodeKey?: number;
    surcharge: number;
    surchargeType: string;
    orderQuantity?: number | null;
    status: string;
    dateAdded: string;
    expirationDate?: string | null;
    deliveryDate?: string | null;
    defaultPhase?: string | null;
    costType?: string | null;
    activeDate?: string | null;
    orderQuantityType?: string | null;
    adjustmentKey1?: number | null;
    adjustmentKey2?: number | null;
    adjustmentKey3?: number | null;
    description?: string | null;
    haulerKey?: number | null;
    taxCodeGroupKey?: number | null;
    readonly modifiedDate?: string;
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

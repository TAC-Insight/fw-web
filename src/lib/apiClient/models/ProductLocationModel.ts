/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProductLocationModel = {
    productLocationKey?: number;
    yardKey: number;
    productKey: number;
    inventory: boolean;
    costPerUnit?: number | null;
    royalty?: number | null;
    tonConversionFactor?: number | null;
    taxCodeKey?: number | null;
    readonly yardDisplay?: string | null;
    readonly productDisplay?: string | null;
    readonly taxCodeDisplay?: string | null;
};

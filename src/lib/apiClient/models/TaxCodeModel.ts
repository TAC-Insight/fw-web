/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaxCodeTaxSubcodeModel } from './TaxCodeTaxSubcodeModel';

export type TaxCodeModel = {
    taxCodeKey?: number;
    code: string;
    description?: string | null;
    materialPercent: number;
    freightPercent: number;
    surchargePercent: number;
    glAccount?: string | null;
    qbid?: string | null;
    materialPercent2?: number | null;
    freightPercent2?: number | null;
    surchargePercent2?: number | null;
    description2?: string | null;
    glAccount2?: string | null;
    percent1?: number | null;
    percent2?: number | null;
    percent3?: number | null;
    percent4?: number | null;
    taxSubcodes?: Array<TaxCodeTaxSubcodeModel> | null;
};

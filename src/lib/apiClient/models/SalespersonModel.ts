/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SalespersonModel = {
    salespersonKey?: number;
    name: string;
    phone?: string | null;
    email?: string | null;
    regionKey?: number | null;
    active?: boolean;
    readonly regionDisplay?: string | null;
};

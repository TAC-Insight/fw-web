/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AppOrderProductModel } from './AppOrderProductModel';
import type { AppPhaseModel } from './AppPhaseModel';

export type AppOrderModel = {
    orderKey?: number;
    orderNumber?: number;
    customerKey?: number;
    direction?: string | null;
    payType?: string | null;
    poNumber?: string | null;
    defaultJob?: string | null;
    deliveryLocation?: string | null;
    status?: string | null;
    amountMinimum?: number | null;
    loadDefault?: number | null;
    useTruckCapacity?: boolean;
    jobRequisition?: boolean;
    description?: string | null;
    openProductOrder?: boolean;
    defaultJobCompanyCode?: string | null;
    orderProducts?: Array<AppOrderProductModel> | null;
    phases?: Array<AppPhaseModel> | null;
    certified?: boolean | null;
    useHaulZones?: boolean | null;
    udF1?: string | null;
    udF2?: string | null;
    udF3?: string | null;
    pricingTemplateKey?: number | null;
    address1?: string | null;
    address2?: string | null;
    city?: string | null;
    country?: string | null;
    state?: string | null;
    zip?: string | null;
};

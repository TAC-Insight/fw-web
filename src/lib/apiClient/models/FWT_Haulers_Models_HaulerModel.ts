/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FWT_Haulers_Models_HaulerRegionModel } from './FWT_Haulers_Models_HaulerRegionModel';

export type FWT_Haulers_Models_HaulerModel = {
    haulerKey?: number;
    haulerID: string;
    haulerName: string;
    address1?: string | null;
    address2?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    phone?: string | null;
    contactName?: string | null;
    contactPhone?: string | null;
    contactEmail?: string | null;
    vendorAPNum?: string | null;
    allRegion: boolean;
    haulerType: string;
    country?: string | null;
    enableDispatching?: boolean | null;
    insuranceExpirationDate?: string | null;
    active?: boolean | null;
    modifiedDate: string;
    insuranceNumber?: string | null;
    workersCompNumber?: string | null;
    workersCompExpirationDate?: string | null;
    certificationNumber?: string | null;
    certificationExpirationDate?: string | null;
    regions?: Array<FWT_Haulers_Models_HaulerRegionModel> | null;
};

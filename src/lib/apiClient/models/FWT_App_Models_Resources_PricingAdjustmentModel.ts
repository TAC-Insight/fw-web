/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FWT_App_Models_Resources_PricingAdjustmentRateModel } from './FWT_App_Models_Resources_PricingAdjustmentRateModel';

export type FWT_App_Models_Resources_PricingAdjustmentModel = {
    adjustmentKey?: number;
    adjustmentType?: string | null;
    method?: string | null;
    description?: string | null;
    rates?: Array<FWT_App_Models_Resources_PricingAdjustmentRateModel> | null;
};

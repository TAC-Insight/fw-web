/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FWT_App_Models_Resources_ProductPricingModel } from './FWT_App_Models_Resources_ProductPricingModel';

export type FWT_App_Models_Resources_ProductModel = {
    productKey?: number;
    productID?: string | null;
    productDescription?: string | null;
    unitOfMeasure?: string | null;
    dotName?: string | null;
    pricings?: Array<FWT_App_Models_Resources_ProductPricingModel> | null;
};

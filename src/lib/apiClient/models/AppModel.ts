/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AppBarcodeFormatModel } from './AppBarcodeFormatModel';
import type { AppLocationInfoModel } from './AppLocationInfoModel';
import type { AppRequestInfoModel } from './AppRequestInfoModel';
import type { AppUDFModel } from './AppUDFModel';
import type { AppYardModel } from './AppYardModel';

export type AppModel = {
    locationInfo?: AppLocationInfoModel;
    readonly yards?: Array<AppYardModel> | null;
    readonly ticketUDFs?: Array<AppUDFModel> | null;
    readonly truckUDFs?: Array<AppUDFModel> | null;
    readonly orderUDFs?: Array<AppUDFModel> | null;
    readonly barcodeFormats?: Array<AppBarcodeFormatModel> | null;
    requestInfo?: AppRequestInfoModel;
};

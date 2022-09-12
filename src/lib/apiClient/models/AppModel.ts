/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AppUDFModel } from './AppUDFModel';
import type { BarcodeFormatModel } from './BarcodeFormatModel';
import type { LocationInfoModel } from './LocationInfoModel';
import type { RequestInfoModel } from './RequestInfoModel';
import type { YardInfoModel } from './YardInfoModel';

export type AppModel = {
    locationInfo?: LocationInfoModel;
    readonly yards?: Array<YardInfoModel> | null;
    readonly ticketUDFs?: Array<AppUDFModel> | null;
    readonly truckUDFs?: Array<AppUDFModel> | null;
    readonly orderUDFs?: Array<AppUDFModel> | null;
    readonly barcodeFormats?: Array<BarcodeFormatModel> | null;
    requestInfo?: RequestInfoModel;
};

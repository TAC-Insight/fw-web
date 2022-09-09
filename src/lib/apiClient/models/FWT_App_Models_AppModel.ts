/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FWT_App_Models_AppUDFModel } from './FWT_App_Models_AppUDFModel';
import type { FWT_App_Models_BarcodeFormatModel } from './FWT_App_Models_BarcodeFormatModel';
import type { FWT_App_Models_LocationInfoModel } from './FWT_App_Models_LocationInfoModel';
import type { FWT_App_Models_RequestInfoModel } from './FWT_App_Models_RequestInfoModel';
import type { FWT_App_Models_YardModel } from './FWT_App_Models_YardModel';

export type FWT_App_Models_AppModel = {
    locationInfo?: FWT_App_Models_LocationInfoModel;
    readonly yards?: Array<FWT_App_Models_YardModel> | null;
    readonly ticketUDFs?: Array<FWT_App_Models_AppUDFModel> | null;
    readonly truckUDFs?: Array<FWT_App_Models_AppUDFModel> | null;
    readonly orderUDFs?: Array<FWT_App_Models_AppUDFModel> | null;
    readonly barcodeFormats?: Array<FWT_App_Models_BarcodeFormatModel> | null;
    requestInfo?: FWT_App_Models_RequestInfoModel;
};
